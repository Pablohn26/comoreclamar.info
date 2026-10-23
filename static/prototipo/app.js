/* comoreclamar — prototipo de la lógica
   Todo se calcula en el navegador. Nada sale del equipo.                        */

/* ------------------------------------------------------------------ catálogo */
const EMPRESAS = {
  iberdrola: {
    nombre: "Iberdrola", sector: "Energía", tipo: "Privada", ambito: "consumo", plazo: 30,
    organismo: "CNMC · Consejería de Industria de tu comunidad",
    pasos: [
      ["Reclama por escrito, siempre con constancia", "Usa el formulario de su web o el correo de atención al cliente. Guarda el número de referencia o el acuse: sin eso no hay nada que reclamar después."],
      ["Cuéntales qué pasó y qué pides", "Fecha, número de contrato o CUPS, el importe discutido y qué solución quieres."],
      ["Espera un mes", "Es el plazo máximo legal para respuesta en energía. Si no contestan, la reclamación se entiende desestimada y puedes subir de escalón."]
    ],
    donde: "Formulario web · 900 100 230 · correo de la compañía · oficinas",
    canales: {
      web: { url: "https://www.iberdrola.es/atencion-cliente", nota: "Formulario oficial. Guarda el número de referencia que te dan.",
             guia: "../guias/iberdrola-formulario-reclamacion.html" },
      telefono: { numero: "900 100 230", nota: "Atención al cliente. Pide siempre el número de expediente de la llamada." },
      correo: "clientes@iberdrola.es",
      presencial: [{ nombre: "Sede de Iberdrola (Torre Iberdrola)", direccion: "Plaza Euskadi 5 · 48009 Bilbao",
                     lat: 43.2679701, lon: -2.9386427 }],
      burofax: { direccion: "Iberdrola Clientes, S.A.U. · Plaza Euskadi 5 · 48009 Bilbao" }
    },
    campos: [
      { id: "cups", et: "CUPS (empieza por ES)", ph: "ES0021000001234567AB", ayuda: "Está en tu factura, arriba a la izquierda", req: true },
      { id: "contrato", et: "Número de contrato", ph: "123456789" }
    ],
    dpo: "Delegado de Protección de Datos, Iberdrola S.A., Plaza Euskadi 5, 48009 Bilbao",
    privacidad: {
      politica: "https://www.iberdrola.es/aviso-legal",
      responsable: "Iberdrola Clientes, S.A.U.",
      cif: null,
      domicilio: "Plaza Euskadi 5, 48009 Bilbao",
      dpo: null, dpoTel: null, derechosDir: null, derechosUrl: null, autoridad: "https://www.aepd.es",
      actualizada: null, iconos: {}, iconosEstado: "pendiente"
    },
    aviso_gdpr: null,
    fuentes: "Protocolo de atención al cliente de Iberdrola (22-10-2026) · Ley 24/2013 del Sector Eléctrico"
  },
  amazon: {
    nombre: "Amazon", sector: "Comercio electrónico", tipo: "Privada", ambito: "consumo", plazo: 30,
    organismo: "OMIC o consumo autonómico",
    pasos: [
      ["Abre la reclamación desde tu cuenta", "Pedidos → problema con el pedido → «Necesito más ayuda» → chat o correo."],
      ["Exige la respuesta por escrito", "El chat no deja rastro útil: pide que confirmen por correo lo que te han dicho."],
      ["Si no hay acuerdo, reclamación formal", "Y si pagaste con tarjeta, valora el contracargo ante tu banco."]
    ],
    donde: "Centro de ayuda de Amazon · chat · correo · reclamación formal",
    canales: {
      web: { url: "https://www.amazon.es/gp/help/customer/display.html", nota: "Pedidos → problema con el pedido → «Necesito más ayuda»." },
      correo: "cs-reply@amazon.es",
      presencial: [],
      burofax: { direccion: "Amazon Spain Services, S.L.U. · Calle Ramírez de Prado 5 · 28045 Madrid" }
    },
    campos: [
      { id: "pedido", et: "Número de pedido", ph: "408-1234567-1234567", ayuda: "En «Tus pedidos», empieza por 3 dígitos", req: true }
    ],
    dpo: "Amazon Spain Services, S.L.U., Calle Ramírez de Prado 5, 28045 Madrid",
    privacidad: {
      politica: "https://www.amazon.es/gp/help/customer/display.html?nodeId=201909010",
      responsable: "Amazon EU S.à r.l. (sucursal en España)",
      cif: null, domicilio: "Calle Ramírez de Prado 5, 28045 Madrid",
      dpo: null, dpoTel: null, derechosDir: null, derechosUrl: null, autoridad: "https://www.aepd.es",
      actualizada: null, iconos: {}, iconosEstado: "pendiente"
    },
    aviso_gdpr: null,
    fuentes: "Centro de ayuda de Amazon (22-10-2026)"
  },
  mercadona: {
    nombre: "Mercadona", sector: "Comercio y distribución", tipo: "Privada", ambito: "consumo", plazo: 30,
    organismo: "OMIC o consumo autonómico",
    pasos: [
      ["Pide las hojas de reclamaciones en la tienda", "Es obligatorio que las tengan. Pide una y quédate con la copia: es tu prueba."],
      ["Atención al cliente", "Formulario web o teléfono 800 500 220."]
    ],
    donde: "Formulario web · 800 500 220 · dpo@mercadona.es · domicilio social en Albalat dels Sorells",
    canales: {
      web: { url: "https://www.mercadona.es/atencion-al-cliente/", nota: "Formulario de atención al cliente.",
             guia: "../guias/mercadona-formulario-atencion.html" },
      telefono: { numero: "800 500 220", nota: "Gratuito. Apunta el número de incidencia." },
      correo: "dpo@mercadona.es",
      presencial: [{ nombre: "Hojas de reclamaciones en tienda", direccion: "En cualquier supermercado. Pide copia sellada." },
                   { nombre: "Domicilio social y Asesoría Jurídico Procesos", direccion: "C/ Alfonso Roig Alfonso s/n · 46135 Albalat dels Sorells (Valencia)" }],
      burofax: { direccion: "Mercadona, S.A. · C/ Alfonso Roig Alfonso s/n · 46135 Albalat dels Sorells (Valencia)" }
    },
    campos: [
      { id: "ticket", et: "Fecha y tienda del ticket", ph: "12/09/2026 · Mercadona de Chamberí" }
    ],
    dpo: "dpo@mercadona.es (800 500 220)",
    aviso_gdpr: null,
    privacidad: {
      politica: "https://info.mercadona.es/es/politica-de-privacidad",
      responsable: "MERCADONA, S.A.",
      cif: "A-46.103.834",
      domicilio: "C/ Alfonso Roig Alfonso s/n, 46135 Albalat dels Sorells (Valencia)",
      dpo: "dpo@mercadona.es",
      dpoTel: "800 500 220",
      derechosDir: "C/ Alfonso Roig Alfonso s/n (Asesoría Jurídico Procesos), 46135 Albalat dels Sorells (Valencia)",
      derechosUrl: "https://info.mercadona.es/es/atencion-al-cliente/formulario-arco",
      derechosUrlTexto: "Formulario ARCO de Mercadona",
      autoridad: "https://www.aepd.es",
      actualizada: "2025-08-01",
      iconos: {
        retencion:   { valor: "necesario",     nota: "«El tiempo necesario para las finalidades»; un año para currículos." },
        terceros:    { valor: "reuso",         nota: "Comparte con proveedores y admite perfilado comercial." },
        anuncios:    { valor: "opt-out",       nota: "Envía publicidad y elabora perfil comercial salvo que te opongas." },
        autoridades: { valor: "proceso-legal", nota: "Cede datos a las Fuerzas y Cuerpos de Seguridad cuando la ley lo permite." }
      },
      iconosEstado: "propuesta",
      cookies: {
        url: "https://tienda.mercadona.es/legal/cookies/es/",
        actualizada: "2025-03-07",
        tipos: ["tecnicas", "analiticas"],
        configurador: "https://www.mercadona.es/?cookieConfig=true",
        terceros: ["Zendesk", "Zopim", "Amplitude", "Google Analytics"],
        nota: "Distingue técnicas (esenciales) y analíticas. No declara cookies publicitarias ni de perfilado."
      }
    },
    fuentes: "Política de privacidad de info.mercadona.es (actualizada 01-08-2025) · web de atención al cliente"
  },
  "cm-educacion": {
    nombre: "Consejería de Educación (Comunidad de Madrid)",
    sector: "Sector público", tipo: "Pública", ambito: "administracion", plazo: 90,
    organismo: "Consejería de Educación, Ciencia y Universidades",
    pasos: [
      ["Mira el plazo del procedimiento", "Una alegación dentro de un procedimiento abierto (matriculación, becas, oposiciones) tiene días, no meses: el plazo está en la convocatoria o en el trámite de audiencia."],
      ["Preséntala por el registro electrónico", "Sede electrónica de la Comunidad de Madrid. Guarda el justificante con número de registro: esa fecha es la que cuenta."],
      ["Espera la resolución", "Si no contestan, el silencio puede ser estimatorio o desestimatorio según el procedimiento. Y contra la resolución cabe recurso de alzada en un mes."]
    ],
    donde: "Sede electrónica de la Comunidad de Madrid · Registro General · Consejería de Educación",
    canales: {
      web: { url: "https://sede.comunidad.madrid/", nota: "Registro electrónico. El justificante con número de registro es tu prueba." },
      presencial: [{ nombre: "Registro General de la Comunidad de Madrid", direccion: "Calle Ramírez de Prado 3 · 28045 Madrid",
                     lat: 40.4002062, lon: -3.6902491 },
                   { nombre: "Registros de las consejerías y juntas municipales de distrito", direccion: "Cualquiera de ellos, en Madrid capital" }]
    },
    campos: [
      { id: "expediente", et: "Número de expediente", ph: "EXP 09/2026-BECAS-0412", req: true }
    ],
    dpo: "Delegado de Protección de Datos de la Comunidad de Madrid",
    privacidad: {
      politica: "https://sede.comunidad.madrid/proteccion-datos",
      responsable: "Comunidad de Madrid (Consejería de Educación, Ciencia y Universidades)",
      cif: null, domicilio: "Calle Ramírez de Prado 3, 28045 Madrid",
      dpo: null, dpoTel: null, derechosDir: null, derechosUrl: null, autoridad: "https://www.aepd.es",
      actualizada: null, iconos: {}, iconosEstado: "pendiente"
    },
    aviso_gdpr: null,
    fuentes: "Ley 39/2015 del Procedimiento Administrativo Común · Sede electrónica de la Comunidad de Madrid (22-10-2026)"
  }
};


/* Datos oficiales por comunidad autónoma. Se amplía sin tocar el código de la web. */
const CCAA = {
  "Madrid": {
    nombre: "Comunidad de Madrid",
    enlace: "https://www.comunidad.madrid/servicios/consumo",
    nota: "En Madrid capital dispones de una OMIC Central y de 21 oficinas de distrito ubicadas en las Juntas Municipales.",
    oficinas: [
      { nombre: "OMIC Central", direccion: "Gran Vía 22 · 28013 Madrid", extra: "Cita previa por teléfono 010" },
      { nombre: "Juntas Municipales de Distrito", direccion: "21 oficinas, una por distrito", extra: "Se atiende en la junta de tu distrito" }
    ]
  },
  "Andalucía": { nombre: "Andalucía", enlace: null,
                 nota: "Cada municipio tiene su OMIC; en capitales, en las juntas municipales de distrito.", oficinas: [] },
  "Cataluña": { nombre: "Cataluña", enlace: "https://consum.gencat.cat/",
                nota: "Aquí el órgano es la Agència Catalana del Consum (oficinas comarcales).", oficinas: [] },
  "Comunidad Valenciana": { nombre: "Comunidad Valenciana", enlace: null,
                            nota: "Oficinas de consumo municipales y provinciales.", oficinas: [] },
  "Galicia": { nombre: "Galicia", enlace: "https://consumo.xunta.gal/es",
               nota: "Instituto Galego de Consumo y oficinas municipales.", oficinas: [] },
  "País Vasco": { nombre: "País Vasco", enlace: "https://www.euskadi.eus/consumo/",
                  nota: "KontsumoBIDE y oficinas de consumo municipales.", oficinas: [] },
  "Aragón": { nombre: "Aragón", enlace: null, nota: "Consumo del Gobierno de Aragón; oficinas municipales y comarcales.", oficinas: [] },
  "Principado de Asturias": { nombre: "Principado de Asturias", enlace: null, nota: "Oficinas municipales de consumo y la Dirección General de Consumo.", oficinas: [] },
  "Illes Balears": { nombre: "Illes Balears", enlace: null, nota: "Oficinas municipales y las oficinas de consumo insulares.", oficinas: [] },
  "Canarias": { nombre: "Canarias", enlace: null, nota: "Oficinas municipales de consumo y la Dirección General de Comercio y Consumo.", oficinas: [] },
  "Cantabria": { nombre: "Cantabria", enlace: null, nota: "Oficina de Consumo del Gobierno de Cantabria y las municipales.", oficinas: [] },
  "Castilla-La Mancha": { nombre: "Castilla-La Mancha", enlace: null, nota: "Oficinas municipales y las OMIC provinciales.", oficinas: [] },
  "Extremadura": { nombre: "Extremadura", enlace: null, nota: "Oficinas de consumo municipales y la Dirección General de Consumo.", oficinas: [] },
  "La Rioja": { nombre: "La Rioja", enlace: null, nota: "Oficinas municipales de consumo y la Dirección General de Consumo.", oficinas: [] },
  "Región de Murcia": { nombre: "Región de Murcia", enlace: null, nota: "Oficinas municipales de consumo y la Dirección General de Consumo.", oficinas: [] },
  "Navarra": { nombre: "Navarra", enlace: null, nota: "Servicio de Consumo del Gobierno de Navarra y oficinas municipales.", oficinas: [] },
  "Ceuta": { nombre: "Ceuta", enlace: null, nota: "Oficina de Consumo de la Ciudad Autónoma.", oficinas: [] },
  "Melilla": { nombre: "Melilla", enlace: null, nota: "Oficina de Consumo de la Ciudad Autónoma.", oficinas: [] },
  "Castilla y León": { nombre: "Castilla y León", enlace: "https://www.jcyl.es/web/es/consumo.html",
                       nota: "Junta de Castilla y León: OMIC municipales y provinciales.", oficinas: [] }
};

