import { StaticPage, buildStaticMetadata } from "@/components/static-page";

export const metadata = buildStaticMetadata(
  "Privacidad",
  "Aviso general sobre tratamiento de datos en la versión inicial del sitio de Maderas Concordia.",
);

export default function PrivacidadPage() {
  return (
    <StaticPage
      title="Privacidad"
      description="Información general sobre el uso de datos compartidos por medios de contacto."
      intro="Esta primera versión del sitio no incorpora formularios ni panel administrativo. Los datos que el usuario comparta por correo, teléfono o mensajería se usan únicamente para dar seguimiento comercial y atención a su solicitud."
      sections={[
        {
          title: "Datos de contacto",
          body: "Cuando el usuario escribe o llama, puede compartir nombre, empresa, requerimientos, medidas, destino o referencias de producto. Esa información se utiliza para responder la consulta y preparar atención comercial.",
        },
        {
          title: "Uso de la información",
          body: "La información recibida se usa para contacto, seguimiento de cotizaciones y coordinación operativa relacionada con el proyecto del cliente.",
        },
        {
          title: "Consultas",
          body: "Si el usuario necesita aclarar el tratamiento de su información o actualizar datos compartidos, puede hacerlo directamente a través de la página de contacto.",
        },
      ]}
      ctaLabel="Ir a contacto"
      ctaHref="/contacto"
    />
  );
}
