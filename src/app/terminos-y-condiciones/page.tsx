import { StaticPage, buildStaticMetadata } from "@/components/static-page";

export const metadata = buildStaticMetadata(
  "Términos y condiciones",
  "Términos generales de uso para la versión inicial del sitio de Maderas Concordia.",
);

export default function TerminosPage() {
  return (
    <StaticPage
      title="Términos y condiciones"
      description="Condiciones generales para el uso del sitio y la consulta informativa del catálogo."
      intro="El contenido publicado en esta versión tiene fines informativos y de navegación. La confirmación comercial de productos, precios, medidas y disponibilidad siempre ocurre por contacto directo con la empresa."
      sections={[
        {
          title: "Uso del sitio",
          body: "El usuario puede navegar categorías, productos y páginas informativas para conocer la oferta general de Maderas Concordia. El sitio no procesa pagos ni genera compras automáticas en esta etapa.",
        },
        {
          title: "Información comercial",
          body: "Precios, disponibilidad, tiempos de entrega y especificaciones pueden cambiar sin previo aviso. Toda operación final debe quedar respaldada por comunicación directa con el equipo comercial.",
        },
        {
          title: "Propiedad de contenido",
          body: "Los textos, imágenes y estructura del sitio forman parte de la identidad y comunicación comercial de Maderas Concordia para esta primera versión navegable.",
        },
      ]}
    />
  );
}