/* --------------------------------------------------------- vías (entidades) */
/* Cada vía es a la vez guía y herramienta: sus campos y su plantilla.          */
const VIAS = {
  "reclamacion-empresa": {
    orden: 1, nombre: "Reclamación a la empresa",
    ambito: "consumo",
    resumen: "El primer paso, y el único obligatorio: reclamar por escrito a la propia empresa.",
    cuando: "Siempre. Sin esta reclamación previa no puedes ir a la oficina de consumo ni al arbitraje.",
    plazo: 30, plazoTexto: "La empresa tiene un mes para responder",
    requisitos: ["Un medio que deje constancia (formulario, correo, burofax o copia sellada)", "Número de contrato, pedido o referencia", "Qué solución pides"],
    campos: ["hechos", "importe", "referencia", "solicitud"],
    enlace: null,
    plantilla: (c, d, e, canal) => {
      const dir = (e.canales && e.canales.burofax && e.canales.burofax.direccion) || e.donde || "";
      const datos = [
        c.cups ? "CUPS: " + c.cups + "." : "",
        c.pedido ? "Pedido: " + c.pedido + "." : "",
        c.contrato ? "Contrato: " + c.contrato + "." : "",
        c.ticket ? "Ticket: " + c.ticket + "." : "",
        c.expediente ? "Expediente: " + c.expediente + "." : "",
        c.referencia ? "Referencia: " + c.referencia + "." : "",
        c.importe ? "Importe discutido: " + c.importe + " euros." : ""
      ].filter(Boolean).join("\n");

      if (canal === "telefono") {
        return `GUION PARA LA LLAMADA — ${e.nombre}
${e.canales && e.canales.telefono ? "Teléfono: " + e.canales.telefono.numero : ""}

ANTES DE LLAMAR
- Ten a mano el contrato o el número de pedido y la factura o el recibo.
- Apunta la fecha, la hora y el nombre de quien te atienda.

QUÉ DECIR
1. «Llamo para presentar una reclamación formal, no para una consulta.»
2. Explica el problema en dos frases: ${c.hechos || "[QUÉ PASÓ Y CUÁNDO]"}
3. Pide lo que quieres: ${c.solicitud || "[QUÉ SOLUCIÓN PIDES]"}
4. Pide un número de referencia o de expediente y que te lo manden por escrito.

AL TERMINAR
- Pide que te envíen la respuesta por correo electrónico.
- Si no te dan número de referencia, envía también la reclamación por escrito: la llamada sola no deja prueba.

${identidad(d)}`;
      }

      if (canal === "web") {
        return `TEXTO PARA EL FORMULARIO WEB — ${e.nombre}
${e.canales && e.canales.web ? "Formulario: " + e.canales.web.url : ""}

MOTIVO DE LA RECLAMACIÓN
${c.hechos || "[QUÉ PASÓ, CON FECHAS]"}

${datos ? datos + "\n" : ""}SOLUCIÓN QUE SOLICITO
${c.solicitud || "[QUÉ PIDES]"}

Al enviar el formulario, guarda el número de referencia y haz una captura de la pantalla de confirmación.

${identidad(d)}`;
      }

      const tituloCanal = canal === "presencial"
        ? "RECLAMACIÓN PRESENTADA EN MANO"
        : canal === "burofax" ? "RECLAMACIÓN POR BUROFAX" : "RECLAMACIÓN";

      return `${tituloCanal}

A la atención del Servicio de Atención al Cliente de ${e.nombre}
${dir ? dir + "\n" : ""}
${identidad(d)}

EXPONGO:

Que soy cliente de ${e.nombre} y que he detectado el siguiente problema:

${c.hechos || "[DESCRIBE AQUÍ QUÉ PASÓ, CON FECHAS]"}

${datos ? datos + "\n" : ""}Por lo expuesto, SOLICITO:

${c.solicitud || "[QUÉ SOLUCIÓN PIDES]"}

${canal === "presencial" ? "Presento este escrito y pido copia sellada y fechada, o en su defecto las hojas de reclamaciones." : "Les recuerdo que el plazo máximo de respuesta es de un mes y que, transcurrido el mismo sin contestación, podré acudir a la oficina de consumo o al organismo competente."}

${firma(d)}`;
    }
  },

  "omic": {
    orden: 2, nombre: "Oficina de consumo (OMIC)",
    ambito: "consumo",
    resumen: "La oficina municipal o autonómica de consumo media entre tú y la empresa, gratis.",
    cuando: "Cuando la empresa no contesta en un mes o su respuesta no te vale.",
    plazo: 90, plazoTexto: "Suele resolverse en semanas o pocos meses",
    requisitos: ["Copia de la reclamación previa a la empresa", "La respuesta de la empresa, si la hubo", "Facturas o justificantes"],
    campos: ["hechos", "importe", "solicitud", "fechaPrevia", "respuesta"],
    enlace: null,
    plantilla: (c, d, e) => `A la Oficina Municipal de Información al Consumidor

${identidad(d)}

EXPONGO:

Que con fecha ${fecha(c.fechaPrevia) || "[FECHA DE LA RECLAMACIÓN PREVIA]"} presenté reclamación ante ${e.nombre}, sin que la misma haya sido atendida${c.respuesta ? " satisfactoriamente. La empresa respondió lo siguiente: " + c.respuesta : " ni contestada en el plazo legal"}.

Los hechos son los siguientes:

${c.hechos || "[DESCRIBE AQUÍ QUÉ PASÓ, CON FECHAS]"}

${c.importe ? "El importe reclamado asciende a " + c.importe + " euros.\n" : ""}
Por lo expuesto, SOLICITO la mediación de esta oficina para resolver la controversia con ${e.nombre}.

Se adjuntan: copia de la reclamación previa, respuesta de la empresa (si la hubiera) y documentación acreditativa.

${firma(d)}`
  },

  "asociacion": {
    orden: 3, nombre: "Asociación de consumidores (FACUA)",
    ambito: "consumo",
    resumen: "Asesoramiento y apoyo. FACUA es una de ellas, y la más conocida.",
    cuando: "Cuando el asunto se complica o necesitas que alguien con experiencia te acompañe.",
    plazo: null, plazoTexto: "No tiene plazo: es apoyo, no un trámite",
    requisitos: ["Resumen del caso", "La reclamación previa", "Qué esperas conseguir"],
    campos: ["hechos", "importe"],
    enlace: { texto: "FACUA · 954 903 292 · facultades@facua.org", url: "https://www.facua.org/" },
    plantilla: (c, d, e) => `Asunto: Consulta sobre reclamación a ${e.nombre}

${identidad(d)}

Me pongo en contacto con ustedes para pedir orientación sobre una reclamación contra ${e.nombre}.

Resumen del caso:

${c.hechos || "[RESUME EL CASO: QUÉ PASÓ, CUÁNDO Y QUÉ HAS HECHO YA]"}

${c.importe ? "Importe reclamado: " + c.importe + " euros.\n" : ""}Ya he presentado reclamación ante la empresa${c.fechaPrevia ? " el " + fecha(c.fechaPrevia) : ""}${c.respuesta ? ", y me han respondido: " + c.respuesta : ", sin respuesta hasta la fecha"}.

Les agradecería que me indicaran qué pasos puedo dar a continuación y si puedo contar con su apoyo.

${firma(d)}`
  },

  "arbitraje": {
    orden: 4, nombre: "Sistema Arbitral de Consumo",
    ambito: "consumo",
    resumen: "Gratuito, rápido y vinculante: lo que decida el árbitro obliga a la empresa.",
    cuando: "Cuando la empresa está adherida al sistema y no hay acuerdo. No sirve para todo.",
    plazo: 90, plazoTexto: "El laudo suele salir en pocos meses",
    requisitos: ["Que la empresa esté adherida (se consulta en la OMIC)", "No haber acudido antes a la vía judicial", "Cuantía inferior a 30.000 €"],
    campos: ["hechos", "importe", "solicitud", "fechaPrevia"],
    enlace: null,
    plantilla: (c, d, e) => `SOLICITUD DE ARBITRAJE DE CONSUMO

Solicitante: ${identidad(d)}

Empresa: ${e.nombre}
${e.donde ? "Domicilio de la empresa: " + e.donde + "\n" : ""}
HECHOS

${c.hechos || "[DESCRIBE AQUÍ QUÉ PASÓ, CON FECHAS]"}

${c.fechaPrevia ? "Con fecha " + fecha(c.fechaPrevia) + " presenté reclamación ante la empresa, que no ha sido resuelta de forma satisfactoria.\n" : ""}
PRETENSIÓN

${c.solicitud || "[QUÉ SOLUCIÓN PIDES]"}

${c.importe ? "Cuantía: " + c.importe + " euros.\n" : ""}
DOCUMENTACIÓN QUE SE ACOMPAÑA

Copia del DNI, documentación del contrato o pedido, reclamación previa y su respuesta.

SOLICITO la admisión a trámite de esta solicitud de arbitraje de consumo.

${firma(d)}`
  },

  "organismo-sectorial": {
    orden: 5, nombre: "Organismo del sector",
    ambito: "consumo",
    resumen: "Banca, seguros, telecomunicaciones, energía o transporte tienen su propio supervisor.",
    cuando: "Cuando el problema es de un sector regulado y ya has reclamado a la empresa.",
    plazo: 90, plazoTexto: "El plazo depende del organismo; suele ser de meses",
    requisitos: ["Reclamación previa a la empresa", "Respuesta o acuse de esta", "Documentación del servicio"],
    campos: ["hechos", "importe", "solicitud", "fechaPrevia", "respuesta"],
    enlace: null,
    plantilla: (c, d, e) => `A ${e.organismo || "[ORGANISMO COMPETENTE]"}

${identidad(d)}

EXPONGO:

Que he presentado reclamación ante ${e.nombre}${c.fechaPrevia ? " el " + fecha(c.fechaPrevia) : ""}, ${c.respuesta ? "habiendo respondido la empresa lo siguiente: " + c.respuesta : "sin haber obtenido respuesta en el plazo legal"}.

Los hechos son los siguientes:

${c.hechos || "[DESCRIBE AQUÍ QUÉ PASÓ, CON FECHAS]"}

${c.importe ? "Importe discutido: " + c.importe + " euros.\n" : ""}
SOLICITO que este organismo examine la actuación de la empresa y adopte las medidas que correspondan.

Se adjunta la documentación acreditativa de la reclamación previa y de la relación contractual.

${firma(d)}`
  },

  "judicial": {
    orden: 6, nombre: "Vía judicial",
    ambito: "consumo",
    resumen: "Juicio verbal hasta 2.000 € sin abogado ni procurador.",
    cuando: "Cuando todo lo anterior ha fallado y el importe pequeño permite ir sin abogado.",
    plazo: null, plazoTexto: "La acción prescribe a los 5 años desde el problema",
    requisitos: ["Pruebas de todo lo anterior", "Importe reclamado y cálculo", "Domicilio de la empresa para emplazarla"],
    campos: ["hechos", "importe", "solicitud"],
    enlace: null,
    plantilla: (c, d, e) => `DEMANDA DE JUICIO VERBAL
(para el Juzgado de Primera Instancia de tu domicilio)

Demandante: ${identidad(d)}
Demandada: ${e.nombre}

CUANTÍA
${c.importe ? c.importe + " euros." : "[IMPORTE EN EUROS, QUE NO PUEDE SUPERAR LOS 2.000 €]"}${Number(String(c.importe||"").replace(",", ".")) > 2000 ? "\n\n⚠️ Por encima de 2.000 € necesitas abogado y procurador: esta plantilla no sirve." : ""}

HECHOS

${c.hechos || "[DESCRIBE AQUÍ LOS HECHOS, NUMERADOS Y EN ORDEN CRONOLÓGICO]"}

FUNDAMENTOS DE DERECHO

1. Competencia y procedimiento: juicio verbal conforme al artículo 250.2 de la Ley de Enjuiciamiento Civil.
2. Legitimación activa del demandante como consumidor y pasiva de la demandada.

SUPLICO

Que se admita esta demanda y se condene a la demandada a ${c.solicitud || "[QUÉ CONDENA PIDES]"}${c.importe ? ", más los intereses legales y las costas" : ""}.

En [TU CIUDAD], a ${fecha(new Date().toISOString().slice(0,10))}

Firma: ${d.nombre || "[NOMBRE]"}
${d.dni ? "DNI: " + d.dni : ""}`
  },

  /* --- ámbito: administración pública --- */

  "alegacion": {
    orden: 1, nombre: "Alegación ante el órgano",
    ambito: "administracion",
    resumen: "El escrito que presentas en un procedimiento abierto de la Administración.",
    cuando: "Cuando hay un plazo abierto para alegar: trámite de audiencia, convocatoria, propuesta de resolución.",
    plazo: 10, plazoTexto: "El plazo lo fija cada procedimiento: aquí se cuenta 10 días",
    requisitos: ["El número de expediente o la referencia de la convocatoria", "Los documentos que acreditan lo que alegas", "El plazo abierto y su fecha límite"],
    campos: ["expediente", "hechos", "solicitud"],
    enlace: null,
    plantilla: (c, d, e) => `ALEGACIONES

${identidad(d)}

Órgano: ${e.organismo || "[ÓRGANO COMPETENTE]"}
Procedimiento: ${c.expediente || "[NÚMERO DE EXPEDIENTE O REFERENCIA]"}

HECHOS

${c.hechos || "[EXPÓN LOS HECHOS, NUMERADOS Y CON FECHAS]"}

ALEGACIONES

${c.solicitud || "[EXPLICA POR QUÉ LO QUE ALEGAS ES CORRECTO, CON LA NORMATIVA QUE LO RESPALDA]"}

SOLICITO que se tengan por presentadas estas alegaciones, se incorporen al expediente y se estimen en la resolución que ponga fin al procedimiento.

${firma(d)}`
  },

  "recurso-alzada": {
    orden: 2, nombre: "Recurso de alzada",
    ambito: "administracion",
    resumen: "El recurso contra una resolución que no te da la razón.",
    cuando: "Cuando ya hay resolución expresa y no estás de acuerdo. Un mes desde que te la notificaron.",
    plazo: 30, plazoTexto: "Un mes desde la notificación de la resolución",
    requisitos: ["La resolución y su fecha de notificación", "Por qué no estás de acuerdo", "Qué pedías y qué te han negado"],
    campos: ["resolucion", "fechaResolucion", "hechos", "solicitud"],
    enlace: null,
    plantilla: (c, d, e) => `RECURSO DE ALZADA

${identidad(d)}

Resolución que se recurre: ${c.resolucion || "[IDENTIFICA LA RESOLUCIÓN]"}
Fecha de notificación: ${fecha(c.fechaResolucion) || "[FECHA DE LA NOTIFICACIÓN]"}
Órgano que la dictó: ${e.organismo || "[ÓRGANO]"}

HECHOS

${c.hechos || "[RELATA LOS HECHOS Y EL PROCEDIMIENTO, CON FECHAS]"}

FUNDAMENTOS

El presente recurso se interpone al amparo de los artículos 121 y 122 de la Ley 39/2015, dentro del plazo de un mes desde la notificación de la resolución recurrida.

${c.solicitud || "[MOTIVOS POR LOS QUE LA RESOLUCIÓN NO ES AJUSTADA A DERECHO]"}

SOLICITO que se admita este recurso, se revoque la resolución recurrida y se resuelva conforme a lo pedido.

${firma(d)}`
  },

  "defensor-pueblo": {
    orden: 3, nombre: "Defensor del Pueblo",
    ambito: "administracion",
    resumen: "Supervisa a la Administración. No anula resoluciones, pero investiga cómo te han tratado.",
    cuando: "Cuando la Administración tarda, no contesta o crees que ha actuado mal. No sustituye a los recursos.",
    plazo: null, plazoTexto: "Sin plazo, pero no suspende los plazos de los recursos",
    requisitos: ["Haber acudido antes a la propia Administración", "Documentación del expediente", "Qué esperas que investigue"],
    campos: ["hechos"],
    enlace: { texto: "Defensor del Pueblo · 900 101 025 · registro electrónico", url: "https://www.defensordelpueblo.es" },
    plantilla: (c, d, e) => `QUEJA AL DEFENSOR DEL PUEBLO

${identidad(d)}

Administración afectada: ${e.nombre}

HECHOS

${c.hechos || "[CUENTA QUÉ HA PASADO, CON FECHAS Y NÚMEROS DE EXPEDIENTE]"}

Me he dirigido previamente a la Administración sin obtener respuesta satisfactoria.

SOLICITO que se examine la actuación de esta Administración y se me informe del resultado de la investigación.

${firma(d)}`
  },

  "contencioso": {
    orden: 4, nombre: "Vía contencioso-administrativa",
    ambito: "administracion",
    resumen: "Los tribunales revisan la actuación de la Administración. Aquí sí hace falta abogado.",
    cuando: "Cuando los recursos administrativos se han agotado y quieres ir a los tribunales. Dos meses desde la resolución.",
    plazo: 60, plazoTexto: "Dos meses desde la resolución o el silencio",
    requisitos: ["Resolución expresa o silencio administrativo", "Haber agotado la vía administrativa", "Abogado y procurador"],
    campos: ["resolucion", "fechaResolucion", "hechos", "solicitud"],
    enlace: null,
    plantilla: (c, d, e) => `ESCRITO DE INTERPOSICIÓN DE RECURSO CONTENCIOSO-ADMINISTRATIVO
(borrador: debe presentarlo un abogado con procurador)

Recurrente: ${identidad(d)}
Administración demandada: ${e.nombre}
Actuación recurrida: ${c.resolucion || "[RESOLUCIÓN O ACTUACIÓN]"}

⚠️ Este escrito es solo un borrador de trabajo. La vía contencioso-administrativa exige abogado y procurador, y un plazo de dos meses que no se puede recuperar.

HECHOS

${c.hechos || "[RELATA LOS HECHOS Y LA TRAMITACIÓN ADMINISTRATIVA]"}

FUNDAMENTOS

Se interpone recurso contencioso-administrativo contra la actuación indicada, tras haber agotado la vía administrativa previa.

${c.solicitud || "[QUÉ PIDE TU ABOGADO: NULIDAD, ANULACIÓN O RECONOCIMIENTO DE SITUACIÓN JURÍDICA]"}

SOLICITO que se admita este recurso y se dicte sentencia conforme a lo pedido.

${firma(d)}`
  }
};

