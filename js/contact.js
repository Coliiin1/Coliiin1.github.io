import { $, $$ } from './utils.js';
import { I18n, t } from './i18n.js';
import { Toast } from './toast.js';
import { CONTACT_ENDPOINT } from './config.js';

/* =====================================================
   RF-06..RF-09 · RNF-06 · FORMULARIO DE CONTACTO
   DEV-BE-01 · El endpoint se configura en js/config.js
   (Formspree). Sin endpoint → modo demostración.
   ===================================================== */
export const Contact = (() => {
    const DEMO_MODE = !CONTACT_ENDPOINT || location.protocol === 'file:';
    // Expresión regular basada en RFC 5322 (forma práctica, exige dominio con TLD)
    const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    const HTML_RE = /<\s*\/?\s*[a-z!][^>]*>|javascript\s*:|on\w+\s*=/i;
    const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

    const form = $('#contact-form');
    const submitBtn = $('#contact-submit');
    const label = $('.btn-label', submitBtn);
    const counter = $('#msg-counter');
    const fields = $$('input:not([name="website"]), textarea', form);
    let sending = false;

    const normalize = (v) => v.replace(CONTROL_RE, '').trim();

    function validateField(input) {
        const value = normalize(input.value);
        const min = Number(input.getAttribute('minlength')) || 0;
        const max = Number(input.getAttribute('maxlength')) || Infinity;
        let error = '';
        if (value.length === 0) error = t('err.required');
        else if (value.length < min) error = t('err.min', { n: min });
        else if (value.length > max) error = t('err.max', { n: max });
        else if (input.type === 'email' && !EMAIL_RE.test(value)) error = t('err.email');
        else if (HTML_RE.test(value)) error = t('err.html');

        const field = input.closest('.field');
        const errEl = $('#err-' + input.name);
        field.classList.toggle('is-invalid', Boolean(error));
        input.setAttribute('aria-invalid', String(Boolean(error)));
        errEl.textContent = error;
        return !error;
    }

    function validateAll() {
        let firstInvalid = null;
        fields.forEach((f) => { if (!validateField(f) && !firstInvalid) firstInvalid = f; });
        if (firstInvalid) firstInvalid.focus();
        return !firstInvalid;
    }

    function setSending(state) {
        sending = state;
        submitBtn.disabled = state;
        submitBtn.setAttribute('aria-busy', String(state));
        label.textContent = state ? t('form.sending') : t('form.submit');
        const icon = $('svg, .spinner', submitBtn);
        if (state) icon.outerHTML = '<span class="spinner" aria-hidden="true"></span>';
        else if (icon.classList.contains('spinner')) {
            icon.outerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>';
        }
    }

    function resetForm() {
        form.reset();
        fields.forEach((f) => {
            f.closest('.field').classList.remove('is-invalid');
            f.removeAttribute('aria-invalid');
            $('#err-' + f.name).textContent = '';
        });
        updateCounter();
    }

    function updateCounter() {
        const ta = $('#f-mensaje');
        counter.textContent = ta.value.length + ' / ' + ta.maxLength;
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (sending) return; // bloqueo de envío múltiple
        if (!validateAll()) {
            Toast.show({ type: 'error', title: t('toast.invalidTitle'), message: t('toast.invalidText') });
            return;
        }

        // Honeypot: si un bot lo rellenó, se simula éxito sin enviar nada
        if ($('#f-website').value) { resetForm(); return; }

        const payload = new FormData();
        fields.forEach((f) => payload.append(f.name, normalize(f.value)));
        payload.append('lang', I18n.lang);
        // Compatibilidad Formspree: correo de respuesta y asunto del mensaje
        payload.append('email', normalize($('#f-correo').value));
        payload.append('_subject', 'Portafolio · ' + normalize($('#f-asunto').value));

        setSending(true);
        try {
            if (DEMO_MODE) {
                // Sin endpoint configurado: se simula el envío (modo demostración)
                await new Promise((r) => setTimeout(r, 900));
                Toast.show({ title: t('toast.okTitle'), message: t('toast.demo') });
            } else {
                const res = await fetch(CONTACT_ENDPOINT, {
                    method: 'POST',
                    body: payload,
                    headers: { 'Accept': 'application/json' }
                });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                Toast.show({ title: t('toast.okTitle'), message: t('toast.okText') });
            }
            resetForm();
        } catch (err) {
            Toast.show({ type: 'error', title: t('toast.errTitle'), message: t('toast.errText') });
        } finally {
            setSending(false);
        }
    }

    form.addEventListener('submit', onSubmit);
    fields.forEach((f) => {
        f.addEventListener('blur', () => { if (f.value) validateField(f); });
        f.addEventListener('input', () => {
            if (f.closest('.field').classList.contains('is-invalid')) validateField(f);
        });
    });
    $('#f-mensaje').addEventListener('input', updateCounter);
    document.addEventListener('i18n:change', () => { if (!sending) label.textContent = t('form.submit'); });

    return {};
})();