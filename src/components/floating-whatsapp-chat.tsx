"use client";

import { Dialog } from "@headlessui/react";
import { useMemo, useState } from "react";

type FloatingWhatsAppChatProps = {
  phoneNumber: string;
};

export function FloatingWhatsAppChat({ phoneNumber }: FloatingWhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hola, quiero cotizar un proyecto con Chupamirto Producciones.");

  const whatsappHref = useMemo(() => {
    const base = `https://wa.me/${phoneNumber}`;
    const trimmed = message.trim();
    return trimmed ? `${base}?text=${encodeURIComponent(trimmed)}` : base;
  }, [message, phoneNumber]);

  return (
    <>
      <button
        aria-label="Abrir chat de WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-15 w-15 items-center justify-center rounded-full border border-white/25 bg-[#25D366] text-2xl text-[#0d2f20] shadow-[0_24px_55px_-18px_rgba(37,211,102,0.78)] transition hover:scale-[1.03] hover:bg-[#30dd72] sm:bottom-6 sm:right-6"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span aria-hidden="true">✆</span>
      </button>

      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-[60]">
        <div className="fixed inset-0 bg-stone-950/60 backdrop-blur-md" aria-hidden="true" />
        <div className="fixed inset-0 flex items-end justify-center p-4 sm:items-center">
          <Dialog.Panel className="w-full max-w-md rounded-[2rem] border border-white/25 bg-[rgba(255,255,255,0.86)] p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-white/30">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#128C4A]">WhatsApp directo</p>
                <Dialog.Title className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
                  Cuéntanos tu proyecto
                </Dialog.Title>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Escribe un mensaje y abriremos WhatsApp con el texto listo para continuar la conversación.
                </p>
              </div>
              <button
                aria-label="Cerrar chat"
                className="rounded-full border border-stone-300 bg-white/70 px-3 py-2 text-sm font-semibold text-stone-500 transition hover:border-stone-400 hover:text-stone-900"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <label htmlFor="whatsapp-message" className="text-sm font-semibold text-stone-800">
                Mensaje
              </label>
              <textarea
                id="whatsapp-message"
                aria-label="Mensaje para WhatsApp"
                className="min-h-[160px] w-full rounded-[1.5rem] border border-stone-200 bg-white/75 px-4 py-3 text-sm leading-7 text-stone-800 outline-none transition focus:border-[#25D366] focus:bg-white focus:ring-4 focus:ring-[#25D366]/20"
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Hola, me interesa cotizar una producción..."
                value={message}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:text-stone-950"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                Cancelar
              </button>
              <a
                className="rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-[#30dd72]"
                href={whatsappHref}
                onClick={() => setIsOpen(false)}
                rel="noreferrer"
                target="_blank"
              >
                Abrir WhatsApp
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