function viasDe(ambito){
  const a = ambito || "consumo";
  return Object.keys(VIAS).filter(s => VIAS[s].ambito === a).sort((x,y)=>VIAS[x].orden-VIAS[y].orden);
}

/* --------------------------------------------------------------- ayudas */
const CLAVE_DATOS = "cr_datos", CLAVE_CASOS = "cr_casos";
const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d } catch(e){ return d } };
const guardar = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const hoyISO = () => new Date().toISOString().slice(0,10);
const val = id => (document.getElementById(id)?.value || "").trim();
const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

function fecha(iso){
  if (!iso) return "";
  const p = String(iso).split("-");
  if (p.length !== 3) return iso;
  return `${+p[2]} de ${MESES[+p[1]-1]} de ${p[0]}`;
}
function sumarDias(iso, dias){
  if (!dias) return null;
  const d = new Date(iso + "T12:00:00"); d.setDate(d.getDate() + dias);
  return d.toISOString().slice(0,10);
}
function diasHasta(iso){
  if (!iso) return null;
  return Math.ceil((new Date(iso + "T12:00:00") - new Date()) / 86400000);
}
function identidad(d){
  const partes = [
    d.nombre || "[NOMBRE Y APELLIDOS]",
    d.dni ? "con DNI " + d.dni : "[DNI]",
    d.dir ? "con domicilio en " + d.dir : "[DOMICILIO]",
    d.email ? "y correo electrónico " + d.email : "",
    d.tel ? "teléfono " + d.tel : ""
  ].filter(Boolean);
  return partes.slice(0,3).join(", ") + (partes.length > 3 ? ",\n" + partes.slice(3).join(", ") : "");
}
function firma(d){
  return `${d.dir || ""}\n${d.nombre || "[NOMBRE]"}\n${d.dni ? "DNI: " + d.dni : ""}\nFecha: ${fecha(hoyISO())}`;
}


function bloqueOMIC(){
  const d = leer(CLAVE_DATOS, {});
  const cc = CCAA[d.comunidad];

  // Madrid capital: oficina del distrito, con dirección, teléfono y correo
  if (OMIC_CAPITAL && /^madrid$/i.test(d.municipio || "") && d.comunidad === "Madrid") {
    const todas = OMIC_CAPITAL.centros;
    const suya = d.distrito ? todas.find(c => (c.distrito || "").toLowerCase() === d.distrito.toLowerCase()) : null;
    const central = todas.find(c => c.distrito === "Central");

    const ficha = (c, destacada) => `<div style="${destacada ? "" : "opacity:.85"}">
        <b>${c.nombre}</b>
        <div style="color:var(--gris);font-size:14px">${c.direccion}</div>
        <div style="color:var(--gris);font-size:14px">
          ${[c.telefono ? `☎ <a href="tel:${(c.telefono.match(/9\d[\s0-9]{7,}/) || c.telefono.match(/\d{3,}/) || [""])[0].replace(/[^0-9+]/g,"")}">${c.telefono}</a>` : "",
             c.email ? `<a href="mailto:${c.email}">${c.email}</a>` : ""].filter(Boolean).join(" · ")}
        </div>
        ${c.accesible === false ? `<div style="color:var(--gris);font-size:13px">No accesible para movilidad reducida</div>` : ""}
      </div>`;

    const mapa = suya && suya.lat
      ? `<iframe height="240" style="width:100%;border:1px solid var(--linea);border-radius:12px;margin-top:10px"
           src="https://www.openstreetmap.org/export/embed.html?bbox=${suya.lon - 0.004}%2C${suya.lat - 0.0025}%2C${suya.lon + 0.004}%2C${suya.lat + 0.0025}&layer=mapnik&marker=${suya.lat}%2C${suya.lon}"
           loading="lazy" title="Mapa de la oficina"></iframe>` : "";

    return `<div class="caja" style="background:var(--suave)">
      ${suya ? `<b>Tu oficina de consumo · distrito de ${suya.distrito}</b>
        <div style="margin-top:8px">${ficha(suya, true)}</div>${mapa}`
        : `<b>Elige tu distrito en <a href="#/herramientas">Mis datos</a></b>
           <p style="margin:6px 0 0;color:var(--gris)">En Madrid cada distrito tiene su oficina de consumo; con tu distrito te damos la tuya, con dirección y teléfono.</p>`}
      <details style="margin-top:14px">
        <summary style="cursor:pointer;color:var(--acento);font-size:14px">Ver las 21 oficinas de distrito y la central</summary>
        <div style="margin-top:12px;display:grid;gap:12px">
          ${central ? ficha(central, false) : ""}
          ${todas.filter(c => c.distrito !== "Central").map(c => ficha(c, false)).join("")}
        </div>
      </details>
      <p class="nota" style="margin-top:10px">${OMIC_CAPITAL.total} oficinas · datos del Ayuntamiento de Madrid
        (${OMIC_CAPITAL.recogido}). Teléfono general: 010.</p>
    </div>`;
  }

  if (!cc) {
    return `<div class="caja" style="background:var(--suave)">
      <b>Tu oficina de consumo</b>
      <p style="margin:6px 0 0;color:var(--gris)">Si pones tu comunidad autónoma y tu municipio en
      <a href="#/herramientas">Mis datos</a>, te enlazamos la oficina que te corresponde y su documentación oficial.</p></div>`;
  }
  const capital = d.comunidad === "Madrid" && /^madrid$/i.test(d.municipio || "");
  const mun = d.municipio ? (capital ? " · Madrid capital" : ` · ${d.municipio}`) : "";
  const suyas = oficinasDe(d.municipio);
  return `<div class="caja" style="background:var(--suave)">
    <b>Tu oficina de consumo: ${cc.nombre}${mun}</b>
    <p style="margin:8px 0 12px">${cc.nota}</p>
    ${suyas.length ? `<div style="margin:0 0 14px">
      <b style="font-size:14.5px">${suyas.length > 1 ? "Oficinas de consumo de " + d.municipio : "Oficina de consumo de " + d.municipio}</b>
      ${suyas.map(o => `<div style="margin-top:10px">
        <b>${o.nombre}</b>
        <div style="color:var(--gris);font-size:14px">${o.direccion}${o.cp ? " · " + o.cp : ""} ${o.municipio}</div>
        <div style="color:var(--gris);font-size:14px">${[o.telefono ? `☎ <a href="tel:${o.telefono.replace(/[^0-9+]/g,"")}">${o.telefono}</a>` : "",
             o.email ? `<a href="mailto:${o.email}">${o.email}</a>` : ""].filter(Boolean).join(" · ")}</div>
      </div>`).join("")}
    </div>` : ""}
    ${(cc.oficinas.length && !(d.comunidad === "Madrid" && OMIC_MADRID)) ? `<ul style="margin:0 0 14px">${cc.oficinas.map(o=>
      `<li><b>${o.nombre}</b> — ${o.direccion}${o.extra ? ` <span style="color:var(--gris)">(${o.extra})</span>` : ""}</li>`).join("")}</ul>` : ""}

    ${d.comunidad === "Madrid" ? (OMIC_MADRID ? `
      <div style="margin:0 0 12px">
        <input id="omic_filtro" placeholder="Busca tu municipio: Alcobendas, Getafe, Alcalá…"
               value="${d.municipio || ""}" style="width:100%;padding:11px 13px;border:1.5px solid var(--linea);border-radius:10px;font:inherit;font-size:15px">
        <div id="omic_lista">${listaOMIC(d.municipio || "")}</div>
        <p class="nota" style="margin-top:6px">${OMIC_MADRID.total} puntos recogidos del buscador de la Comunidad de Madrid
        (${OMIC_MADRID.recogido}).</p>
      </div>` : `<p class="nota">Cargando las oficinas de la Comunidad de Madrid…</p>`) : ""}

    ${cc.enlace
      ? `<a class="boton sec" href="${cc.enlace}" target="_blank" rel="noopener">Documentación oficial ${/^Comunidad|^Agencia/i.test(cc.nombre) ? "de la" : "de"} ${cc.nombre}</a>`
      : avisoFalta("No tenemos la dirección oficial verificada", cc.nombre, "otros")}
  </div>`;
}

function canalesDisponibles(e){
  const c = e.canales || {};
  const out = [];
  if (c.web) out.push(["web", "Formulario web de la empresa"]);
  if (c.correo) out.push(["correo", "Correo electrónico"]);
  if (c.telefono) out.push(["telefono", "Teléfono (con guion de llamada)"]);
  if (c.presencial && c.presencial.length) out.push(["presencial", "Presencial o hojas de reclamaciones"]);
  if (c.burofax) out.push(["burofax", "Burofax o correo certificado"]);
  return out.length ? out : [["web", "Formulario web"]];
}


/* Acciones del canal elegido: enlace oficial, guía, correo, llamada, mapa o burofax. */
function accionesCanal(caso, e, canal){
  const c = e.canales || {};
  const datos = leer(CLAVE_DATOS, {});
  const texto = VIAS[caso.via].plantilla(caso.campos || {}, datos, e, canal);

  if (canal === "web" && c.web) {
    const guia = c.web.guia
      ? `<a class="boton sec" href="${c.web.guia}" target="_blank" rel="noopener">Cómo rellenar el formulario, paso a paso</a>`
      : `<span class="estado">Guía paso a paso: en preparación</span>`;
    return `<div class="acciones" style="margin-bottom:6px">
      ${c.web.url ? `<a class="boton" href="${c.web.url}" target="_blank" rel="noopener">Abrir el formulario oficial</a>` : ""}
      ${guia}</div>`;
  }

  if (canal === "correo" && c.correo) {
    const mailto = `mailto:${c.correo}?subject=${encodeURIComponent("Reclamación — " + caso.empresa)}&body=${encodeURIComponent(texto)}`;
    return `<p class="nota" style="margin:6px 0"><b>${c.correo}</b></p>
      <div class="acciones" style="margin-bottom:6px">
        <a class="boton" href="${mailto}">Escribir el correo ahora</a>
        <button class="boton sec" data-copiar="${c.correo}">Copiar la dirección</button>
      </div>
      <p class="nota">El botón abre tu programa de correo con el asunto y el texto ya escritos. Si usas correo web (Gmail, Outlook), copia la dirección.</p>`;
  }

  if (canal === "telefono" && c.telefono) {
    const tel = c.telefono.numero.replace(/[^0-9+]/g, "");
    return `<div class="acciones" style="margin-bottom:6px">
      <a class="boton" href="tel:${tel}">Llamar al ${c.telefono.numero}</a>
    </div>
    <p class="nota">${c.telefono.nota || ""}</p>`;
  }

  if (canal === "presencial" && c.presencial && c.presencial.length) {
    return c.presencial.map(o => {
      const mapa = (o.lat && o.lon)
        ? `<iframe height="260" style="width:100%;border:1px solid var(--linea);border-radius:12px;margin-top:8px"
             src="https://www.openstreetmap.org/export/embed.html?bbox=${o.lon - 0.004}%2C${o.lat - 0.0025}%2C${o.lon + 0.004}%2C${o.lat + 0.0025}&layer=mapnik&marker=${o.lat}%2C${o.lon}"
             loading="lazy" title="Mapa de ${o.nombre}"></iframe>
           <p class="nota"><a href="https://www.openstreetmap.org/?mlat=${o.lat}&mlon=${o.lon}#map=17/${o.lat}/${o.lon}"
             target="_blank" rel="noopener">Abrir en OpenStreetMap</a></p>`
        : `<p class="nota"><a href="https://www.openstreetmap.org/search?query=${encodeURIComponent(o.direccion || o.nombre)}"
             target="_blank" rel="noopener">Buscar esta dirección en el mapa</a></p>`;
      return `<div style="margin:14px 0 2px"><b>${o.nombre}</b><br>
        <span style="color:var(--gris)">${o.direccion || ""}</span>
        ${o.horario ? `<br><span style="color:var(--gris)">🕘 ${o.horario}</span>` : ""}</div>${mapa}`;
    }).join("");
  }

  if (canal === "burofax") {
    const dir = (c.burofax && c.burofax.direccion) || e.donde || "";
    return `<p class="nota" style="margin:6px 0">Destinatario: <b>${dir}</b></p>
      <div class="acciones" style="margin-bottom:6px">
        <a class="boton" href="https://www.correos.es/es/es/particulares/enviar/envios-nacionales/burofax-cartas/burofax"
           target="_blank" rel="noopener">Enviar un burofax en Correos</a>
        <button class="boton sec" data-copiar="${dir}">Copiar la dirección</button>
      </div>
      <p class="nota">El burofax deja constancia del contenido y de la entrega, y tiene valor de prueba. Necesitas el documento en PDF: descárgalo antes.</p>`;
  }
  return "";
}

function bloqueCanal(caso, e){
  const lista = canalesDisponibles(e);
  const actual = caso.canal || lista[0][0];
  const c = e.canales || {};
  let detalle = "";
  if (actual === "web" && c.web) detalle = `${c.web.url}<br><span style="color:var(--gris)">${c.web.nota || ""}</span>`;
  if (actual === "correo" && c.correo) detalle = "";
  if (actual === "telefono" && c.telefono) detalle = "";
  if (actual === "presencial" && c.presencial) detalle = "";
  if (actual === "burofax" && c.burofax) detalle = "";

  return `<h2>Cómo vas a reclamar</h2>
    <div class="caja">
      <div class="campo"><label>Canal</label>
        <select id="canal_${caso.id}">
          ${lista.map(([k,txt])=>`<option value="${k}" ${actual===k?"selected":""}>${txt}</option>`).join("")}
        </select></div>
      ${detalle ? `<p class="nota" style="margin:0 0 12px">${detalle}</p>` : ""}
      ${accionesCanal(caso, e, actual)}
    </div>`;
}

/* Un caso es la unidad de trabajo: empresa + vía + datos del caso. */
function nuevoCaso(slugEmpresa, nombreLibre){
  const casos = leer(CLAVE_CASOS, []);
  const e = EMPRESAS[slugEmpresa];
  const id = "c" + Date.now().toString(36);
  const caso = {
    id, empresa: e ? e.nombre : nombreLibre, slugEmpresa: slugEmpresa || "",
    sector: e ? e.sector : "", via: "reclamacion-empresa",
    fecha: hoyISO(), vence: sumarDias(hoyISO(), VIAS["reclamacion-empresa"].plazo),
    estado: "en curso", campos: {}
  };
  casos.unshift(caso);
  guardar(CLAVE_CASOS, casos);
  return id;
}
const buscarCaso = id => leer(CLAVE_CASOS, []).find(c => c.id === id);
function guardarCaso(caso){
  const casos = leer(CLAVE_CASOS, []);
  const i = casos.findIndex(c => c.id === caso.id);
  if (i >= 0) casos[i] = caso; else casos.unshift(caso);
  guardar(CLAVE_CASOS, casos);
}
function empresaDe(caso){
  return EMPRESAS[caso.slugEmpresa] ||
    { nombre: caso.empresa, sector: caso.sector || "Sin clasificar", tipo: "Privada", ambito: "consumo", plazo: 30,
      organismo: "", pasos: [], donde: "", dpo: null, aviso_gdpr: null, fuentes: "Empresa añadida por el usuario" };
}
function siguienteVia(via){
  const orden = viasDe(VIAS[via] ? VIAS[via].ambito : "consumo");
  const i = orden.indexOf(via);
  return i >= 0 && i < orden.length - 1 ? orden[i+1] : null;
}

