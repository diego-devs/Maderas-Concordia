"use client";

import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-[rgba(12,10,9,0.68)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[rgba(12,10,9,0.56)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-col pr-2" onClick={() => setIsOpen(false)}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300 sm:text-xs">
            Querétaro · Casa productora
          </span>
          <span className="truncate text-lg font-semibold text-white sm:text-xl">Chupamirto Producciones</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-200 transition hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contacto"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
          >
            Cotizar proyecto
          </Link>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:border-amber-300 hover:text-amber-200 lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-xl leading-none">☰</span>
        </button>
      </div>

      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-[60] lg:hidden">
        <div className="fixed inset-0 bg-stone-950/65 backdrop-blur-md" aria-hidden="true" />
        <div className="fixed inset-0 flex justify-end">
          <Dialog.Panel className="flex h-full w-[min(88vw,22rem)] flex-col border-l border-white/10 bg-[rgba(18,15,14,0.92)] p-5 text-white shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300">Menú</p>
                <Dialog.Title className="mt-1 text-lg font-semibold">Chupamirto Producciones</Dialog.Title>
              </div>
              <button
                type="button"
                aria-label="Cerrar menú"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-lg transition hover:border-amber-300 hover:text-amber-200"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-medium text-stone-100 transition hover:border-amber-300/40 hover:bg-white/10 hover:text-amber-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contacto"
              className="mt-6 rounded-full bg-amber-500 px-5 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
              onClick={() => setIsOpen(false)}
            >
              Cotizar proyecto
            </Link>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}
