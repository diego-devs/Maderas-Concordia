import { StaticPage, buildStaticMetadata } from "@/components/static-page";

export const metadata = buildStaticMetadata(
  "Preguntas frecuentes",
  "Respuestas rápidas sobre cotización, materiales, entregas y atención en Maderas Concordia.",
);

export default function PreguntasFrecuentesPage() {
  return (
    <StaticPage
      title="Preguntas frecuentes"
      description="Una base corta y útil para resolver dudas comunes mientras el sitio crece con más detalle comercial y técnico."
      intro="Las respuestas están planteadas para una primera versión estática: orientan al usuario, lo llevan a contacto y dejan claro que la asesoría comercial sigue siendo el canal principal para confirmar disponibilidad o especificaciones."
      ctaLabel="Contactar ahora"
      ctaHref="/contacto"
      sections={[
        {
          title: "¿Puedo cotizar desde el sitio?",
          body: "Por ahora no hay carrito ni formulario conectado. La ruta recomendada es revisar categorías o productos y después contactar al equipo para recibir una cotización personalizada.",
        },
        {
          title: "¿La disponibilidad se muestra en línea?",
          body: "No en esta versión. El catálogo es informativo y local; la disponibilidad, medidas y presentaciones se validan directamente con el equipo comercial.",
        },
        {
          title: "¿Manejan productos para distintos tipos de proyecto?",
          body: "Sí. El catálogo inicial agrupa soluciones para carpintería, interiorismo, construcción, embalaje industrial y materiales para aplicaciones de exterior o alto valor estético.",
        },
      ]}
    />
  );
}