/* --------------------------------------------------------------- vistas */
function pintarEmpresas(q, sector){
  const lista = document.getElementById("lista-empresas");
  if (!lista) return;
  const texto = (q || "").toLowerCase().trim();
  const hits = Object.entries(EMPRESAS).filter(([k, e]) =>
    (!sector || e.sector === sector) &&
    (!texto || e.nombre.toLowerCase().includes(texto) || e.sector.toLowerCase().includes(texto)));

  lista.innerHTML = hits.length
    ? hits.map(([k, e]) => `<a class="tarjeta" href="#/empresa/${k}">
        <b>${e.nombre}</b><small>${e.sector} · ${e.tipo.toLowerCase()}</small></a>`).join("")
    : `<a class="tarjeta" href="#/pedir${sector ? "?empresa=" + encodeURIComponent("") + "&sector=" + encodeURIComponent(sector) : ""}">
        <b>No hay guía todavía${sector ? " en " + sector : ""}</b><small>Pídela y la preparamos →</small></a>`;
}

function sectorDeLaURL(){
  const s = new URLSearchParams(location.search).get("sector");
  return s && sectores().includes(s) ? s : "";
}

function vistaPortada(){
  const casos = leer(CLAVE_CASOS, []);
  return `
  <div class="env">
    <section class="hero">
      <h1>¿A quién tienes que reclamar?</h1>
      <p>Busca la empresa y te decimos cómo, en qué orden y con qué texto. Si no está, la pedimos.</p>
      <div class="buscador">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="q" type="search" placeholder="Iberdrola, Amazon, tu compañía de la luz…" autocomplete="off">
      </div>
      <div class="chips">
        <span class="chip ${sectorActivo === "" ? "activo" : ""}" data-sector="">Todos</span>
        ${sectores().map(s => `<span class="chip ${sectorActivo === s ? "activo" : ""}" data-sector="${s}">${s}</span>`).join("")}
      </div>
    </section>

    <div class="seccion-titulo">Empresas con guía</div>
    <div class="tarjetas" id="lista-empresas">
      ${Object.entries(EMPRESAS).map(([k,e])=>`
        <a class="tarjeta" href="#/empresa/${k}"><b>${e.nombre}</b><small>${e.sector} · ${e.tipo.toLowerCase()}</small></a>`).join("")}
    </div>

    <div class="seccion-titulo">Las vías, una a una</div>
    <div class="tarjetas">
      ${viasDe("consumo").slice(0,4).map(s=>`
        <a class="tarjeta" href="#/via/${s}"><b>${VIAS[s].nombre}</b><small>${VIAS[s].resumen}</small></a>`).join("")}
    </div>

    <div class="panel">
      <span><b>23</b> empresas publicadas</span>
      <span><b>2</b> peticiones abiertas</span>
      <span><a href="#/herramientas"><b>${casos.length}</b> en tus reclamaciones</a></span>
    </div>
  </div>`;
}

const ETIQUETA_TIPO = {
  omic: "OMIC", "junta-arbitral": "Junta arbitral", "junta-distrito": "Junta de distrito",
  "servicio-consumidor": "Servicio de consumo", otro: "Otro"
};

let empresaActual = "iberdrola", pestana = 1, derechos = new Set(["acceso"]);
let sectorActivo = "";
let OMIC_MADRID = null, OMIC_CARGANDO = false;
let VALIDACION = null, VALIDANDO = false;
let MUNICIPIOS = null, MUNICIPIOS_CARGANDO = false;
let OMIC_CAPITAL = null, OMIC_CAPITAL_CARGANDO = false;
let DIVISIONES = null, DIVISIONES_CARGANDO = false;
let OMIC_NACIONAL = null, OMIC_NAC_CARGANDO = false;
let PROCEDIMIENTOS = null, PROC_CARGANDO = false;

const BASE_DATOS = new URL("../datos/", location.href).href;

async function cargarProcedimientos(){
  if (PROCEDIMIENTOS || PROC_CARGANDO) return;
  PROC_CARGANDO = true;
  try {
    const res = await fetch(`${BASE_DATOS}procedimientos.json`, {cache: "no-store"});
    if (res.ok) PROCEDIMIENTOS = await res.json();
  } catch (e) {}
  PROC_CARGANDO = false;
  pintar();
}

/* Bloque del procedimiento: lo que fija la ley y lo que añade tu administración. */
function bloqueProcedimiento(slug){
  if (!PROCEDIMIENTOS) return "";
  const p = PROCEDIMIENTOS.procedimientos[slug];
  if (!p) return "";
  const d = leer(CLAVE_DATOS, {});
  const adm = PROCEDIMIENTOS.administraciones[d.comunidad];
  return `<h3>El procedimiento, en la ley</h3>
    <ul>
      <li><b>Cuándo</b>: ${p.cuando}</li>
      <li><b>Plazo</b>: ${p.plazo_general}</li>
      <li><b>Si no contestan</b>: ${p.silencio}</li>
      <li><b>Base legal</b>: ${p.base_legal}</li>
    </ul>
    ${adm ? `<div class="caja" style="background:var(--suave);margin-top:12px">
      <b>Cómo se presenta en ${adm.nombre}</b>
      <div style="margin-top:8px;font-size:14.5px">
        ${adm.sede
          ? `Sede electrónica: <a href="${adm.sede}" target="_blank" rel="noopener">${adm.sede.replace(/^https?:\/\//,"")}</a><br>`
          : ""}
        Registro: ${adm.registro}<br>
        Silencio: ${adm.silencio_general}
      </div>
      ${!adm.sede ? `<div class="aviso" style="margin:10px 0 0;border-color:#f0d28a;background:var(--aviso-fondo);color:var(--aviso)">
          <b>No tenemos su sede electrónica verificada</b>
          Preferimos no rellenar ese hueco a ojo: el enlace no respondió cuando lo comprobamos.
          Si lo conoces, apórtalo y lo comprobamos.
          <div style="margin-top:10px"><a class="boton" href="#/pedir?empresa=${encodeURIComponent(adm.nombre)}&aportar=otros">Aportar la sede electrónica</a></div>
        </div>` : ""}
      ${adm.nota ? `<p class="nota" style="margin-top:8px">${adm.nota}</p>` : ""}
    </div>` : `<p class="nota">Si eliges tu comunidad en <a href="#/herramientas">Mis datos</a>, aquí aparecerá su sede electrónica y su registro.</p>`}`;
}

async function cargarOMICNacional(){
  if (OMIC_NACIONAL || OMIC_NAC_CARGANDO) return;
  OMIC_NAC_CARGANDO = true;
  try {
    const res = await fetch(`${BASE_DATOS}omic-nacional.json`, {cache: "no-store"});
    if (res.ok) OMIC_NACIONAL = await res.json();
  } catch (e) {}
  OMIC_NAC_CARGANDO = false;
  pintar();
}

/* comparación tolerante: sin acentos ni mayúsculas */
function normal(s){
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}
function oficinasDe(municipio){
  if (!OMIC_NACIONAL || !municipio) return [];
  const q = normal(municipio);
  return OMIC_NACIONAL.centros.filter(c => normal(c.municipio) === q);
}

async function cargarDivisiones(){
  if (DIVISIONES || DIVISIONES_CARGANDO) return;
  DIVISIONES_CARGANDO = true;
  try {
    const res = await fetch(`${BASE_DATOS}divisiones.json`, {cache: "no-store"});
    if (res.ok) DIVISIONES = await res.json();
  } catch (e) {}
  DIVISIONES_CARGANDO = false;
  pintar();
}

async function cargarOMICCapital(){
  if (OMIC_CAPITAL || OMIC_CAPITAL_CARGANDO) return;
  OMIC_CAPITAL_CARGANDO = true;
  try {
    const res = await fetch(`${BASE_DATOS}omic-madrid-capital.json`, {cache: "no-store"});
    if (res.ok) OMIC_CAPITAL = await res.json();
  } catch (e) {}
  OMIC_CAPITAL_CARGANDO = false;
  pintar();
}

async function cargarMunicipios(){
  if (MUNICIPIOS || MUNICIPIOS_CARGANDO) return;
  MUNICIPIOS_CARGANDO = true;
  try {
    const res = await fetch(`${BASE_DATOS}municipios.json`, {cache: "no-store"});
    if (res.ok) MUNICIPIOS = await res.json();
  } catch (e) { /* si no carga, el selector avisa de que no hay lista */ }
  MUNICIPIOS_CARGANDO = false;
  pintar();
}

async function cargarValidacion(){
  if (VALIDACION || VALIDANDO) return;
  VALIDANDO = true;
  try {
    const res = await fetch(`${BASE_DATOS}validacion.json`, {cache: "no-store"});
    if (res.ok) VALIDACION = await res.json();
  } catch (e) { /* si no hay informe, no se muestran marcas */ }
  VALIDANDO = false;
  pintar();
}

function marcaURL(url){
  if (!VALIDACION || !url) return "";
  const r = (VALIDACION.urls || []).find(u => u.url === url);
  if (!r) return "";
  if (r.estado === "bloqueado") {
    return ` <span title="El sitio no permite comprobaciones automáticas; el enlace puede funcionar igualmente" style="color:var(--gris);font-weight:700">◌</span>`;
  }
  return r.ok
    ? ` <span title="Enlace comprobado el ${(VALIDACION.generado||"").slice(0,10)}" style="color:var(--acento);font-weight:700">✓</span>`
    : ` <span title="Este enlace no responde (${r.error || r.codigo || "sin respuesta"})" style="color:#a33;font-weight:700">⚠</span>`;
}

function resumenValidacion(){
  if (!VALIDACION) return "";
  const bloq = VALIDACION.bloqueadas || 0;
  return `<p class="nota" style="margin-top:14px">Enlaces de la capa de datos comprobados:
    <b>${VALIDACION.ok}/${VALIDACION.total}</b> responden${bloq ? ` · ${bloq} no permiten comprobación automática` : ""}
    · informe del ${(VALIDACION.generado||"").slice(0,10)}.</p>`;
}

async function cargarOMICMadrid(){
  if (OMIC_MADRID || OMIC_CARGANDO) return;
  OMIC_CARGANDO = true;
  try {
    const res = await fetch(`${BASE_DATOS}omic-comunidad-madrid.json`, {cache: "no-store"});
    if (res.ok) OMIC_MADRID = await res.json();
  } catch (e) { /* si falla, se queda el resumen estático */ }
  OMIC_CARGANDO = false;
  pintar();
}

function listaOMIC(filtro){
  if (!OMIC_MADRID) return "";
  const q = (filtro || "").toLowerCase().trim();
  const todos = OMIC_MADRID.centros;
  const hits = q ? todos.filter(c => (c.municipio||"").toLowerCase().includes(q) || (c.nombre||"").toLowerCase().includes(q)) : todos;
  if (!hits.length) return `<p class="nota" style="margin:10px 0 0">No hay ninguna oficina en «${filtro}». Prueba con el nombre del municipio.</p>`;
  return `<ul style="margin:8px 0 0;max-height:320px;overflow:auto">
    ${hits.slice(0, 40).map(c=>`<li style="margin-bottom:10px">
      <b>${c.nombre}</b>${c.tipo ? ` <span class="et" style="font-size:11px">${ETIQUETA_TIPO[c.tipo] || c.tipo}</span>` : ""}<br>
      <span style="color:var(--gris)">${[c.direccion || (c.municipio + (c.cp ? " · " + c.cp : "")), c.direccion ? c.cp : ""].filter(Boolean).join(" · ") || "Dirección no publicada"}</span>
      ${c.telefono ? `<br><span style="color:var(--gris)">☎ ${c.telefono}</span>` : ""}
      ${c.horario ? `<br><span style="color:var(--gris)">🕘 ${c.horario}</span>` : ""}
      ${c.web ? `<br><a href="${c.web}" target="_blank" rel="noopener" style="font-size:13.5px">Ficha oficial</a>` : ""}
    </li>`).join("")}
  </ul>
  ${hits.length > 40 ? `<p class="nota">Mostrando 40 de ${hits.length}. Afina la búsqueda por municipio.</p>` : `<p class="nota">${hits.length} ${hits.length===1?"oficina":"oficinas"}.</p>`}`;
}


/* --- Iconos de privacidad (Mozilla Privacy Icons): cuatro parejas de garantías --- */
const ICONOS_PRIV = {
  retencion:   { titulo: "Retención",  svg: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
                 valores: { necesario: ["Mientras sea necesario", "No se borra en plazo fijo"],
                            indefinido: ["Indefinido", "Hasta que lo pidas"],
                            meses: ["Plazo corto", "Se borra pronto"] } },
  terceros:    { titulo: "Terceros",   svg: '<circle cx="7" cy="8" r="2.6"/><circle cx="17" cy="16" r="2.6"/><path d="M9 9.5 15 14.5"/>',
                 valores: { "solo-uso": ["Solo para el servicio", "No vende tus datos"],
                            reuso: ["Reutilización limitada", "Puede cederlos a terceros"] } },
  anuncios:    { titulo: "Publicidad", svg: '<path d="M4 10v4h3l5 4V6L7 10H4z"/><path d="M16 9a4 4 0 0 1 0 6"/>',
                 valores: { sin: ["Sin anuncios", "No comparte con publicidad"],
                            "opt-out": ["Anuncios con baja", "Puedes oponerte o revocar"] } },
  autoridades: { titulo: "Autoridades", svg: '<path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z"/>',
                 valores: { "proceso-legal": ["Proceso legal", "Exige el cauce previsto"],
                            "proceso-transparente": ["Proceso transparente", "Puede ceder antes de tiempo"] } }
};

function iconosPrivacidad(e){
  const pv = e.privacidad || {};
  const cfg = pv.iconos || {};
  const claves = Object.keys(cfg);
  if (!claves.length) {
    const pub = (e.tipo || "").toLowerCase().startsWith("públic");
    return `<p class="nota">${pub
      ? "Sin datos suficientes para describir sus garantías: en una administración pública lo habitual es que la información esté publicada en otra página, no que falte."
      : "Todavía no hemos revisado las garantías de privacidad de esta empresa."}</p>`;
  }
  const baldosas = claves.map(k => {
    const meta = ICONOS_PRIV[k]; if (!meta) return "";
    const v = meta.valores[cfg[k].valor] || [cfg[k].valor, ""];
    return `<div style="flex:1 1 150px;border:1px solid var(--linea);border-radius:12px;padding:12px 14px">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
           stroke-linecap="round" stroke-linejoin="round" style="color:var(--acento)">${meta.svg}</svg>
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--gris);margin-top:6px">${meta.titulo}</div>
      <div style="font-weight:600;font-size:14.5px;margin-top:2px">${v[0]}</div>
      <div style="font-size:12.5px;color:var(--gris);margin-top:2px">${cfg[k].nota || v[1]}</div>
    </div>`;
  }).join("");
  return `<div style="display:flex;gap:10px;flex-wrap:wrap;margin:12px 0 6px">${baldosas}</div>
    <p class="nota">Extraído de los apartados que la ley obliga a publicar en su política de privacidad${pv.actualizada ? ` (actualizada el ${fecha(pv.actualizada)})` : ""}.</p>`;
}


/* Accesos directos del canal: formulario, teléfono, correo, calle y burofax. */
function accesosCanal(e){
  const c = e.canales || {};
  const filas = [];
  if (c.web && c.web.url) filas.push(`<a href="${c.web.url}" target="_blank" rel="noopener">Formulario web</a>${marcaURL(c.web.url)}`);
  if (c.web && c.web.guia) filas.push(`<a href="${c.web.guia}" target="_blank" rel="noopener">Guía del formulario</a>`);
  if (c.telefono) filas.push(`<a href="tel:${c.telefono.numero.replace(/[^0-9+]/g,"")}">${c.telefono.numero}</a>`);
  if (c.correo) filas.push(`<a href="mailto:${c.correo}">${c.correo}</a>`);
  (c.presencial || []).forEach(o => {
    const url = (o.lat && o.lon)
      ? `https://www.openstreetmap.org/?mlat=${o.lat}&mlon=${o.lon}#map=17/${o.lat}/${o.lon}`
      : `https://www.openstreetmap.org/search?query=${encodeURIComponent(o.direccion || o.nombre)}`;
    filas.push(`<a href="${url}" target="_blank" rel="noopener">${o.nombre}: ${o.direccion}</a>`);
  });
  if (c.burofax) filas.push(`<a href="https://www.correos.es/es/es/particulares/enviar/envios-nacionales/burofax-cartas/burofax" target="_blank" rel="noopener">Burofax: ${c.burofax.direccion}</a>`);
  if (!filas.length) return "";
  return `<ul style="margin:10px 0 0;padding-left:20px">${filas.map(f=>`<li style="margin:5px 0">${f}</li>`).join("")}</ul>`;
}

