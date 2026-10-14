/* =====================================================
   BUS DE EVENTOS INTERNO
   Desacopla los módulos entre sí. Eventos publicados:
     - modal:open   · un modal acaba de abrirse
     - modal:close  · un modal se cerró restaurando el foco
     - view:change  · cambió la vista de la SPA { id }
   ===================================================== */
const listeners = new Map();

export const bus = {
    on(event, handler) {
        if (!listeners.has(event)) listeners.set(event, new Set());
        listeners.get(event).add(handler);
        return () => listeners.get(event).delete(handler);
    },
    emit(event, detail) {
        if (!listeners.has(event)) return;
        listeners.get(event).forEach((handler) => handler(detail));
    }
};
