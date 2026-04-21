import { StaticPage, buildStaticMetadata } from "@/components/static-page";

export const metadata = buildStaticMetadata(
  "Nosotros",
  "Conoce la visión y experiencia de Maderas Concordia en soluciones de madera para diseño, construcción e industria.",
);

export default function NosotrosPage() {
  return (
    <StaticPage
      title="Nosotros"
      description="Con casi 50 años de trayectoria, Maderas Concordia acompaña proyectos con criterio comercial, experiencia técnica y una selección amplia de productos en madera."
      intro="Esta primera versión del sitio sintetiza la propuesta de la empresa en una navegación simple, cálida y orientada a que clientes nuevos o recurrentes encuentren más rápido la línea adecuada."
      ctaLabel="Ver catálogo"
      ctaHref="/productos"
      sections={[
        {
          title: "Qué hacemos",
          body: "Atendemos necesidades de carpintería, diseño interior, construcción e industria con un catálogo que combina especies finas, tableros, materiales para obra y soluciones de embalaje.",
        },
        {
          title: "Cómo trabajamos",
          body: "Priorizamos la asesoría para recomendar la mejor especie, tablero o formato según uso, resistencia, apariencia y presupuesto del proyecto.",
        },
        {
          title: "Hacia dónde puede crecer este sitio",
          body: "La base quedó preparada para seguir sumando fichas, PDFs, especificaciones, casos de uso y mejores filtros sin depender de un backend en esta etapa.",
        },
      ]}
    />
  );
}