function bloquePrivacidadDatos(e){
  const pv = e.privacidad || {};
  const falta = !pv.politica || !pv.responsable || !(pv.dpo || pv.derechosDir);
  const esPublica = (e.tipo || "").toLowerCase().startsWith("públic");

  if (falta) {
    // En una administración pública es muy improbable un incumplimiento:
    // lo normal es que el dato esté en otra página (sede, transparencia).
    if (esPublica) {
      return `<div class="aviso" style="border-color:#cfe6dd;background:var(--acento-suave);color:#0b6b52">
        <b>No hemos localizado su información de protección de datos</b>
        En una administración pública es muy improbable que falte: lo habitual es que esté en otra
        página —la sede electrónica, el portal de transparencia o el registro— y no la hayamos encontrado.
        Si sabes dónde está, dínoslo y la comprobamos.
        <div style="margin-top:12px"><a class="boton" href="#/pedir?empresa=${encodeURIComponent(e.nombre)}&aportar=privacidad">Indicar dónde está</a></div>
      </div>`;
    }
    return avisoFalta("No hemos podido reunir los datos que la ley obliga a publicar", e.nombre, "privacidad");
  }
  return `
    <h2>Datos que su política de privacidad obliga a publicar</h2>
    <div class="caja" style="margin-top:8px">
      <table style="width:100%;border-collapse:collapse;font-size:14.5px">
        <tr><td style="padding:6px 0;color:var(--gris);width:38%">Responsable</td><td><b>${pv.responsable}</b>${pv.cif ? ` · CIF ${pv.cif}` : ""}</td></tr>
        ${pv.domicilio ? `<tr><td style="padding:6px 0;color:var(--gris)">Domicilio</td><td>${pv.domicilio}</td></tr>` : ""}
        ${pv.dpo ? `<tr><td style="padding:6px 0;color:var(--gris)">Delegado de protección de datos</td><td><a href="mailto:${pv.dpo}">${pv.dpo}</a>${pv.dpoTel ? ` · <a href="tel:${pv.dpoTel.replace(/[^0-9+]/g,"")}">${pv.dpoTel}</a>` : ""}</td></tr>` : ""}
        ${pv.derechosDir ? `<tr><td style="padding:6px 0;color:var(--gris)">Para ejercer derechos</td><td>${pv.derechosDir}${pv.derechosUrl ? `<br><a href="${pv.derechosUrl}" target="_blank" rel="noopener">${pv.derechosUrlTexto || "Formulario de derechos"}</a>` : ""}</td></tr>` : ""}
        <tr><td style="padding:6px 0;color:var(--gris)">Autoridad de control</td><td><a href="${pv.autoridad || "https://www.aepd.es"}" target="_blank" rel="noopener">Agencia Española de Protección de Datos</a></td></tr>
      </table>
      <div class="acciones" style="margin:14px 0 0">
        ${pv.politica ? `<a class="boton sec" href="${pv.politica}" target="_blank" rel="noopener">Ver su política de privacidad${marcaURL(pv.politica)}</a>` : ""}
        ${pv.actualizada ? `<span class="estado">Actualizada el ${fecha(pv.actualizada)}</span>` : ""}
      </div>
    </div>

  `;
}

const ICONOS_COOKIES = {
  tecnicas:          { et: "Técnicas",        svg: '<path d="M4 12h16M12 4v16"/>',  nota: "Necesarias para que la web funcione" },
  analiticas:        { et: "Analíticas",      svg: '<path d="M4 19V9M10 19V5M16 19v-7M22 19h-20"/>', nota: "Miden cómo se navega" },
  publicitarias:     { et: "Publicitarias",   svg: '<path d="M4 10v4h3l5 4V6L7 10H4z"/>', nota: "Sirven anuncios" },
  perfilado:         { et: "Perfilado",       svg: '<circle cx="12" cy="8" r="3"/><path d="M5 20c1.5-4 4-6 7-6s5.5 2 7 6"/>', nota: "Crean un perfil tuyo" },
  terceros:          { et: "De terceros",     svg: '<circle cx="7" cy="8" r="2.4"/><circle cx="17" cy="16" r="2.4"/><path d="M9 9.5 15 14.5"/>', nota: "Las pone otra empresa" }
};


/* Pieza común para los huecos de la capa de datos: se dice qué falta, por qué no
   se rellena a ojo, y se pide a quien lo sepa. Nunca se inventa un dato. */
function avisoFalta(que, empresa, aportar){
  const nombre = empresa || "";
  return `<div class="aviso" style="border-color:#f0d28a;background:var(--aviso-fondo);color:var(--aviso)">
    <b>${que}</b>
    Preferimos no rellenar ese hueco a ojo${nombre ? ` en la ficha de ${nombre}` : ""}. Si lo conoces, apórtalo y lo comprobamos.
    <div style="margin-top:12px"><a class="boton" href="#/pedir?empresa=${encodeURIComponent(nombre)}&aportar=${aportar || "otros"}">Aportar este dato</a></div>
  </div>`;
}

function bloqueCookies(e){
  const ck = (e.privacidad || {}).cookies;
  if (!ck || !ck.url) {
      return avisoFalta("No tenemos su política de cookies", e.nombre, "cookies");
    }  const tiene = new Set(ck.tipos || []);
  if ((ck.terceros || []).length) tiene.add("terceros");
  const baldosas = Object.entries(ICONOS_COOKIES).map(([k, meta]) => {
    const activa = tiene.has(k);
    return `<div style="flex:1 1 130px;border:1px solid ${activa ? "var(--linea)" : "#eee"};border-radius:12px;
        padding:12px 13px;opacity:${activa ? 1 : .38}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
           stroke-linecap="round" stroke-linejoin="round" style="color:${activa ? "var(--acento)" : "var(--gris)"}">${meta.svg}</svg>
      <div style="font-weight:600;font-size:14px;margin-top:6px">${meta.et}</div>
      <div style="font-size:12.5px;color:var(--gris)">${activa ? meta.nota : "no declaradas"}</div>
    </div>`;
  }).join("");

  return `<h2>Qué cookies usa</h2>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin:12px 0">${baldosas}</div>
    ${ck.nota ? `<p class="nota" style="margin:0 0 10px">${ck.nota}</p>` : ""}
    ${(ck.terceros || []).length ? `<p class="nota" style="margin:0 0 10px">Terceros: ${ck.terceros.join(", ")}.</p>` : ""}
    <div class="acciones" style="margin:4px 0 0">
      <a class="boton sec" href="${ck.url}" target="_blank" rel="noopener">Ver su política de cookies${marcaURL(ck.url)}</a>
      ${ck.configurador ? `<a class="boton sec" href="${ck.configurador}" target="_blank" rel="noopener">Cambiar mis cookies</a>` : ""}
      <span class="estado">${ck.actualizada ? "Actualizada el " + fecha(ck.actualizada) : ""}</span>
    </div>`;
}

function bloqueIconosPrivacidad(e){
  return `<h2>Cómo trata tus datos, de un vistazo</h2>
    ${iconosPrivacidad(e)}`;
}


function vistaEmpresa(){
  const e = EMPRESAS[empresaActual];
  const admin = e.ambito === "administracion";
  const etiquetas = admin
    ? ["Alegar al órgano", "Protección de datos", "Vías administrativas"]
    : ["Reclamar a la empresa", "Protección de datos", "Vías legales"];
  const tabs = `
    <div class="pestanas">
      <div class="pestana ${pestana===1?"activa":""}" data-tab="1">${etiquetas[0]}</div>
      <div class="pestana ${pestana===2?"activa":""}" data-tab="2">${etiquetas[1]}</div>
      <div class="pestana ${pestana===3?"activa":""}" data-tab="3">${etiquetas[2]}</div>
    </div>`;

  let contenido = "";
  if (pestana === 1) {
    contenido = `
      <div class="plazo">${admin ? "El plazo lo fija cada procedimiento" : `Plazo de respuesta: <b>${e.plazo} días</b>`}</div>
      <ol class="pasos">${e.pasos.map(([t,d])=>`<li><b>${t}</b>${d}</li>`).join("")}</ol>
      <h3>${admin ? "Dónde presentarlo" : "Dónde reclamar"}</h3>
      <p>${e.donde}</p>
      ${accesosCanal(e)}
      ${(!e.canales || !e.canales.web || !e.canales.web.url) ? avisoFalta("No tenemos su web de atención al cliente", e.nombre, "otros") : ""}
      <div class="acciones">
        <button class="boton" data-iniciar="${empresaActual}">${admin ? "Preparar mi alegación" : "Iniciar mi reclamación"}</button>
        <a class="boton sec" href="#/via/${admin ? "alegacion" : "reclamacion-empresa"}">Ver la guía completa</a>
      </div>
      <div class="fuentes"><b>Fuentes:</b> ${e.fuentes}<br>Validado por una persona el 22 de octubre de 2026.</div>`;
  }

  if (pestana === 2) {
    const lista = [
      ["acceso","Acceso","Saber qué datos tienen sobre ti"],
      ["rectificacion","Rectificación","Corregir datos erróneos"],
      ["supresion","Supresión","Que borren tus datos («derecho al olvido»)"],
      ["oposicion","Oposición","Que dejen de usar tus datos para ciertos fines"],
      ["limitacion","Limitación","Que solo los guarden, sin usarlos"],
      ["portabilidad","Portabilidad","Llevarte tus datos a otro servicio"]
    ];
    contenido = `
      ${bloquePrivacidadDatos(e)}

      <h2>¿Qué derecho quieres ejercer?</h2>
      <p>Marca uno o varios: la guía resalta lo que te toca y la plantilla se genera solo con esos.</p>
      <div class="derechos">
        ${lista.map(([k,t,s])=>`
          <label class="derecho ${derechos.has(k)?"activo":""}">
            <input type="checkbox" data-derecho="${k}" ${derechos.has(k)?"checked":""}>
            <span><b>${t}</b><small>${s}</small></span>
          </label>`).join("")}
      </div>
      <h3>Los pasos, siempre los mismos</h3>
      <ol class="pasos">
        <li><b>Identifícate</b>Nombre, DNI y una dirección o correo donde contestarte.</li>
        <li><b>Dirígete al delegado de protección de datos</b>${e.dpo || "Busca el contacto del DPO: no está en su aviso legal."}</li>
        <li><b>Di qué derecho ejerces y por qué</b>Concreto y por escrito.</li>
        <li><b>Espera un mes</b>Ampliable a dos. Si no contestan, reclamación ante la <strong>AEPD</strong>.</li>
      </ol>
      <div class="acciones"><button class="boton" data-doc="gdpr">Preparar mi solicitud</button></div>

      ${bloqueIconosPrivacidad(e)}

      ${bloqueCookies(e)}

      <div class="caja" style="background:var(--suave);border-color:#cfe6dd;margin:18px 0">
        <b>¿La web no te deja configurar las cookies?</b>
        <p style="margin:6px 0 10px;color:var(--gris)">Si solo puedes aceptar, o rechazar cuesta más que aceptar,
        hay una vía concreta.</p>
        <a class="boton sec" href="../guias/denunciar-cookies.html" target="_blank" rel="noopener">Cómo denunciarlo</a>
      </div>
      ${resumenValidacion()}
      <div class="fuentes"><b>Fuentes:</b> ${e.fuentes} · Reglamento (UE) 2016/679, arts. 12-15<br>
      Iconos según <a href="https://wiki.mozilla.org/Privacy_Icons" target="_blank" rel="noopener">Privacy Icons de Mozilla</a>
      · criterio de iconos normalizados: <a href="https://www.juditgarridofontova.com/iconos-normalizados/" target="_blank" rel="noopener">AEPD y RGPD</a></div>`;
  }

  if (pestana === 3) {
    contenido = `
      <h2>${admin ? "Si la Administración no te da la razón" : "Si no te contestan o no hay acuerdo"}</h2>
      <p>Este es el orden. Cada paso tiene su guía y su herramienta.</p>
      <ul class="escalera">
        ${viasDe(e.ambito).map((s,i)=>`<li class="${i===0?"primera":""}">
          <b><a href="#/via/${s}">${i+1}. ${VIAS[s].nombre}</a></b><small>${VIAS[s].resumen}</small></li>`).join("")}
      </ul>`;
  }

  return `
  <div class="env">
    <div class="miga"><a href="#/">Empresas</a> · ${e.sector}</div>
    <div class="ficha-cab">
      <h1>${admin ? "Alegar ante la " + e.nombre : "Reclamar a " + e.nombre}</h1>
      <div class="etiquetas"><span class="et">${e.sector}</span><span class="et ${e.tipo === "Pública" ? "pub" : ""}">${e.tipo}</span></div>
    </div>
    ${tabs}${contenido}
  </div>`;
}

function vistaVias(){
  return `
  <div class="env">
    <div class="miga"><a href="#/">Inicio</a></div>
    <h1 style="letter-spacing:-.03em">Las vías para reclamar</h1>
    <p style="color:var(--gris);max-width:60ch">No son las mismas si reclamas a una empresa que si reclamas a una administración. Cada vía tiene su guía y su herramienta.</p>
    <h2>Reclamar a una empresa</h2>
    <ul class="escalera">
      ${viasDe("consumo").map((s,i)=>`<li class="${i===0?"primera":""}">
        <b><a href="#/via/${s}">${i+1}. ${VIAS[s].nombre}</a></b>
        <small>${VIAS[s].resumen}</small>
        ${VIAS[s].plazoTexto ? `<small style="color:#8b96a1">${VIAS[s].plazoTexto}</small>` : ""}
      </li>`).join("")}
    </ul>
    <h2>Reclamar a la Administración</h2>
    <p style="color:var(--gris);margin-top:-4px">Otra escalera, otras reglas: aquí se alega, se recurre y, al final, se va a lo contencioso-administrativo.</p>
    <ul class="escalera">
      ${viasDe("administracion").map((s,i)=>`<li class="${i===0?"primera":""}">
        <b><a href="#/via/${s}">${i+1}. ${VIAS[s].nombre}</a></b>
        <small>${VIAS[s].resumen}</small>
        ${VIAS[s].plazoTexto ? `<small style="color:#8b96a1">${VIAS[s].plazoTexto}</small>` : ""}
      </li>`).join("")}
    </ul>
  </div>`;
}

let viaActual = null;

