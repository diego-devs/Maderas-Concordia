import { StaticPage, buildStaticMetadata } from "@/components/static-page";

export const metadata = buildStaticMetadata(
  "Políticas de compra",
  "Lineamientos generales para compras y cotizaciones en Maderas Concordia.",
);

export default function PoliticasDeCompraPage() {
  return (
    <StaticPage
      title="Políticas de compra"
      description="Criterios generales para operar pedidos, validaciones y seguimiento comercial."
      intro="Estas políticas están redactadas como contenido mínimo útil para la primera salida del sitio. No sustituyen acuerdos comerciales particulares ni condiciones específicas de cada pedido."
      ctaLabel="Solicitar cotización"
      ctaHref="/contacto"
      sections={[
        {
          title: "Cotizaciones",
          body: "Las cotizaciones se emiten con base en especificaciones, cantidades, formatos y destino. Su vigencia y condiciones se indican caso por caso.",
        },
        {
          title: "Confirmación de pedido",
          body: "Todo pedido queda sujeto a validación comercial y operativa. Antes de cerrar una compra se revisan existencias, tiempos de entrega y alcances exactos del suministro.",
        },
        {
          title: "Aclaraciones",
          body: "Cualquier incidencia relacionada con materiales, entrega o facturación debe reportarse directamente al equipo de atención para su revisión y seguimiento.",
        },
      ]}
    />
  );
}
