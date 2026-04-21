import { StaticPage, buildStaticMetadata } from "@/components/static-page";

export const metadata = buildStaticMetadata(
  "Pagos, envíos y facturación",
  "Información base sobre pagos, logística y facturación en Maderas Concordia.",
);

export default function PagosEnviosFacturacionPage() {
  return (
    <StaticPage
      title="Pagos, envíos y facturación"
      description="Resumen operativo para orientar al cliente antes de cerrar una compra o levantar una cotización."
      intro="La información exacta puede variar según volumen, destino, tipo de material y condiciones comerciales. Esta página sirve como referencia inicial para el sitio navegable actual."
      ctaLabel="Hablar con ventas"
      ctaHref="/contacto"
      sections={[
        {
          title: "Pagos",
          body: "Las condiciones de pago se confirman al momento de la cotización y pueden depender del tipo de producto, volumen solicitado y condiciones del pedido.",
        },
        {
          title: "Envíos",
          body: "La cobertura, tiempos y costos logísticos dependen del destino, el tipo de material y la cantidad requerida. El equipo comercial puede orientar sobre entrega local, foránea o coordinación con transporte.",
        },
        {
          title: "Facturación",
          body: "La facturación se gestiona directamente con los datos fiscales del cliente una vez confirmada la operación. Se recomienda compartir la información completa al solicitar la cotización.",
        },
      ]}
    />
  );
}