function vistaVia(slug){
  const v = VIAS[slug];
  if (!v) return vistaVias();
  const casos = leer(CLAVE_CASOS, []).filter(c => (empresaDe(c).ambito || "consumo") === (v.ambito || "consumo"));
  return `
  <div class="env">
    <div class="miga"><a href="#/vias">Vías</a> · ${v.nombre}</div>
    <h1 style="letter-spacing:-.03em">${v.orden}. ${v.nombre}</h1>
    <p style="font-size:17px;color:#2a3138;max-width:60ch">${v.resumen}</p>
    ${v.plazoTexto ? `<div class="plazo">${v.plazoTexto}</div>` : ""}

    <h3>Cuándo se usa</h3>
    <p>${v.cuando}</p>

    ${v.ambito === "administracion" ? bloqueProcedimiento(slug) : ""}

    <h3>Qué necesitas</h3>
    <ul>${v.requisitos.map(r=>`<li>${r}</li>`).join("")}</ul>

    ${slug === "omic" ? bloqueOMIC() : ""}

    ${v.enlace ? `<div class="caja" style="background:var(--suave)">
      <b>Contacto</b><p style="margin:6px 0 0"><a href="${v.enlace.url}" target="_blank" rel="noopener">${v.enlace.texto}</a></p>
    </div>` : ""}

      <h2>Usar esta vía</h2>
      <div class="caja">
        ${casos.length ? `
          <div style="margin-bottom:18px">
            <label style="display:block;font-size:13.5px;color:var(--gris);margin-bottom:8px">
              ${v.ambito === "administracion" ? "Continúa una actuación que ya tienes abierta" : "Continúa una reclamación que ya tienes abierta"}</label>
            ${casos.map(c => `<button class="boton sec" style="margin:0 8px 8px 0;padding:9px 14px;font-size:14px"
                data-abrir-caso="${c.id}">${c.empresa}</button>`).join("")}
          </div>` : ""}

        <div class="campo">
          <label>${v.ambito === "administracion" ? "Busca el organismo" : "Busca la empresa"}</label>
          <input id="via_buscar" placeholder="${v.ambito === "administracion" ? "Consejería, ayuntamiento, organismo…" : "Iberdrola, Amazon, tu compañía de la luz…"}" autocomplete="off">
          <p class="nota" style="margin:4px 0 0">De las que ya tienen guía. Si no está, la pides y la preparamos.</p>
        </div>
        <div id="via_resultados"></div>
      </div>
    </div>`;
    }

    function pintarResultadosVia(slug){
  const cont = document.getElementById("via_resultados");
  if (!cont) return;
  const v = VIAS[slug];
  const q = (val("via_buscar") || "").toLowerCase().trim();
  const entidades = Object.entries(EMPRESAS)
    .filter(([k, e]) => (e.ambito || "consumo") === (v.ambito || "consumo"))
    .filter(([k, e]) => !q || e.nombre.toLowerCase().includes(q) || e.sector.toLowerCase().includes(q));

  if (!entidades.length) {
    const nombre = q ? q.charAt(0).toUpperCase() + q.slice(1) : "";
    cont.innerHTML = `<div style="border-top:1px solid var(--linea);padding-top:14px">
      <p style="margin:0 0 12px;color:var(--gris)">${nombre ? `Todavía no hay guía de <b>${nombre}</b>.` : "No hay ninguna que coincida."}</p>
      <a class="boton" href="#/pedir?empresa=${encodeURIComponent(nombre)}">
        ${v.ambito === "administracion" ? "Aportar los datos de este organismo" : "Solicitar esta empresa"}</a>
      <p class="nota" style="margin-top:10px">${v.ambito === "administracion"
        ? "De una administración no investigamos nada: nos bastan sus datos de registro y sede."
        : "Al pedirla se abre una petición pública y el bot busca cómo se reclama. Sin tus datos personales."}</p>
    </div>`;
    return;
  }

  cont.innerHTML = `<ul class="lista-reclamaciones" style="border-top:1px solid var(--linea)">
    ${entidades.map(([k, e]) => `<li>
      <span style="flex:1"><b>${e.nombre}</b><br><small style="color:var(--gris)">${e.sector} · ${e.tipo.toLowerCase()}</small></span>
      <button class="boton" style="padding:8px 14px;font-size:13.5px" data-empezar="${k}">Empezar</button>
    </li>`).join("")}
  </ul>`;

  cont.querySelectorAll("[data-empezar]").forEach(b => {
    b.onclick = () => {
      const slugEmpresa = b.dataset.empezar;
      // si ya hay un caso abierto con esa empresa, se continúa: no se duplica
      const previo = leer(CLAVE_CASOS, []).find(c => c.slugEmpresa === slugEmpresa && c.estado !== "resuelta");
      if (previo) {
        if (previo.via !== slug) {
          previo.via = slug; previo.fecha = hoyISO();
          previo.vence = sumarDias(previo.fecha, VIAS[slug].plazo);
          guardarCaso(previo);
        }
        location.hash = "#/caso/" + previo.id;
        return;
      }
      const caso = buscarCaso(nuevoCaso(slugEmpresa));
      if (!caso) return;
      caso.via = slug; caso.fecha = hoyISO();
      caso.vence = sumarDias(caso.fecha, VIAS[slug].plazo);
      guardarCaso(caso);
      location.hash = "#/caso/" + caso.id;
    };
  });
}

function vistaCaso(id){
  const caso = buscarCaso(id);
  if (!caso) return `<div class="env"><p>Ese caso ya no existe.</p></div>`;
  const e = empresaDe(caso);
  const v = VIAS[caso.via];
  const restan = diasHasta(caso.vence);
  const sig = siguienteVia(caso.via);
  return `
  <div class="env">
    <div class="miga"><a href="#/herramientas">Mis reclamaciones</a> › ${caso.empresa}</div>
    <h1 style="letter-spacing:-.03em">${caso.empresa}</h1>
    <div class="etiquetas"><span class="et">${e.sector}</span><span class="et">${v.nombre}</span>
      <span class="et ${restan!==null && restan<0 ? "pub":""}">${restan===null?"sin plazo":(restan<0?`plazo vencido hace ${-restan} días`:`quedan ${restan} días`)}</span></div>

    <h2>En qué punto estás</h2>
    <ol class="pasos">
      ${viasDe(e.ambito).map(s=>{
        const hecho = VIAS[s].orden < v.orden;
        const ahora = s === caso.via;
        return `<li style="padding-bottom:12px;${hecho?"opacity:.45":""}">
          <b>${VIAS[s].nombre}${ahora?" ← ahora":""}${hecho?" ✓ hecho":""}</b>
          ${ahora?`<small style="color:var(--gris)">${VIAS[s].resumen}</small>`:""}</li>`;
      }).join("")}
    </ol>

    ${caso.via === "omic" ? bloqueOMIC() : ""}
    ${caso.via === "reclamacion-empresa" ? bloqueCanal(caso, e) : ""}

    <h2>Datos del caso</h2>
    <div class="caja">
      ${camposVia(caso)}
      <div class="acciones" style="margin-bottom:0">
        <button class="boton" data-guardar-campos="${caso.id}">Guardar datos</button>
        <button class="boton sec" data-doc-caso="${caso.id}">Generar documento</button>
      </div>
    </div>

    <div class="acciones" style="margin-top:18px">
      <button class="boton sec" style="color:#a33;border-color:#f0cfcf" data-borrar-caso="${caso.id}">Eliminar esta reclamación</button>
    </div>

    ${sig ? `<div class="caja" style="background:var(--suave)">
      <b>Siguiente paso</b>
      <p style="margin:6px 0 12px;color:var(--gris)">${e.ambito === "administracion" ? "Si la Administración no ha resuelto a tu favor" : "Si la empresa no ha resuelto"}, la siguiente vía es <b>${VIAS[sig].nombre}</b>.</p>
      <button class="boton sec" data-subir="${caso.id}">He pasado a esta vía</button>
    </div>` : `<div class="caja" style="background:var(--suave)"><b>Última vía</b><p style="margin:6px 0 0;color:var(--gris)">A partir de aquí solo queda la vía judicial con abogado.</p></div>`}
  </div>`;
}

function camposVia(caso){
  const v = VIAS[caso.via];
  const c = caso.campos || {};
  const defs = {
    hechos: ["hechos","Qué pasó","textarea","Cuéntalo con fechas y datos concretos."],
    importe: ["importe","Importe reclamado (€)","text","Ej. 240,50"],
    referencia: ["referencia","Contrato, pedido o referencia","text","Ej. CUPS o nº de pedido"],
    solicitud: ["solicitud","Qué solución pides","textarea","Ej. La devolución de 240,50 €"],
    fechaPrevia: ["fechaPrevia","Fecha de tu reclamación previa","date",""],
    expediente: ["expediente","Número de expediente o referencia","text","Ej. EXP 09/2026-BECAS-0412"],
    resolucion: ["resolucion","Resolución o actuación que recurres","text","Ej. Resolución de 2 de octubre de 2026"],
    fechaResolucion: ["fechaResolucion","Fecha de la notificación","date",""],
    respuesta: ["respuesta","Respuesta de la empresa","textarea","Si no contestó, déjalo vacío."]
  };
  const propios = (e => e.campos || [])((EMPRESAS[caso.slugEmpresa]) || {});
  const deVia = v.campos.filter(k => !propios.some(f => f.id === k));
  const cabecera = propios.map(f => `<div class="campo">
      <label>${f.et}${f.req ? ' <span style="color:#a33">*</span>' : ''}</label>
      <input id="f_${f.id}" value="${(c[f.id]||"").replace(/"/g,"&quot;")}" placeholder="${f.ph||""}">
      ${f.ayuda ? `<p class="nota" style="margin:4px 0 0">${f.ayuda}</p>` : ""}
    </div>`).join("");

  return cabecera + deVia.map(k=>{
    const [id, et, tipo, ph] = defs[k];
    const valor = (c[id]||"").replace(/"/g,"&quot;");
    return `<div class="campo"><label>${et}</label>
      ${tipo==="textarea"
        ? `<textarea id="f_${id}" rows="3" placeholder="${ph}">${valor}</textarea>`
        : `<input id="f_${id}" type="${tipo}" value="${valor}" placeholder="${ph}">`}</div>`;
  }).join("");
}


function vistaPremium(){
  const asunto = "Quiero la suscripción premium";
  const cuerpo = `Hola:

Me interesa la suscripción premium de cómoreclamar.info.

- Nombre:
- Correo actual:
- Empresa o empresas con las que tengo el problema:

Gracias.`;
  const mailto = `mailto:suscripcion@comoreclamar.info?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  return `
  <div class="env">
    <div class="miga"><a href="#/">Inicio</a></div>
    <h1 style="letter-spacing:-.03em">Premium</h1>
    <p style="font-size:17px;color:var(--gris);max-width:60ch">Tu propio buzón de reclamaciones en
    cómoreclamar.info, con la reclamación gestionada por ti y seguida por el bot.</p>

    <h2>Qué incluye</h2>
    <ul>
      <li><b>Una dirección propia</b>: <code>tunombre@comoreclamar.info</code>, creada para ti.</li>
      <li><b>Correspondencia ordenada</b>: lo que envías y lo que responde la empresa, en un solo sitio.</li>
      <li><b>Plazos vigilados</b>: el bot avisa cuando se cumple el mes sin respuesta.</li>
      <li><b>Sincronización</b> entre el móvil y el ordenador.</li>
    </ul>

    <h2>Cómo pedirla</h2>
    <div class="caja">
      <p style="margin-top:0">Es un servicio de pago. Escríbenos y te contamos precio y condiciones
      antes de dar de alta nada.</p>
      <div class="acciones" style="margin-bottom:0">
        <a class="boton" href="${mailto}">Escribir a suscripcion@comoreclamar.info</a>
        <button class="boton sec" data-copiar="suscripcion@comoreclamar.info">Copiar la dirección</button>
      </div>
      <p class="nota" style="margin-bottom:0">El botón abre tu programa de correo con el mensaje empezado.
      Puedes escribir directamente a <b>suscripcion@comoreclamar.info</b>.</p>
    </div>

    <p class="nota">La versión gratuita no cambia: sigue sin cuentas, sin contraseñas y sin guardar nada en el servidor.</p>
  </div>`;
}

function vistaHerramientas(){
  const d = leer(CLAVE_DATOS, {});
  const casos = leer(CLAVE_CASOS, []);
  return `
  <div class="env">
    <div class="miga"><a href="#/">Inicio</a></div>
    <h1 style="letter-spacing:-.03em">Herramientas</h1>
    <p style="color:var(--gris)">Todo lo que escribas aquí se queda en este navegador. No hay cuenta ni contraseña.</p>

    <h2>Mis datos</h2>
    <div class="caja">
      <div class="dos">
        <div class="campo"><label>Nombre y apellidos</label><input id="d_nombre" value="${d.nombre||""}" placeholder="Como aparece en tu DNI"></div>
        <div class="campo"><label>DNI / NIE</label><input id="d_dni" value="${d.dni||""}" placeholder="12345678Z"></div>
      </div>
      <div class="campo"><label>Dirección</label><input id="d_dir" value="${d.dir||""}" placeholder="Calle, número, CP y ciudad"></div>
      <div class="dos">
        <div class="campo"><label>Comunidad autónoma</label>
          <select id="d_comunidad">
            <option value="">— Sin especificar —</option>
            ${Object.keys(CCAA).map(k=>`<option value="${k}" ${d.comunidad===k?"selected":""}>${CCAA[k].nombre}</option>`).join("")}
          </select></div>
        <div class="campo"><label>Municipio</label>${campoMunicipio(d)}</div>
      </div>
      ${campoDistrito(d)}
      <p class="nota" style="margin-top:-6px">Con esto te señalamos tu oficina de consumo y los datos oficiales de tu comunidad.</p>
      <div class="dos">
        <div class="campo"><label>Correo electrónico</label><input id="d_email" value="${d.email||""}" placeholder="tucorreo@ejemplo.com"></div>
        <div class="campo"><label>Teléfono</label><input id="d_tel" value="${d.tel||""}" placeholder="600 000 000"></div>
      </div>
      <div class="acciones" style="margin-bottom:0">
        <button class="boton" id="guardar-datos">Guardar</button>
        <button class="boton sec" id="exportar">Exportar</button>
        <button class="boton sec" id="importar">Importar</button>
        <button class="boton sec" id="borrar" style="color:#a33;border-color:#f0cfcf">Borrar todo</button>
      </div>
    </div>

    <h2>Mis reclamaciones</h2>
    ${casos.length ? `<div class="caja"><ul class="lista-reclamaciones">
      ${casos.map(c=>{
        const restan = diasHasta(c.vence);
        const cls = c.estado==="resuelta" ? "ok" : (restan!==null && restan<0 ? "vence" : "");
        const txt = c.estado==="resuelta" ? "resuelta" : (restan===null ? "sin plazo" : (restan<0 ? `vencida hace ${-restan} días` : `quedan ${restan} días`));
        return `<li><span style="flex:1">
            <a href="#/caso/${c.id}"><b>${c.empresa}</b></a><br>
            <small style="color:var(--gris)">${VIAS[c.via].nombre} · desde el ${fecha(c.fecha)}</small></span>
          <span class="estado ${cls}">${txt}</span>
          <button class="boton sec" style="padding:7px 12px;font-size:13px" data-abrir="${c.id}">Abrir</button>
          <button class="boton sec" style="padding:7px 10px;font-size:13px;color:#a33;border-color:#f0cfcf"
                  data-borrar-caso="${c.id}" title="Eliminar esta reclamación">✕</button></li>`;
      }).join("")}
    </ul></div>` : `<div class="caja"><p style="margin:0;color:var(--gris)">Todavía no has añadido ninguna empresa.</p></div>`}
    <h2>Empresas con guía</h2>
    <p style="color:var(--gris);margin-top:-4px">Busca la empresa y añádela a tus reclamaciones: tendrás su guía, su plazo contando y su documento.</p>
    <div class="caja">
      <div class="dos">
        <div class="campo"><label>Buscar por nombre</label><input id="buscar_empresa" placeholder="Iberdrola, Amazon…" autocomplete="off"></div>
        <div class="campo"><label>Sector</label>
          <select id="filtro_sector">
            <option value="">Todos los sectores</option>
            ${sectores().map(s=>`<option value="${s}">${s}</option>`).join("")}
          </select></div>
      </div>
      <div id="resultados-empresas"></div>
    </div>

    <div class="caja" style="background:var(--suave);margin-top:12px">
      <b>¿Tu empresa no está en la lista?</b>
      <p style="margin:6px 0 12px;color:var(--gris)">Pídela: con el nombre y su web preparamos la guía. No hace falta que cuentes tu caso.</p>
      <a class="boton" href="#/pedir">Pedir la guía de una empresa</a>
    </div>

  </div>`;
}


function municipiosDe(comunidad){
  if (!comunidad) return [];
  const m = MUNICIPIOS && MUNICIPIOS.comunidades && MUNICIPIOS.comunidades[comunidad];
  return m ? m.municipios : [];
}

function distritosDe(d){
  // El distrito se pide solo si hay divisiones oficiales Y oficinas por distrito:
  // si el municipio tiene una sola oficina, preguntar el distrito no filtra nada.
  if (!d || !d.municipio || !DIVISIONES) return [];
  const m = DIVISIONES.municipios && DIVISIONES.municipios[d.municipio];
  if (!m || !m.oficinas_por_distrito) return [];
  if (d.comunidad && m.comunidad && d.comunidad !== m.comunidad) return [];
  return m.lista || [];
}

function campoDistrito(d){
  const ds = distritosDe(d);
  if (!ds.length) return "";   // no se pide si no hace falta
  return `<div class="campo"><label>Distrito</label>
      <select id="d_distrito">
        <option value="">— Elige tu distrito —</option>
        ${ds.map(x => `<option ${d.distrito === x ? "selected" : ""}>${x}</option>`).join("")}
      </select>
      <p class="nota" style="margin:4px 0 0">En ${d.municipio} cada distrito tiene su propia oficina de consumo.</p>
    </div>`;
}

function campoMunicipio(d){
  const munis = municipiosDe(d.comunidad);
  if (!d.comunidad) {
    return `<select id="d_municipio" disabled><option value="">Elige antes la comunidad</option></select>`;
  }
  if (!munis.length) {
    return `<select id="d_municipio" disabled><option value="">Sin lista oficial todavía</option></select>
      <p class="nota" style="margin:4px 0 0">Los municipios se cargan de la relación oficial del INE.
      Para ${d.comunidad} aún no está incorporada.</p>`;
  }
  return `<select id="d_municipio">
      <option value="">— Elige tu municipio —</option>
      ${munis.map(m => `<option ${d.municipio === m ? "selected" : ""}>${m}</option>`).join("")}
    </select>`;
}

function sectores(){
  return [...new Set(Object.values(EMPRESAS).map(e=>e.sector))].sort();
}

function pintarResultadosEmpresas(){
  const cont = document.getElementById("resultados-empresas");
  if (!cont) return;
  const q = (val("buscar_empresa") || "").toLowerCase().trim();
  const sector = val("filtro_sector") || "";
  const hits = Object.entries(EMPRESAS).filter(([k,e]) =>
    (!sector || e.sector === sector) &&
    (!q   || e.nombre.toLowerCase().includes(q) || e.sector.toLowerCase().includes(q)));

  if (!hits.length) {
    const nombre = q ? q.charAt(0).toUpperCase() + q.slice(1) : "esa empresa";
    cont.innerHTML = `<p class="nota" style="margin:0 0 10px">No hay guía de ${nombre} todavía.
      <a href="#/pedir">Pídela</a> y la preparamos.</p>`;
    return;
  }

  cont.innerHTML = `<ul class="lista-reclamaciones">${hits.map(([k,e])=>`<li>
      <span style="flex:1"><b>${e.nombre}</b><br><small style="color:var(--gris)">${e.sector} · ${e.tipo.toLowerCase()}</small></span>
      <button class="boton sec" style="padding:7px 12px;font-size:13px" data-anadir="${k}">Añadir</button>
    </li>`).join("")}</ul>`;

  cont.querySelectorAll("[data-anadir]").forEach(b=>{
    b.onclick = () => { const id = nuevoCaso(b.dataset.anadir); location.hash = "#/caso/" + id; };
  });
}

/* Formulario de petición: lo que se enviaría al bot. Nunca datos personales. */
/* Comprobación en el cliente ANTES de molestar al servidor:
   formato del enlace, del teléfono o de la dirección. Nada sale del navegador. */
function analizarEnlace(valor, tipo){
  const v = (valor || "").trim();
  if (!v) return { ok: true, msg: "" };

  if (tipo === "telefono") {
    const tel = v.replace(/[^0-9+]/g, "");
    return /^(\+34)?[6789]\d{8}$/.test(tel)
      ? { ok: true, msg: "Teléfono con formato correcto." }
      : { ok: false, msg: "No parece un teléfono español: nueve dígitos que empiecen por 6, 7, 8 o 9." };
  }

  if (tipo === "direccion") {
    return (v.length >= 8 && /\d/.test(v))
      ? { ok: true, msg: "Dirección con calle y número." }
      : { ok: false, msg: "Una dirección necesita calle y número." };
  }

  // esquema explícito que no sea web
  const esquema = /^([a-z][a-z0-9+.-]*):/i.exec(v);
  if (esquema && !/^https?$/i.test(esquema[1])) {
    return { ok: false, msg: `Ese enlace empieza por «${esquema[1]}:», que no es una dirección web. Tiene que ser http o https.` };
  }

  // direcciones locales antes que nada: no srven como enlace público
  const limpio = v.replace(/^https?:\/\//i, "").split("/")[0].toLowerCase();
  if (/^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(limpio) || limpio.endsWith(".local")) {
    return { ok: false, msg: "Esa dirección es local (de tu equipo o de una red interna): no sirve como enlace público." };
  }

  if (!v.includes(".")) {
    return { ok: false, msg: "Un enlace necesita un dominio, por ejemplo empresa.es." };
  }

  let u;
  try {
    u = new URL(v.startsWith("http") ? v : "https://" + v);
  } catch (e) {
    return { ok: false, msg: "No se puede leer como enlace: revisa que no tenga espacios." };
  }
  if (!/^https?:$/.test(u.protocol)) return { ok: false, msg: "Solo se admiten enlaces http o https." };
  if (!u.hostname.includes(".")) return { ok: false, msg: "Al dominio le falta algo, por ejemplo «empresa.es»." };
  if (u.username || u.password) return { ok: false, msg: "El enlace lleva usuario y contraseña: no lo admitimos." };
  if (v.length > 2000) return { ok: false, msg: "El enlace es demasiado largo." };
  return { ok: true, msg: "Enlace bien formado. Al enviar se comprobará además que responda." };
}

/* El navegador no puede leer el estado de otro dominio (CORS), pero sí sabe si
   la conexión llega a existir. Sirve para cazar dominios mal escritos. */
async function probarDominio(valor, senal){
  let u;
  try { u = new URL(valor.startsWith("http") ? valor : "https://" + valor); }
  catch (e) { return { ok: false, msg: "No se puede leer como enlace." }; }

  if (location.protocol === "https:" && u.protocol === "http:") {
    return { ok: false, msg: "La página es https y el enlace http: el navegador lo va a bloquear. Usa https://" };
  }

  try {
    await fetch(u.href, {mode: "no-cors", method: "GET", cache: "no-store",
                         redirect: "follow", signal: senal});
    return { ok: true, msg: "El dominio responde. El código exacto lo comprueba el bot al procesarlo." };
  } catch (e) {
    if (e && e.name === "AbortError") return { ok: true, msg: "" };
    return { ok: false, msg: "No se pudo conectar con ese dominio: puede estar mal escrito o no existir." };
  }
}

function vistaPedir(){
  const qp = new URLSearchParams(location.search);
  const emp = qp.get("empresa") || "";
  const ap = qp.get("aportar") || "";
  return `
  <div class="env">
    <div class="miga"><a href="#/herramientas">Herramientas</a> · Pedir una guía</div>
    <h1 style="letter-spacing:-.03em">Pedir la guía de una empresa</h1>
    <p style="color:var(--gris);max-width:60ch">Si la empresa no está, se la pedimos al bot. Solo necesitamos saber a quién y de qué web sacar la información.</p>

    <div class="caja" id="caja-peticion">
      <div class="campo"><label>Empresa</label><input id="p_empresa" value="${emp}" placeholder="Nombre de la empresa"></div>
      <div class="dos">
        <div class="campo"><label>Su web</label><input id="p_web" placeholder="empresa.com"></div>
        <div class="campo"><label>Sector</label>
          <select id="p_sector"><option value="">No lo sé</option>
            ${sectores().map(s=>`<option value="${s}">${s}</option>`).join("")}
            <option value="Otro">Otro</option></select></div>
      </div>
      <div class="campo"><label>Qué vía te interesa</label>
        <select id="p_via">
          <option value="reclamacion-empresa">Reclamación a la empresa (protocolo publicado)</option>
          <option value="gdpr">Protección de datos (a partir de su aviso legal)</option>
          <option value="todas">Las dos</option>
        </select></div>
      <div class="dos">
        <div class="campo"><label>¿Aportas algún dato?</label>
          <select id="p_aporta">
            <option value="">No, solo lo pido</option>
            <option value="privacidad" ${ap === "privacidad" ? "selected" : ""}>Su política de privacidad</option>
            <option value="cookies" ${ap === "cookies" ? "selected" : ""}>Su política de cookies</option>
            <option value="telefono">Un teléfono de atención</option>
            <option value="direccion">Una dirección o sede</option>
            <option value="otros">Otro dato</option>
          </select></div>
        <div class="campo"><label>Enlace o dato</label><input id="p_dato" placeholder="https://… o el dato tal cual">
          <p class="nota" id="p_dato_estado" style="margin:5px 0 0"></p></div>
      </div>
      <p class="nota" style="margin-top:-4px">Comprobamos que el enlace esté bien escrito y que el dominio responda.
        El código exacto de la respuesta lo verifica el bot después: el navegador no puede leerlo.</p>

      <div class="campo"><label>¿Qué necesitas saber?</label>
        <textarea id="p_texto" rows="3" placeholder="Ej. cómo reclamar una factura cobrada dos veces"></textarea></div>
      <div class="acciones" style="margin-bottom:0">
        <button class="boton sec" id="ver-peticion">Ver qué se envía</button>
        <button class="boton" id="enviar-peticion">Pedir la guía</button>
      </div>
      <div id="vista-peticion" class="oculto" style="margin-top:16px">
        <div class="documento" id="texto-peticion" style="max-height:240px"></div>
        <p class="nota">Esto es lo único que viaja. Ni tu nombre, ni tu correo, ni tu caso: el formulario no tiene esos campos.</p>
      </div>
    </div>
  </div>`;
}

function textoPeticion(){
  const empresa = val("p_empresa") || "[EMPRESA]";
  const web = val("p_web") || "[sin web]";
  const sector = val("p_sector") || "sin clasificar";
  const via = document.getElementById("p_via")?.selectedOptions[0]?.text || "—";
  const texto = val("p_texto") || "(sin detalle)";
  const aporta = document.getElementById("p_aporta")?.value || "";
  const dato = val("p_dato");
  return `Título: [Solicitud] ${empresa}${aporta ? " · " + aporta : ""}

Empresa: ${empresa}
Web: ${web}
Sector: ${sector}
Vía: ${via}
${aporta ? `Aporto (${aporta}): ${dato || "(sin dato)"}\n` : ""}
Qué se necesita:
${texto}`;
}

/* ---------------------------------------------------------------- pintar */
function pintar(){
  const hash = location.hash.replace("#/", "") || "";
  const [ruta, arg, sub] = hash.split("/");
  let html = "";

  if (ruta === "caso") {
    const params = new URLSearchParams(location.search);
    const canal = params.get("canal");
    const c = buscarCaso(arg);
    if (c && canal && c.canal !== canal) { c.canal = canal; guardarCaso(c); }
  }

  if (ruta === "" ) sectorActivo = sectorDeLaURL() || sectorActivo;

  if (ruta === "empresa" && EMPRESAS[arg]) { empresaActual = arg; if (sub) pestana = +sub; html = vistaEmpresa(); }
  else if (ruta === "vias") html = vistaVias();
  else if (ruta === "via") { viaActual = arg; html = vistaVia(arg); }
  else if (ruta === "caso") html = vistaCaso(arg);
  else if (ruta === "herramientas") html = vistaHerramientas();
  else if (ruta === "pedir") html = vistaPedir();
  else if (ruta === "premium") html = vistaPremium();
  else html = vistaPortada();

  document.getElementById("vista").innerHTML = html;
  window.scrollTo(0,0);
  enlazar();

  if (leer(CLAVE_DATOS, {}).comunidad === "Madrid" && !OMIC_MADRID) cargarOMICMadrid();
  if (!VALIDACION) cargarValidacion();
  if (!MUNICIPIOS) cargarMunicipios();
  if (!OMIC_CAPITAL) cargarOMICCapital();
  if (!DIVISIONES) cargarDivisiones();
  if (!OMIC_NACIONAL) cargarOMICNacional();
  if (!PROCEDIMIENTOS) cargarProcedimientos();

  document.querySelectorAll("nav a").forEach(a=>a.classList.remove("activo"));
  const mapa = {"":"home","vias":"vias","via":"vias","herramientas":"herr","caso":"herr","pedir":"herr","premium":"premium"};
  const n = document.querySelector(`nav a[data-nav="${mapa[ruta]||""}"]`);
  if (n) n.classList.add("activo");
}

function enlazar(){
  document.querySelectorAll(".pestana").forEach(p=> p.onclick = () => { pestana = +p.dataset.tab; pintar(); });

  document.querySelectorAll("[data-derecho]").forEach(c=>{
    c.onchange = () => { c.checked ? derechos.add(c.dataset.derecho) : derechos.delete(c.dataset.derecho); pintar(); };
  });

  document.querySelectorAll("[data-iniciar]").forEach(b=>{
    b.onclick = () => { const id = nuevoCaso(b.dataset.iniciar); location.hash = "#/caso/" + id; };
  });

  document.querySelectorAll("[data-anadir]").forEach(b=>{
    b.onclick = () => { const id = nuevoCaso(b.dataset.anadir); location.hash = "#/caso/" + id; };
  });

  document.querySelectorAll(".chip[data-sector]").forEach(ch => {
    ch.onclick = () => {
      sectorActivo = (sectorActivo === ch.dataset.sector) ? "" : ch.dataset.sector;
      document.querySelectorAll(".chip[data-sector]").forEach(c =>
        c.classList.toggle("activo", c.dataset.sector === sectorActivo));
      const q = document.getElementById("q");
      pintarEmpresas(q ? q.value : "", sectorActivo);
    };
  });

  const buscador = document.getElementById("q");
  if (buscador && document.getElementById("lista-empresas")) {
    buscador.oninput = () => pintarEmpresas(buscador.value, sectorActivo);
    pintarEmpresas(buscador.value, sectorActivo);
  }

  const filtroOMIC = document.getElementById("omic_filtro");
  if (filtroOMIC) {
    filtroOMIC.oninput = () => {
      document.getElementById("omic_lista").innerHTML = listaOMIC(filtroOMIC.value);
    };
    document.getElementById("omic_lista").innerHTML = listaOMIC(filtroOMIC.value);
  }

  const selCom = document.getElementById("d_comunidad");
  if (selCom) selCom.onchange = () => {
    const d = leer(CLAVE_DATOS, {});
    d.comunidad = selCom.value;
    d.municipio = "";
    guardar(CLAVE_DATOS, d);
    if (selCom.value === "Madrid" && !OMIC_MADRID) cargarOMICMadrid();
    pintar();
  };

  const selMun = document.getElementById("d_municipio");
  if (selMun) selMun.onchange = () => {
    const d = leer(CLAVE_DATOS, {});
    d.municipio = selMun.value;
    if (!distritosDe(d).length) d.distrito = "";   // si el municipio no tiene distritos, se limpia
    guardar(CLAVE_DATOS, d);
    pintar();                                       // así aparece o desaparece el campo de distrito
  };

  const selDist = document.getElementById("d_distrito");
  if (selDist) selDist.onchange = () => {
    const d = leer(CLAVE_DATOS, {});
    d.distrito = selDist.value;
    guardar(CLAVE_DATOS, d);
    pintar();
  };

  if (document.getElementById("resultados-empresas")) {
    pintarResultadosEmpresas();
    ["buscar_empresa", "filtro_sector"].forEach(id=>{
      const el = document.getElementById(id);
      if (el) { el.oninput = pintarResultadosEmpresas; el.onchange = pintarResultadosEmpresas; }
    });
  }

  const campoDato = document.getElementById("p_dato");
  const estadoDato = document.getElementById("p_dato_estado");
  const botonEnviar = document.getElementById("enviar-peticion");
  if (campoDato && estadoDato) {
    let turno = 0, temporizador = null, controlador = null;

    const pintarEstado = (r, comprobando) => {
      campoDato.style.borderColor = comprobando ? "var(--linea)"
        : (r.msg ? (r.ok ? "var(--acento)" : "#c0392b") : "var(--linea)");
      estadoDato.textContent = comprobando ? "Comprobando…" : r.msg;
      estadoDato.style.color = comprobando ? "var(--gris)"
        : (r.msg ? (r.ok ? "var(--acento)" : "#c0392b") : "var(--gris)");
      if (botonEnviar) botonEnviar.disabled = comprobando ? true : !r.ok;
    };

    const revisar = () => {
      const tipo = (document.getElementById("p_aporta") || {}).value || "";
      const valor = campoDato.value.trim();
      const formato = analizarEnlace(valor, tipo);

      if (!valor) { pintarEstado({ ok: true, msg: "" }, false); return; }
      if (!formato.ok || tipo === "telefono" || tipo === "direccion") {
        pintarEstado(formato, false); return;
      }

      // el formato es correcto: se comprueba el dominio (con espera para no ir a cada tecla)
      const mio = ++turno;
      pintarEstado(formato, true);
      clearTimeout(temporizador);
      if (controlador) controlador.abort();
      temporizador = setTimeout(async () => {
        controlador = new AbortController();
        const corte = setTimeout(() => controlador.abort(), 7000);
        const r = await probarDominio(valor, controlador.signal);
        clearTimeout(corte);
        if (mio !== turno) return;              // llegó tarde: ya hay otra búsqueda
        if (!r.msg) { pintarEstado(formato, false); return; }
        pintarEstado(r, false);
      }, 650);
    };

    campoDato.oninput = revisar;
    const selAporta = document.getElementById("p_aporta");
    if (selAporta) selAporta.onchange = revisar;
    revisar();
  }

  const vp = document.getElementById("ver-peticion");
  if (vp) vp.onclick = () => {
    const caja = document.getElementById("vista-peticion");
    document.getElementById("texto-peticion").textContent = textoPeticion();
    caja.classList.toggle("oculto");
    vp.textContent = caja.classList.contains("oculto") ? "Ver qué se envía" : "Ocultar";
  };

  const ep = document.getElementById("enviar-peticion");
  if (ep) ep.onclick = () => {
    const empresa = val("p_empresa");
    if (!empresa) { alert("Escribe el nombre de la empresa."); return; }
    const chk = analizarEnlace(val("p_dato"), (document.getElementById("p_aporta") || {}).value || "");
    if (!chk.ok) { alert(chk.msg); return; }
    document.getElementById("caja-peticion").innerHTML = `
      <b>Petición preparada</b>
      <p style="color:var(--gris);margin:8px 0 16px">En la web real esto abre una petición pública con
      <b>${empresa}</b> y los datos de arriba —sin nada tuyo— y el bot prepara la guía, que una persona revisa antes de publicar.</p>
      <p class="nota" style="margin-bottom:16px">En este prototipo no se envía nada a ningún sitio.</p>
      <a class="boton sec" href="#/herramientas">Volver a herramientas</a>`;
  };

  if (document.getElementById("via_resultados")) {
    pintarResultadosVia(viaActual);
    const campo = document.getElementById("via_buscar");
    if (campo) campo.oninput = () => pintarResultadosVia(viaActual);
  }

  document.querySelectorAll("[data-abrir-caso]").forEach(b=>{
    b.onclick = () => { location.hash = "#/caso/" + b.dataset.abrirCaso; };
  });

  document.querySelectorAll("[data-guardar-campos]").forEach(b=>{
    b.onclick = () => {
      const caso = buscarCaso(b.dataset.guardarCampos);
      if (!caso) return;
      caso.campos = {};
      const propios = (EMPRESAS[caso.slugEmpresa] || {}).campos || [];
      [...propios.map(f=>f.id), ...VIAS[caso.via].campos].forEach(k=>{ const v = val("f_" + k); if (v) caso.campos[k] = v; });
      caso.solicitud = caso.campos.solicitud || "";
      guardarCaso(caso);
      b.textContent = "Guardado ✓";
      setTimeout(()=>{ b.textContent = "Guardar datos"; }, 1400);
    };
  });

  document.querySelectorAll("[data-doc-caso]").forEach(b=>{
    b.onclick = () => {
      const caso = buscarCaso(b.dataset.docCaso);
      const e = empresaDe(caso);
      const texto = VIAS[caso.via].plantilla(caso.campos || {}, leer(CLAVE_DATOS, {}), e, caso.canal);
      mostrarDocumento(texto, `${caso.empresa} — ${VIAS[caso.via].nombre}`, caso);
    };
  });

  document.querySelectorAll("[data-subir]").forEach(b=>{
    b.onclick = () => {
      const caso = buscarCaso(b.dataset.subir);
      const sig = siguienteVia(caso.via);
      if (!sig) return;
      caso.via = sig;
      caso.fecha = hoyISO();
      caso.vence = sumarDias(caso.fecha, VIAS[sig].plazo);
      guardarCaso(caso);
      pintar();
    };
  });

  document.querySelectorAll('select[id^="canal_"]').forEach(sel=>{
    sel.onchange = () => {
      const caso = buscarCaso(sel.id.replace("canal_",""));
      if (!caso) return;
      caso.canal = sel.value;
      guardarCaso(caso);
      pintar();
    };
  });

  document.querySelectorAll("[data-copiar]").forEach(b=>{
    b.onclick = async () => {
      await navigator.clipboard.writeText(b.dataset.copiar);
      const antes = b.textContent; b.textContent = "Copiado ✓";
      setTimeout(()=>{ b.textContent = antes; }, 1400);
    };
  });

  document.querySelectorAll("[data-abrir]").forEach(b=>{
    b.onclick = () => { location.hash = "#/caso/" + b.dataset.abrir; };
  });

  document.querySelectorAll("[data-borrar-caso]").forEach(b=>{
    b.onclick = () => {
      const caso = buscarCaso(b.dataset.borrarCaso);
      if (!caso) return;
      if (!confirm(`¿Eliminar la reclamación de ${caso.empresa}? Se borra de este navegador y no se puede deshacer.`)) return;
      guardar(CLAVE_CASOS, leer(CLAVE_CASOS, []).filter(c => c.id !== caso.id));
      if (location.hash.includes("/caso/")) location.hash = "#/herramientas"; else pintar();
    };
  });

  document.querySelectorAll("[data-doc]").forEach(b=>{
    b.onclick = () => mostrarDocumento(textoGDPR(), "Tu solicitud", null);
  });

  const g = document.getElementById("guardar-datos");
  if (g) g.onclick = () => {
    guardar(CLAVE_DATOS, {nombre:val("d_nombre"), dni:val("d_dni"), dir:val("d_dir"), email:val("d_email"), tel:val("d_tel"),
                          comunidad:val("d_comunidad"),
                          municipio:val("d_municipio"), distrito:val("d_distrito")});
    g.textContent = "Guardado ✓"; setTimeout(()=>{ g.textContent = "Guardar"; }, 1400);
  };

  const ex = document.getElementById("exportar");
  if (ex) ex.onclick = () => {
    const blob = new Blob([JSON.stringify({datos:leer(CLAVE_DATOS,{}), casos:leer(CLAVE_CASOS,[])}, null, 2)], {type:"application/json"});
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = "comoreclamar-mis-datos.json"; a.click();
  };

  const im = document.getElementById("importar");
  if (im) im.onclick = () => {
    const inp = document.createElement("input"); inp.type = "file"; inp.accept = ".json";
    inp.onchange = () => {
      const f = inp.files[0]; if (!f) return;
      const fr = new FileReader();
      fr.onload = () => { try {
        const o = JSON.parse(fr.result);
        if (o.datos) guardar(CLAVE_DATOS, o.datos);
        if (o.casos) guardar(CLAVE_CASOS, o.casos);
        pintar();
      } catch(e){ alert("Ese fichero no es válido."); } };
      fr.readAsText(f);
    };
    inp.click();
  };

  const bo = document.getElementById("borrar");
  if (bo) bo.onclick = () => {
    if (confirm("¿Borrar tus datos y tus reclamaciones de este navegador?")) {
      localStorage.removeItem(CLAVE_DATOS); localStorage.removeItem(CLAVE_CASOS); pintar();
    }
  };
}


/* ---------------------------------------------------- PDF desde plantilla */
/* La plantilla vive en el repositorio: plantillas/<empresa>.html o, si no
   existe, plantillas/carta-reclamacion.html. Se rellena en el navegador y se
   manda a imprimir; el navegador la guarda como PDF. Nada sale del equipo.   */
const BASE_PLANTILLAS = new URL("../plantillas/", location.href).href;

async function plantillaPDF(slug, via){
  const rutas = [
    slug && via ? `${BASE_PLANTILLAS}${slug}-${via}.html` : null,
    slug ? `${BASE_PLANTILLAS}${slug}.html` : null,
    `${BASE_PLANTILLAS}carta-reclamacion.html`
  ].filter(Boolean);
  for (const ruta of rutas) {
    try {
      const res = await fetch(ruta, {cache: "no-store"});
      if (res.ok) return {html: await res.text(), ruta};
    } catch (e) { /* se prueba la siguiente */ }
  }
  return null;
}

function rellenarPlantilla(html, vals){
  return html.replace(/{{\s*([A-Z_]+)\s*}}/g, (m, k) => (vals[k] !== undefined ? vals[k] : ""));
}

function imprimirHTML(html){
  const marco = document.createElement("iframe");
  marco.setAttribute("aria-hidden", "true");
  marco.style.cssText = "position:fixed;left:-9999px;width:210mm;height:297mm;border:0";
  document.body.appendChild(marco);
  const doc = marco.contentDocument;
  doc.open(); doc.write(html); doc.close();
  setTimeout(() => {
    try { marco.contentWindow.focus(); marco.contentWindow.print(); }
    catch (e) { alert("El navegador ha bloqueado la impresión. Prueba a abrirlo en otra ventana."); }
    setTimeout(() => marco.remove(), 120000);
  }, 350);
}

async function descargarPDF(caso, texto, titulo){
  const datos = leer(CLAVE_DATOS, {});
  const e = empresaDe(caso);
  const tpl = await plantillaPDF(caso.slugEmpresa, caso.via);
  if (!tpl) { alert("No se pudo cargar la plantilla del documento."); return; }

  const vals = {
    TITULO: (titulo || "Reclamación").replace(/ — .*$/, "").toUpperCase(),
    NOMBRE: datos.nombre || "[NOMBRE Y APELLIDOS]",
    DNI: datos.dni || "[DNI]",
    DOMICILIO: datos.dir || "[DOMICILIO]",
    CONTACTO: [datos.email, datos.tel].filter(Boolean).join(" · "),
    DESTINATARIO_NOMBRE: e.nombre,
    DESTINATARIO_DIRECCION: (e.canales && e.canales.burofax && e.canales.burofax.direccion) || e.donde || "",
    LUGAR: datos.municipio || "[LOCALIDAD]",
    FECHA: fecha(hoyISO()),
    CUERPO: texto.split(/\n{2,}/).map(par =>
      `<p>${par.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\n/g,"<br>")}</p>`).join("\n"),
    REFERENCIA: caso.campos && caso.campos.referencia
      ? `<div class="referencia">Referencia: ${caso.campos.referencia}</div>` : ""
  };
  imprimirHTML(rellenarPlantilla(tpl.html, vals));
}

function textoGDPR(){
  const d = leer(CLAVE_DATOS, {});
  const e = EMPRESAS[empresaActual] || {nombre:"[EMPRESA]"};
  const nombres = {acceso:"acceso",rectificacion:"rectificación",supresion:"supresión",oposicion:"oposición",limitacion:"limitación",portabilidad:"portabilidad"};
  const lista = [...derechos].map(k=>nombres[k]);
  return `A la atención del Delegado de Protección de Datos de ${e.nombre}

${identidad(d)}, por medio del presente escrito y al amparo del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD), EJERZO el derecho de ${lista.join(", ")}.

Le solicito que, en el plazo máximo de un mes, ${lista.length>1?"atiendan los derechos indicados":"atienda el derecho indicado"} y me informen de las medidas adoptadas.

${e.dpo ? "Datos de contacto del responsable: " + e.dpo + "\n" : ""}
En caso de no recibir respuesta en plazo, o si esta no es satisfactoria, presentaré la correspondiente reclamación ante la Agencia Española de Protección de Datos.

${firma(d)}`;
}

function mostrarDocumento(texto, titulo, caso){
  const v = document.getElementById("vista");
  const env = document.createElement("div");
  env.className = "env";
  env.id = "envoltorio-doc";
  const caja = document.createElement("div");
  caja.className = "caja";
  caja.innerHTML = `
    <h2 style="margin-top:0">${titulo}</h2>
    <p class="nota" style="margin-bottom:12px">Generada en tu navegador con tus datos. Revísala antes de enviarla.</p>
    <div class="documento">${texto.replace(/</g,"&lt;")}</div>
    <div class="acciones" style="margin-bottom:0">
      <button class="boton" id="descargar">Descargar PDF</button>
      <button class="boton sec" id="copiar">Copiar</button>
      ${caso ? `<button class="boton sec" id="marcar-enviada">Marcar como enviada hoy</button>` : ""}
      <button class="boton sec" id="cerrar-doc">Cerrar</button>
    </div>`;
  env.appendChild(caja);
  v.prepend(env);
  caja.scrollIntoView({behavior:"smooth", block:"start"});

  document.getElementById("cerrar-doc").onclick = () => env.remove();
  document.getElementById("descargar").onclick = async () => {
    const c = caso || {slugEmpresa: empresaActual, campos: {}, empresa: (EMPRESAS[empresaActual]||{}).nombre, via: null};
    await descargarPDF(c, texto, titulo);
  };
  document.getElementById("copiar").onclick = async () => {
    await navigator.clipboard.writeText(texto);
    const b = document.getElementById("copiar"); b.textContent = "Copiado";
    setTimeout(()=>{ b.textContent = "Copiar"; }, 1400);
  };
  const m = document.getElementById("marcar-enviada");
  if (m) m.onclick = () => {
    caso.fecha = hoyISO();
    caso.vence = sumarDias(caso.fecha, VIAS[caso.via].plazo);
    guardarCaso(caso);
    location.hash = "#/caso/" + caso.id;
  };
}

/* búsqueda y filtro por sector en la portada */
document.addEventListener("input", ev => {
  if (ev.target.id !== "q") return;
  pintarEmpresas(ev.target.value, sectorActivo);
});

/* datos de demostración con ?demo=1 */
if (location.search.includes("demo") && !localStorage.getItem(CLAVE_DATOS)) {
  guardar(CLAVE_DATOS, {nombre:"Lucía Ferrer Ruiz", dni:"12345678Z", dir:"Calle Mayor 14, 3º B, 28013 Madrid",
                        email:"lucia.ferrer@ejemplo.com", tel:"600 123 456",
                        comunidad:"Madrid", municipio:"Madrid", distrito:"Chamberí"});
  guardar(CLAVE_CASOS, [
    {id:"c1", empresa:"Iberdrola", slugEmpresa:"iberdrola", sector:"Energía", via:"reclamacion-empresa",
     fecha:"2026-10-01", vence:"2026-10-31", estado:"en curso",
     campos:{cups:"ES0021000001234567AB", contrato:"123456789",
             hechos:"Me han facturado dos veces el mismo periodo (septiembre de 2026).", importe:"142,80",
             solicitud:"La devolución de 142,80 euros."}},
    {id:"c2", empresa:"Amazon", slugEmpresa:"amazon", sector:"Comercio electrónico", via:"omic",
     fecha:"2026-09-12", vence:"2026-12-11", estado:"en curso",
     campos:{hechos:"Pedido no entregado y reembolso denegado.", importe:"89,99",
             fechaPrevia:"2026-08-30", respuesta:"Dicen que la entrega consta como realizada."}},
    {id:"c3", empresa:"Consejería de Educación (Comunidad de Madrid)", slugEmpresa:"cm-educacion", sector:"Sector público", via:"alegacion",
     fecha:"2026-10-15", vence:"2026-10-25", estado:"en curso",
     campos:{expediente:"EXPEDIENTE 09/2026-BECAS-0412",
             hechos:"Presenté la solicitud de beca de comedor el 12 de septiembre de 2026 con toda la documentación. La resolución provisional me excluye por no acreditar la renta, cuando ese certificado consta en el expediente.",
             solicitud:"Se tenga por acreditada la renta con el documento aportado y se me incluya en la lista provisional de beneficiarios."}}
  ]);
}

window.addEventListener("hashchange", pintar);
pintar();
