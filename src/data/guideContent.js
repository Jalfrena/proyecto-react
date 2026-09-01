// src/data/guideContent.js
// Contenido completo de cada guía, organizado por nivel.
// Cada guía sigue la misma estructura pedagógica (A-M) para que
// GuideDetail.jsx pueda renderizarla de forma consistente.

export const guideContent = {
  // ============================================================
  // NIVEL 1 — PRIMEROS PASOS EN EL MUNDO BANCARIO
  // ============================================================
  nivel1: {
    titulo: 'Primeros pasos',
    descripcion: 'Pierde el miedo al sistema financiero: qué es un banco, cómo abrir tu primera cuenta y la diferencia entre débito y crédito.',
    guias: [
      // ---------------------------------------------------------
      // GUÍA 1
      // ---------------------------------------------------------
      {
        id: 'que-es-un-banco',
        titulo: '¿Qué es un banco y qué puedo hacer en él?',
        aprenderas: [
          'Entenderás el papel del banco como un "puente" entre personas.',
          'Conocerás quién vigila a los bancos en El Salvador para proteger tu dinero.',
          'Identificarás los beneficios de seguridad y orden al usar una institución financiera.'
        ],
        introduccion: `En El Salvador, muchas personas aún guardan su dinero "bajo el colchón". Aunque parece seguro tener el efectivo a la mano, corres el riesgo de perderlo por robos, incendios o simplemente por gastarlo sin darte cuenta.

Un banco es una institución autorizada para cuidar tu dinero, facilitarte pagos y ayudarte a construir un Historial Crediticio. Es el primer paso para dejar de "sobrevivir" financieramente y empezar a planificar tu futuro.`,
        secciones: [
          {
            titulo: 'Entidades financieras',
            contenido: 'El banco funciona principalmente mediante la Intermediación Financiera. Imagina que es un conector: recibe el dinero de quienes quieren ahorrar y se lo presta a quienes necesitan invertir. En nuestro país no solo existen los bancos grandes: también están los Bancos Cooperativos y las Sociedades de Ahorro y Crédito. Todas ellas sirven para guardar tu dinero, pero tienen reglas y beneficios distintos.',
            ejemplo: 'Puedes tener tu cuenta en un banco con muchas agencias o en una cooperativa local donde te sientas más cercano; ambas opciones están reguladas.'
          },
          {
            titulo: 'Superintendencia del Sistema Financiero (SSF)',
            contenido: 'Es la "policía" del sistema. Se encarga de vigilar que los bancos cumplan la ley y que tu dinero esté siempre disponible cuando lo necesites.',
            ejemplo: 'Si un banco te cobra algo que no aceptaste en tu contrato, la SSF es una de las instituciones donde puedes buscar apoyo.'
          }
        ],
        ejemploCotidiano: {
          titulo: 'María y sus artesanías',
          contenido: 'Imagina a María, una joven de Santa Tecla que vende artesanías en línea. Si recibe solo efectivo, tiene que viajar largas distancias para cobrar. Si usa un banco, puede recibir pagos por transferencia digital al instante y su dinero está guardado bajo llave electrónica. Además, el banco le da un Estado de Cuenta mensual donde ella puede ver exactamente cuánto ganó y cuánto gastó, ayudándole a organizar su negocio.'
        },
        porQueImporta: 'Porque estar en el sistema bancario te da Inclusión Financiera. Esto significa acceso a pagos rápidos, seguridad para tus ahorros y, en el futuro, la posibilidad de pedir préstamos con tasas de interés legales y bajas, en lugar de caer con prestamistas informales que cobran excesivamente.',
        erroresComunes: [
          { titulo: 'Creer que necesitas ser rico para entrar al banco', contenido: 'Hoy en día, gracias a nuevas leyes, puedes abrir cuentas con cero dólares.' },
          { titulo: 'Pensar que el dinero "desaparece" en comisiones', contenido: 'Si aprendes a elegir la cuenta correcta (como las simplificadas), puedes evitar muchos cobros.' },
          { titulo: 'Confundir al banco con el gobierno', contenido: 'Los bancos son empresas, pero el gobierno los regula estrictamente para que no abusen del usuario.' }
        ],
        consejos: [
          { titulo: 'Busca el sello de la SSF', contenido: 'Antes de depositar tu dinero, confirma que la institución esté supervisada por la Superintendencia del Sistema Financiero.' },
          { titulo: 'Valora tu "Energía Vital"', contenido: 'El dinero en el banco representa las horas de vida que invertiste trabajando; cuídalo eligiendo instituciones seguras.' }
        ],
        terminos: [
          { termino: 'Ahorrante', definicion: 'Tú, cuando depositas dinero para guardarlo o ganar un poco de interés.' },
          { termino: 'Intermediación', definicion: 'La acción del banco de mover dinero de quien ahorra hacia quien necesita un préstamo.' },
          { termino: 'SSF', definicion: 'Superintendencia del Sistema Financiero, el ente regulador en El Salvador.' }
        ],
        relacion: 'En nuestra sección de Ranking de Bancos puedes ver cuáles instituciones financieras salvadoreñas tienen mejores calificaciones de servicio al cliente y transparencia.',
        faq: [
          { pregunta: '¿Qué pasa si el banco quiebra?', respuesta: 'Existe el Instituto de Garantía de Depósitos (IGD) que protege tus ahorros hasta un monto determinado por la ley.' },
          { pregunta: '¿El banco puede usar mi dinero?', respuesta: 'Sí, para prestarlo a otros, pero la ley los obliga a tener siempre una reserva para devolvértelo cuando lo pidas.' }
        ],
        miniEvaluacion: [
          {
            pregunta: '¿Cuál es la función principal de un banco?',
            opciones: ['Imprimir billetes nuevos.', 'Servir de puente entre ahorrantes y personas que necesitan préstamos.', 'Regalar dinero a los jóvenes.'],
            correcta: 1,
            explicacion: 'Esto se llama intermediación financiera.'
          },
          {
            pregunta: '¿Quién supervisa que los bancos en El Salvador cumplan la ley?',
            opciones: ['El Ministerio de Hacienda.', 'La Superintendencia del Sistema Financiero (SSF).', 'La Alcaldía Municipal.'],
            correcta: 1,
            explicacion: 'La SSF es el ente regulador encargado de vigilar a las instituciones financieras salvadoreñas.'
          }
        ],
        resumen: [
          'Un banco protege tu dinero y te ayuda a realizar pagos digitales seguros.',
          'En El Salvador, los bancos, cooperativas y sociedades de ahorro están regulados por la SSF.',
          'Tener dinero en el banco te ayuda a crear un historial de responsabilidad financiera.'
        ]
      },

      // ---------------------------------------------------------
      // GUÍA 2
      // ---------------------------------------------------------
      {
        id: 'primera-cuenta',
        titulo: 'Mi primera cuenta: fácil, rápido y solo con mi DUI',
        aprenderas: [
          'Conocerás los requisitos simplificados para abrir una cuenta en El Salvador.',
          'Identificarás los beneficios de las cuentas para jóvenes de 16 a 18 años.',
          'Aprenderás qué preguntar antes de firmar la apertura de tu cuenta.'
        ],
        introduccion: `Antiguamente, abrir una cuenta era un dolor de cabeza: te pedían recibos, cartas de recomendación y un depósito inicial de $25 o $50. Eso ha cambiado.

Ahora, la ley salvadoreña busca que todos, especialmente los jóvenes, tengan acceso al banco de forma sencilla. Ya no hay excusa para no tener un lugar seguro para tu dinero.`,
        secciones: [
          {
            titulo: 'Requisitos básicos',
            contenido: 'En El Salvador existe un beneficio llamado Apertura de Cuenta Simplificada, diseñado para que cualquier salvadoreño entre al sistema financiero sin barreras. Para la mayoría de estas cuentas solo necesitas: tu DUI vigente (o pasaporte si eres salvadoreño en el exterior) y los nombres de tus Beneficiarios. ¡Nada más! No necesitas un monto mínimo de dinero para abrirla.'
          },
          {
            titulo: 'Facilidades para jóvenes (16-18 años)',
            contenido: 'Si aún no tienes 18 años, ¡también puedes tener tu propia cuenta de ahorros! Solo necesitas presentar tu partida de nacimiento o tu carnet de minoridad. Esto es genial para empezar a ahorrar lo que ganes en tus primeros trabajos o proyectos.'
          },
          {
            titulo: 'Contrato de adhesión',
            contenido: 'Al abrir la cuenta, firmarás un documento donde se explican tus derechos y las reglas del banco. Tienes derecho a que te expliquen todo con claridad antes de firmar.'
          }
        ],
        ejemploCotidiano: {
          titulo: 'Kevin y sus tutorías',
          contenido: 'Kevin tiene 17 años y empezó a dar tutorías de matemáticas los sábados. Recibe $10 por cada tutoría. En lugar de gastárselo todo o guardarlo en una gaveta, Kevin fue a un banco cooperativo con su partida de nacimiento y abrió una cuenta simplificada con $0. Ahora, cada vez que le pagan, deposita su dinero y usa la aplicación del banco para ver cómo crece su ahorro para su futura universidad.'
        },
        porQueImporta: 'Porque tener una cuenta a tu nombre es tu "identidad financiera". Sin ella, no puedes recibir salarios de muchas empresas ni optar a beneficios digitales. Además, te enseña a ser el administrador de tus propios recursos desde temprano.',
        erroresComunes: [
          { titulo: 'Esperar a tener mucho dinero', contenido: 'Abre tu cuenta hoy mismo, aunque esté en cero. Lo importante es empezar.' },
          { titulo: 'No declarar beneficiarios', contenido: 'Siempre ten claros los nombres y datos de las personas que heredarían tu cuenta; es un proceso legal necesario.' },
          { titulo: 'Tener miedo de preguntar', contenido: 'Si no entiendes una palabra del contrato, detente y pide una explicación sencilla. Es tu derecho.' }
        ],
        consejos: [
          { titulo: 'Compara antes de ir', contenido: 'Revisa en internet qué bancos ofrecen la mejor aplicación móvil; eso te ahorrará muchos viajes a la agencia.' },
          { titulo: 'Pide tu tarjeta de débito', contenido: 'Al abrir la cuenta, asegúrate de solicitar el plástico para poder retirar dinero en cajeros y pagar en tiendas.' }
        ],
        terminos: [
          { termino: 'DUI', definicion: 'Documento Único de Identidad, tu llave principal en El Salvador.' },
          { termino: 'Beneficiarios', definicion: 'Personas que tú designas para recibir tus fondos en caso de fallecimiento.' },
          { termino: 'Monto mínimo de apertura', definicion: 'La cantidad de dinero que el banco pide para empezar la cuenta (que ahora puede ser $0 en cuentas simplificadas).' }
        ],
        relacion: 'Usa nuestra herramienta de Fichas de Bancos para ver los requisitos específicos y beneficios que cada banco ofrece para las cuentas de jóvenes y simplificadas en El Salvador.',
        faq: [
          { pregunta: '¿Puedo abrir una cuenta digitalmente?', respuesta: 'Sí, muchos bancos en El Salvador permiten la apertura desde su aplicación, especialmente si ya tienes tu DUI a la mano.' },
          { pregunta: '¿Qué pasa si mi DUI está vencido?', respuesta: 'Es probable que el banco te pida renovarlo primero por seguridad.' }
        ],
        miniEvaluacion: [
          {
            pregunta: '¿Qué documento es suficiente para que un mayor de edad abra una cuenta simplificada en El Salvador?',
            opciones: ['Recibo de luz, agua y DUI.', 'Solo el DUI y nombres de beneficiarios.', 'Constancia de sueldo y DUI.'],
            correcta: 1,
            explicacion: 'Las nuevas reformas eliminaron los requisitos excesivos.'
          },
          {
            pregunta: '¿A qué edad mínima puede un joven abrir su propia cuenta de ahorros con requisitos reducidos?',
            opciones: ['12 años.', '16 años.', '21 años.'],
            correcta: 1,
            explicacion: 'Desde los 16 años, con partida de nacimiento o carnet de minoridad, ya puedes tener tu propia cuenta.'
          }
        ],
        resumen: [
          'Abrir una cuenta ahora es un proceso sencillo y sin costo inicial.',
          'Los jóvenes desde los 16 años ya pueden entrar al mundo bancario.',
          'Solo necesitas tu DUI (o partida de nacimiento si eres menor) y tus beneficiarios.'
        ]
      },

      // ---------------------------------------------------------
      // GUÍA 3
      // ---------------------------------------------------------
      {
        id: 'tipos-de-cuentas',
        titulo: 'Cuentas de ahorro, corrientes y más: ¿cuál me conviene?',
        aprenderas: [
          'Diferenciarás entre una cuenta para gastos diarios y una para ahorrar a largo plazo.',
          'Conocerás qué es un depósito a plazo fijo y cuándo usarlo.',
          'Aprenderás a elegir la cuenta que mejor se adapte a tu meta actual.'
        ],
        introduccion: `No todas las cuentas son iguales. Así como no usas una mochila de montaña para ir a una fiesta, no deberías usar una cuenta de ahorros para manejar miles de transacciones al día, ni una cuenta corriente para guardar el dinero de tu jubilación.

Saber elegir el "envase" correcto para tu dinero te ayudará a ganar más intereses y pagar menos comisiones.`,
        secciones: [
          {
            titulo: 'Cuenta de ahorro corriente',
            contenido: 'Es la más común. Sirve para guardar dinero que podrías necesitar en cualquier momento. Te pagan un poco de Interés por tener el dinero ahí.',
            ejemplo: 'Uso ideal: tu fondo de emergencia o el ahorro para algo que comprarás en unos meses.'
          },
          {
            titulo: 'Cuenta corriente (o de cheques)',
            contenido: 'Está diseñada para mover mucho dinero. No suele pagar intereses; al contrario, puede tener costos de mantenimiento. A cambio, te permite usar Cheques y suele tener más facilidades para transferencias empresariales.',
            ejemplo: 'Uso ideal: si tienes un negocio y necesitas pagar a proveedores constantemente.'
          },
          {
            titulo: 'Depósito a plazo fijo',
            contenido: 'Aquí haces un trato con el banco: "te dejo mi dinero por 3, 6 o 12 meses y no lo tocaré". A cambio, el banco te paga una tasa de interés mucho más alta que en una cuenta normal.',
            ejemplo: 'Uso ideal: dinero que sabes que no vas a ocupar pronto y quieres que crezca más rápido.'
          },
          {
            titulo: 'Cuentas simplificadas',
            contenido: 'Son un tipo especial de cuenta de ahorro con límites mensuales de dinero (por seguridad), pero que no te cobran comisiones por manejo si mantienes poco saldo.'
          }
        ],
        ejemploCotidiano: {
          titulo: 'Rodrigo y sus dos "bolsas" digitales',
          contenido: 'Rodrigo tiene su primer trabajo en un call center. Él decidió separar su dinero en dos "bolsas" digitales: en su Cuenta Simplificada recibe su sueldo y de ahí paga el súper y el internet (gasto diario). En un Depósito a Plazo puso $200 que le regalaron en su graduación, a un plazo de 6 meses. Ese dinero ganará más intereses que el de su cuenta diaria porque no lo tocará.'
        },
        porQueImporta: 'Porque si dejas mucho dinero en una cuenta que no paga intereses, estás perdiendo el poder de tu Energía Vital. Por otro lado, si abres una cuenta corriente sin necesitarla, podrías terminar pagando comisiones innecesarias que "extraen" dinero de tu bolsillo.',
        erroresComunes: [
          { titulo: 'Usar la cuenta corriente para ahorrar', contenido: 'Las cuentas corrientes casi nunca pagan intereses. Para ahorrar, usa una de ahorros.' },
          { titulo: 'Sacar el dinero de un plazo fijo antes de tiempo', contenido: 'Si lo haces, el banco te cobrará una penalización o no te pagará los intereses prometidos.' },
          { titulo: 'No revisar la tasa de interés', contenido: 'Aunque sea pequeña, siempre compara qué banco te paga un poquito más por tus ahorros.' }
        ],
        consejos: [
          { titulo: 'Automatiza tu ahorro', contenido: 'Pide al banco que pase automáticamente una pequeña cantidad (aunque sean $5) de tu cuenta de gastos a tu cuenta de ahorros cada vez que te paguen.' },
          { titulo: 'Pregunta por la "Tasa Pasiva"', contenido: 'Es el nombre técnico del interés que el banco te paga a ti por tus ahorros.' }
        ],
        terminos: [
          { termino: 'Tasa pasiva', definicion: 'El porcentaje de ganancia que el banco te da por guardar tu dinero.' },
          { termino: 'Liquidez', definicion: 'Qué tan rápido puedes convertir tu ahorro en efectivo. Una cuenta de ahorros tiene mucha liquidez; un plazo fijo tiene menos liquidez.' },
          { termino: 'Cheque', definicion: 'Un documento que ordena al banco pagar una cantidad de dinero de tu cuenta a otra persona.' }
        ],
        relacion: 'Consulta nuestro Comparador de Tasas para ver qué bancos en El Salvador están pagando mejores intereses por cuentas de ahorro y depósitos a plazo este mes.',
        faq: [
          { pregunta: '¿Me cobran por tener poco dinero en la cuenta?', respuesta: 'En las cuentas corrientes o de ahorros tradicionales puede haber un cobro por "manejo de cuenta" si el saldo cae de cierto límite (ej. menos de $25). Las cuentas simplificadas suelen estar libres de este cobro.' },
          { pregunta: '¿Puedo tener varias cuentas?', respuesta: 'Sí, es recomendable tener una para gastos y otra separada para tus metas de ahorro.' }
        ],
        miniEvaluacion: [
          {
            pregunta: '¿Qué tipo de cuenta es mejor si quiero ganar más intereses y no necesito tocar el dinero por 6 meses?',
            opciones: ['Cuenta corriente.', 'Depósito a plazo fijo.', 'Cuenta simplificada.'],
            correcta: 1,
            explicacion: 'Al comprometerte a no usar el dinero, el banco te premia con una tasa mayor.'
          },
          {
            pregunta: 'Verdadero o falso: las cuentas corrientes están diseñadas principalmente para ahorrar a largo plazo.',
            opciones: ['Verdadero.', 'Falso.'],
            correcta: 1,
            explicacion: 'Son para transacciones frecuentes y pagos mediante cheques o transferencias, no para hacer crecer tus ahorros.'
          }
        ],
        resumen: [
          'La cuenta de ahorro es para tus metas y emergencias.',
          'La cuenta corriente es para mover dinero frecuentemente y usar cheques.',
          'El plazo fijo es para hacer crecer tu dinero a cambio de no tocarlo un tiempo.'
        ]
      },

      // ---------------------------------------------------------
      // GUÍA 4
      // ---------------------------------------------------------
      {
        id: 'tarjeta-debito',
        titulo: 'Tarjeta de débito: tu dinero en un plástico',
        aprenderas: [
          'Comprenderás que el débito es dinero que ya tienes en tu cuenta.',
          'Aprenderás a usar cajeros automáticos y puntos de venta de forma segura.',
          'Conocerás las comisiones comunes que los bancos cobran por usarla en El Salvador.'
        ],
        introduccion: 'La tarjeta de débito es como llevar tu cuenta de ahorros en la billetera, pero sin el riesgo de cargar billetes físicos. Es una de las herramientas más útiles, pero requiere cuidado: si se acaba el dinero en tu cuenta, la tarjeta deja de funcionar. No es dinero extra, es tu dinero.',
        secciones: [
          {
            titulo: 'Uso en cajeros automáticos (ATM)',
            contenido: 'Sirven para retirar efectivo o consultar tu saldo. En El Salvador, los bancos suelen darte algunos retiros gratis al mes en sus propios cajeros, pero pueden cobrarte si usas cajeros de otros bancos.',
            ejemplo: 'Dato real: muchos bancos ofrecen entre 5 y 10 retiros gratis al mes.'
          },
          {
            titulo: 'Uso en comercios',
            contenido: 'Puedes pagar en el súper, gasolineras o farmacias deslizando la tarjeta o acercándola a una maquinita llamada POS (Punto de Venta). Es gratis para ti; el comercio es quien paga una pequeña cuota al banco.'
          },
          {
            titulo: 'Seguridad y el PIN',
            contenido: 'Tu tarjeta tiene un PIN (Número de Identificación Personal) de 4 dígitos. Es tu llave secreta. Nunca lo anotes junto a la tarjeta ni se lo digas a nadie, ni siquiera a los empleados del banco.'
          }
        ],
        ejemploCotidiano: {
          titulo: 'Sofía y las pupusas',
          contenido: 'Sofía fue a comer pupusas con sus amigos. La cuenta fue de $5. En lugar de sacar un billete de $20 y esperar el cambio, usó su tarjeta de débito. Al instante, recibió una notificación en su celular: "Retiro de $5 de su cuenta". Sofía sabe que ahora tiene $5 menos para sus otros gastos, pero se ahorró la molestia de cargar monedas.'
        },
        porQueImporta: 'Porque usar débito te ayuda a mantener un presupuesto real. No puedes gastar lo que no tienes. Además, si pierdes la tarjeta, puedes bloquearla y tu dinero seguirá seguro en el banco; si pierdes efectivo, lo perdiste para siempre.',
        erroresComunes: [
          { titulo: 'Compartir el PIN con "confianza"', contenido: 'El PIN es personal e intransferible. La mayoría de fraudes ocurren porque alguien más conoció tu clave.' },
          { titulo: 'No revisar el saldo antes de pagar', contenido: 'Si intentas pagar algo de $10 y solo tienes $9, la tarjeta será rechazada. Es vergonzoso y te quita control.' },
          { titulo: 'Olvidar la tarjeta en el cajero', contenido: 'Siempre espera a que el cajero te devuelva el plástico antes de guardar el dinero.' }
        ],
        consejos: [
          { titulo: 'Usa cajeros de tu propio banco', contenido: 'Así evitarás pagar comisiones por retiro que pueden andar entre $1.50 y $3.25 más IVA.' },
          { titulo: 'Activa las alertas', contenido: 'Configura el banco para que te envíe un mensaje de texto o notificación cada vez que se use la tarjeta.' },
          { titulo: 'Revisa los cajeros', contenido: 'Antes de meter tu tarjeta, fíjate que no haya piezas flojas o cámaras extrañas apuntando al teclado.' }
        ],
        terminos: [
          { termino: 'PIN', definicion: 'Tu clave secreta de 4 números.' },
          { termino: 'ATM', definicion: 'Cajero automático.' },
          { termino: 'POS', definicion: 'La maquinita en las tiendas donde deslizas o acercas la tarjeta.' },
          { termino: 'Comisión por red externa', definicion: 'Lo que pagas por usar el cajero de un banco que no es el tuyo.' }
        ],
        relacion: 'En nuestra sección de Fichas de Bancos, compara cuántos retiros gratuitos al mes te ofrece cada institución y cuánto cobran por reposición de tarjeta si se te pierde.',
        faq: [
          { pregunta: '¿Qué hago si pierdo mi tarjeta?', respuesta: 'Llama de inmediato al número de emergencia del banco (suele estar disponible 24/7) para bloquearla.' },
          { pregunta: '¿Puedo comprar en internet con débito?', respuesta: 'Sí, la mayoría de tarjetas de débito en El Salvador (Visa o Mastercard) sirven para compras en línea.' }
        ],
        miniEvaluacion: [
          {
            pregunta: 'Al pagar con tarjeta de débito, el dinero proviene de:',
            opciones: ['Un préstamo que el banco me hace.', 'Mis propios ahorros guardados en la cuenta.', 'Un regalo del comercio.'],
            correcta: 1,
            explicacion: 'El débito utiliza tus fondos existentes.'
          },
          {
            pregunta: '¿Cuál es la forma más segura de manejar tu PIN?',
            opciones: ['Escribirlo atrás de la tarjeta para que no se olvide.', 'Memorizarlo y no compartirlo con nadie.', 'Decírselo al cajero del súper para que él lo digite.'],
            correcta: 1,
            explicacion: 'El PIN es la seguridad de tu dinero.'
          }
        ],
        resumen: [
          'La tarjeta de débito usa tu propio dinero de forma inmediata.',
          'Es más segura que el efectivo porque puedes bloquearla si se pierde.',
          'Cuida tu PIN y prefiere los cajeros de tu propio banco para ahorrar comisiones.'
        ]
      },

      // ---------------------------------------------------------
      // GUÍA 5
      // ---------------------------------------------------------
      {
        id: 'tarjeta-credito',
        titulo: 'Tarjeta de crédito: dinero prestado que debes cuidar',
        aprenderas: [
          'Entenderás que la tarjeta de crédito es un préstamo inmediato, no dinero extra.',
          'Conocerás tus derechos básicos en El Salvador, como la no membresía en tarjetas pequeñas.',
          'Aprenderás la importancia de pagar el total cada mes para no regalar dinero en intereses.'
        ],
        introduccion: `La tarjeta de crédito es una de las herramientas más poderosas y, a la vez, más peligrosas. Imagina que el banco te dice: "ten este plástico, puedes gastar hasta $500 de mi dinero, pero me los tienes que devolver en un mes".

Si los devuelves a tiempo, todo bien. Si no, el banco te cobrará intereses muy altos por cada día que pase. Es una excelente herramienta para emergencias y para construir tu historial, pero requiere mucha disciplina.`,
        secciones: [
          {
            titulo: 'Límite de crédito',
            contenido: 'Es el monto máximo que el banco te permite gastar. Si tu límite es $300, no puedes comprar algo de $350.'
          },
          {
            titulo: 'Pago mínimo vs. pago de contado',
            contenido: 'Pago mínimo es la cantidad pequeña que el banco te pide para no reportarte como "mal pagador"; ¡cuidado! si solo pagas el mínimo, la deuda crecerá cada mes por los intereses. Pago de contado (o total) es pagar todo lo que gastaste en el mes. Si lo haces antes de tu fecha límite, no pagas intereses. ¡Este es el secreto de los ricos!'
          },
          {
            titulo: 'Membresía en El Salvador',
            contenido: 'Por ley, en El Salvador, los bancos no pueden cobrar membresía por tarjetas de crédito con un límite menor o igual a $2,000. Si el banco intenta cobrártela en una tarjeta pequeña, están incumpliendo tus derechos.'
          }
        ],
        ejemploCotidiano: {
          titulo: 'Juan y la llanta de su moto',
          contenido: 'A Juan se le arruinó la llanta de su moto y no tenía efectivo en ese momento. Usó su tarjeta de crédito para pagar los $40 de la llanta nueva. Opción A (responsable): al recibir su sueldo, Juan pagó los $40 completos al banco y no pagó ni un centavo de interés. Opción B (costosa): Juan decidió pagar solo el mínimo de $5; el siguiente mes debe los $35 que faltaban más unos dólares extra de interés. La llanta le terminó saliendo más cara.'
        },
        porQueImporta: 'Porque la tarjeta de crédito es la base de tu Récord Crediticio. Si la usas bien, el banco verá que eres responsable y en el futuro te prestará dinero para metas grandes como una casa o un carro. Si la usas mal, te cierras las puertas del sistema financiero por muchos años.',
        erroresComunes: [
          { titulo: 'Verla como un aumento de sueldo', contenido: 'Si ganas $400 y tu tarjeta es de $300, no tienes $700. Sigues teniendo $400 y una deuda potencial de $300.' },
          { titulo: 'Pagar solo el mínimo', contenido: 'Es la forma más lenta y cara de salir de una deuda. Siempre intenta pagar el total.' },
          { titulo: 'Retirar efectivo de la tarjeta de crédito', contenido: 'Los bancos cobran comisiones e intereses altísimos por sacar dinero en efectivo de una tarjeta de crédito. Evítalo a toda costa.' }
        ],
        consejos: [
          { titulo: 'Conoce tu fecha de corte', contenido: 'Es el día en que el banco "cierra la cuenta" del mes y suma tus gastos.' },
          { titulo: 'Paga antes de la fecha límite', contenido: 'No esperes al último día. Un olvido puede significar recargos por mora de hasta $15 o más.' },
          { titulo: 'Úsala solo para lo que ya puedes pagar', contenido: 'Si no tienes el dinero en tu cuenta de ahorros para cubrir la compra, piénsalo dos veces antes de usar el crédito.' }
        ],
        terminos: [
          { termino: 'Límite de crédito', definicion: 'El dinero máximo que el banco te presta.' },
          { termino: 'Interés moratorio', definicion: 'El castigo en dinero que pagas si te atrasas en tu fecha de pago.' },
          { termino: 'Anatocismo', definicion: 'Cobrar intereses sobre intereses ya acumulados. ¡Es ilegal en El Salvador!' }
        ],
        relacion: 'Usa nuestra Calculadora de Intereses para ver cuánto terminarías pagando si solo haces el pago mínimo en tu tarjeta. Te sorprenderás de cuánto dinero puedes ahorrar siendo un "pagador de contado".',
        faq: [
          { pregunta: '¿Me pueden subir el límite sin permiso?', respuesta: 'No. En El Salvador, el monto del crédito no puede aumentarse sin tu autorización por escrito.' },
          { pregunta: '¿Qué es el seguro de robo o fraude?', respuesta: 'Es un pequeño pago mensual que te protege si alguien clona tu tarjeta. Revisa si tu tarjeta lo incluye y cuánto cuesta.' }
        ],
        miniEvaluacion: [
          {
            pregunta: 'En El Salvador, ¿qué tarjetas de crédito NO deben cobrar membresía por ley?',
            opciones: ['Solo las que se usan en el extranjero.', 'Las que tienen un límite de crédito menor o igual a $2,000.', 'Todas las tarjetas deben pagar membresía.'],
            correcta: 1,
            explicacion: 'Es un derecho del consumidor financiero salvadoreño.'
          },
          {
            pregunta: '¿Qué sucede si siempre pagas el "Pago de Contado" antes de tu fecha límite?',
            opciones: ['El banco te quita la tarjeta.', 'No pagas intereses por tus compras del mes.', 'El interés se duplica.'],
            correcta: 1,
            explicacion: 'Estás usando el dinero del banco gratis.'
          }
        ],
        resumen: [
          'La tarjeta de crédito es una deuda que debes devolver cada mes.',
          'Pagar el total (contado) te permite usar el crédito sin pagar intereses.',
          'En tarjetas menores de $2,000, la membresía es gratis por ley en nuestro país.'
        ]
      }
    ],

    // Evaluación integradora que cierra el nivel (se muestra al final
    // de la última guía del nivel).
    evaluacionFinal: {
      titulo: 'Mini evaluación del Nivel 1',
      preguntas: [
        {
          pregunta: 'Lucía quiere ahorrar para comprarse un teléfono nuevo en 8 meses. Ella no necesita tocar ese dinero hasta entonces. ¿Qué producto le conviene más para ganar más intereses?',
          opciones: ['Cuenta corriente.', 'Depósito a plazo fijo de 180 días.', 'Tarjeta de crédito.'],
          correcta: 1,
          explicacion: 'El plazo fijo ofrece mejores tasas por no tocar el dinero.'
        },
        {
          pregunta: 'Si abres una cuenta simplificada en un banco salvadoreño con $0 y solo tu DUI, ¿es esto legal?',
          opciones: ['No, siempre hay que dar al menos $25.', 'Sí, es un beneficio de la Ley para Facilitar la Inclusión Financiera.', 'Solo si tienes una carta del alcalde.'],
          correcta: 1,
          explicacion: 'Las reformas de 2022 permiten la apertura simplificada con $0.'
        },
        {
          pregunta: '¿Cuál es la diferencia principal entre débito y crédito?',
          opciones: ['En el débito el banco me presta; en el crédito uso mis ahorros.', 'En el débito uso mis ahorros; en el crédito el banco me presta dinero que debo devolver.', 'No hay diferencia, las dos son de plástico.'],
          correcta: 1,
          explicacion: 'El débito es dinero propio; el crédito es deuda.'
        }
      ]
    },

    fuentes: [
      { tipo: 'OFICIAL', texto: 'Superintendencia del Sistema Financiero (SSF). "Derechos de los usuarios financieros". Art. 19 Ley de Protección al Consumidor.' },
      { tipo: 'OFICIAL', texto: 'Asamblea Legislativa de El Salvador. "Reforma al Art. 20 de la Ley para Facilitar la Inclusión Financiera" (Noviembre 2022).' },
      { tipo: 'OFICIAL', texto: 'SSF. Publicación comparativa de comisiones y tasas de tarjetas de débito y crédito (Mayo 2026).' },
      { tipo: 'OFICIAL', texto: 'Banco Central de Reserva (BCR). "Tasa de interés de depósitos a 180 días".' },
      { tipo: 'LIBRO', texto: 'Robert Kiyosaki. "Padre Rico, Padre Pobre para Jóvenes". Capítulos sobre activos, pasivos y el lenguaje del dinero.' },
      { tipo: 'LIBRO', texto: 'Ramit Sethi. "I Will Teach You to Be Rich". Capítulos sobre optimización de cuentas bancarias y ahorro.' },
      { tipo: 'LIBRO', texto: 'Eric Tyson. "Personal Finance for Dummies". Diferencias entre cuentas de ahorro y corrientes.' },
      { tipo: 'LIBRO', texto: 'Vicki Robin. "La Bolsa o la Vida". Concepto de Energía Vital aplicado al gasto.' }
    ],

    siguientesPasos: [
      { texto: 'Ve a la sección de Ranking de Bancos para ver qué instituciones en El Salvador son las más recomendadas para tu primera cuenta simplificada.', enlace: '/rankings' },
      { texto: 'Usa la Calculadora de Intereses para ver cuánto ganarías en tu primer Depósito a Plazo.', enlace: '/calculadora' }
    ]
  },




  nivel2: {
    titulo: 'Comprender los préstamos',
    descripcion: 'Diseca un crédito: sus piezas, la diferencia entre tasa nominal y tasa efectiva, y tus derechos legales antes de firmar.',
    guias: [
      // ---------------------------------------------------------
      // GUÍA 1
      // ---------------------------------------------------------
      {
        id: 'esqueleto-del-prestamo',
        titulo: '¿Qué piezas componen un préstamo y cómo funcionan?',
        aprenderas: [
          'Identificarás los cuatro elementos básicos de cualquier crédito.',
          'Entenderás que pedir prestado es "comprar" dinero de tu futuro.',
          'Aprenderás cómo cada pieza afecta el tamaño de tu cuota mensual.'
        ],
        introduccion: `Un préstamo parece algo sencillo: el banco te da dinero y tú lo devuelves poco a poco. Sin embargo, para no llevarte sorpresas, debes entender que un préstamo es un producto con diferentes "piezas" que puedes ajustar.

Como bien dicen los expertos, cuando pides prestado no estás recibiendo "dinero extra", sino que estás tomando dinero de tu "yo del futuro" para gastarlo hoy. Entender estas piezas te permitirá decidir si ese intercambio de energía vital vale realmente la pena.`,
        secciones: [
          {
            titulo: 'Capital (o Principal)',
            contenido: 'Es la cantidad de dinero que el banco te entrega originalmente.',
            ejemplo: 'Si pides $1,000 para comprar una computadora, el capital es $1,000.'
          },
          {
            titulo: 'Interés',
            contenido: 'Es el "alquiler" o ganancia que el banco te cobra por usar su dinero. Se expresa como un porcentaje.'
          },
          {
            titulo: 'Plazo',
            contenido: 'Es el tiempo total que tienes para devolver el dinero (meses o años).'
          },
          {
            titulo: 'Cuota',
            contenido: 'Es el pago fijo que haces cada mes. Esta cuota incluye una parte para devolver el capital y otra parte para pagar los intereses y seguros.'
          }
        ],
        ejemploCotidiano: {
          titulo: 'Un préstamo de $1,200 para un curso de inglés',
          contenido: 'Imagina que pides un préstamo de $1,200 (Capital) para pagar un curso de inglés, y el banco te da 12 meses (Plazo) para pagarlo. Tu cuota no será de $100 exactos, sino que será de, supongamos, $115. Esos $15 extra de cada mes son el costo de los intereses y seguros por el beneficio de tener el dinero hoy y no dentro de un año.'
        },
        porQueImporta: 'Porque si cambias una pieza, las demás se mueven. Por ejemplo, si pides el dinero a un plazo más largo (digamos 24 meses en lugar de 12), tu cuota mensual será más baja y "fácil" de pagar, pero al final del tiempo habrás pagado mucho más dinero en intereses totales al banco.',
        erroresComunes: [
          { titulo: 'Fijarse solo en la cuota', contenido: 'Una cuota pequeña puede esconder un plazo eterno donde terminas pagando el doble o triple de lo que te prestaron.' },
          { titulo: 'No preguntar por los seguros', contenido: 'En El Salvador, los préstamos suelen incluir un seguro de deuda. Debes saber cuánto te cuesta eso cada mes.' }
        ],
        consejos: [
          { titulo: 'Pide una tabla de amortización', contenido: 'Es un documento que el banco debe darte donde ves mes a mes cuánto de tu cuota se va a capital y cuánto a intereses.' },
          { titulo: 'Elige el plazo más corto que puedas pagar', contenido: 'Entre más rápido devuelvas el dinero, menos intereses le regalarás al banco.' }
        ],
        terminos: [
          { termino: 'Capital', definicion: 'El monto original que te prestan.' },
          { termino: 'Cuota', definicion: 'El pago mensual que incluye capital, intereses y otros cargos.' },
          { termino: 'Plazo', definicion: 'El tiempo acordado para terminar de pagar.' }
        ],
        relacion: 'Usa nuestra Calculadora de Préstamos para mover el "Plazo" y ver cómo cambia el total de intereses que pagarías al final.',
        miniEvaluacion: [
          {
            pregunta: 'Si pides $500 y al final de un año terminas pagando $600 en total, ¿cuál fue el capital?',
            opciones: ['$500.', '$600.', '$100.'],
            correcta: 0,
            explicacion: 'El capital es el monto original recibido; los $100 extra son el costo de los intereses.'
          },
          {
            pregunta: '¿Qué sucede usualmente si aumentas el "Plazo" de un préstamo?',
            opciones: ['La cuota mensual sube.', 'La cuota mensual baja, pero el costo total de intereses aumenta.'],
            correcta: 1,
            explicacion: 'Un plazo más largo reduce la cuota mensual, pero el total de intereses pagados al final es mayor.'
          }
        ]
      },

      // ---------------------------------------------------------
      // GUÍA 2
      // ---------------------------------------------------------
      {
        id: 'tasa-nominal-vs-efectiva',
        titulo: '¿Cuánto te cuesta realmente el préstamo?',
        aprenderas: [
          'A diferenciar entre la tasa que te anuncian y la que realmente pagas.',
          'A utilizar la Tasa de Interés Efectiva Anual como tu mejor herramienta de comparación.'
        ],
        introduccion: 'En El Salvador, es común ver anuncios que dicen: "¡Tasa de interés desde el 10%!". Pero cuando vas a pagar, sientes que el dinero no rinde. Esto sucede porque la tasa que te anuncian (Nominal) es solo una parte de la historia. La Tasa Efectiva es la que dice la verdad, porque incluye todo lo que sale de tu bolsillo.',
        secciones: [
          {
            titulo: 'Tasa de interés nominal',
            contenido: 'Es el porcentaje "bruto" que el banco cobra sobre el capital. Es la que usan en la publicidad porque se ve más pequeña.'
          },
          {
            titulo: 'Tasa de interés efectiva (o anual)',
            contenido: 'Es el costo real y total de tu préstamo. Esta tasa incluye la tasa nominal, las comisiones por trámite o desembolso, los cargos por seguros obligatorios y cualquier otro recargo mensual pactado.',
            ejemplo: 'En El Salvador, los bancos están obligados por la Ley de Bancos (Art. 66) a informarte la tasa de interés efectiva de tus créditos.'
          }
        ],
        ejemploCotidiano: {
          titulo: 'Banco A vs. Banco B: un emprendimiento de pupusas',
          contenido: 'Supongamos que vas a dos bancos diferentes por un préstamo para un emprendimiento de pupusas. El Banco A te ofrece una tasa nominal del 12%. El Banco B te ofrece una tasa nominal del 14%. A simple vista, el Banco A parece mejor. Pero al revisar las "letras pequeñas", el Banco A te cobra una comisión de desembolso alta y un seguro caro, resultando en una Tasa Efectiva del 18%. El Banco B no cobra comisiones, y su Tasa Efectiva queda en 15%. ¡El Banco B es el más barato en realidad!'
        },
        porQueImporta: 'Porque comparar préstamos usando solo la tasa nominal es como comparar dos camisas solo por el color sin ver el precio total en la caja. La Tasa Efectiva es el estándar de oro para comparar y ahorrar dinero.',
        erroresComunes: [
          { titulo: 'Ignorar las comisiones', contenido: 'Algunos bancos cobran por "estructuración" o "manejo" del crédito. Eso sube tu tasa efectiva.' }
        ],
        consejos: [
          { titulo: 'Pregunta siempre', contenido: '"¿Cuál es la Tasa de Interés Efectiva Anual de este crédito?"' },
          { titulo: 'Revisa los periódicos', contenido: 'Por ley, los bancos salvadoreños publican mensualmente sus tasas y comisiones en diarios de circulación nacional.' }
        ],
        terminos: [
          { termino: 'Tasa nominal', definicion: 'Tasa base de interés sin cargos extra.' },
          { termino: 'Tasa efectiva', definicion: 'El costo total real del crédito expresado en porcentaje.' },
          { termino: 'Comisión de desembolso', definicion: 'Un cobro único que hace el banco al entregarte el dinero.' }
        ],
        relacion: 'En nuestra sección de Ranking de Tasas, actualizamos mensualmente la información de la SSF para que veas qué banco tiene la tasa efectiva más baja en El Salvador actualmente.',
        miniEvaluacion: [
          {
            pregunta: '¿Cuál tasa incluye comisiones y seguros en El Salvador?',
            opciones: ['La Tasa Nominal.', 'La Tasa Efectiva.', 'La Tasa Pasiva.'],
            correcta: 1,
            explicacion: 'La Tasa Efectiva agrega comisiones, seguros y otros cargos al costo real del crédito.'
          },
          {
            pregunta: 'Verdadero o falso: un préstamo con tasa nominal del 10% siempre es más barato que uno del 12%.',
            opciones: ['Verdadero.', 'Falso.'],
            correcta: 1,
            explicacion: 'Depende de las comisiones y seguros; hay que comparar la tasa efectiva, no solo la nominal.'
          }
        ]
      },

      // ---------------------------------------------------------
      // GUÍA 3
      // ---------------------------------------------------------
      {
        id: 'tus-derechos-al-pedir-prestado',
        titulo: 'Tus escudos legales: lo que el banco NO puede hacer en El Salvador',
        aprenderas: [
          'Conocerás tus derechos establecidos en la Ley de Protección al Consumidor.',
          'Aprenderás qué es el anatocismo y por qué es ilegal.',
          'Sabrás cómo defenderte de cobros abusivos o usura.'
        ],
        introduccion: 'Cuando firmas un contrato con un banco, no solo adquieres obligaciones, también activas tus derechos. En El Salvador, instituciones como la Superintendencia del Sistema Financiero (SSF) y la Defensoría del Consumidor vigilan que las reglas del juego sean justas para ti.',
        secciones: [
          {
            titulo: 'Derecho al pago anticipado',
            contenido: 'Puedes pagar tu préstamo antes de tiempo sin que te cobren una penalización (salvo casos muy específicos con fondos externos). Si tienes un dinero extra, abonarlo a tu deuda te ahorra muchos intereses.'
          },
          {
            titulo: 'Prohibición de intereses sobre intereses (anatocismo)',
            contenido: 'Es ilegal que te cobren intereses sobre intereses ya devengados y no pagados. El interés solo se calcula sobre el capital que debes.'
          },
          {
            titulo: 'Derecho a información clara',
            contenido: 'El banco debe darte toda la información para comparar y no puede cambiar las condiciones del contrato sin avisarte y que tú aceptes.'
          },
          {
            titulo: 'Límites a la usura',
            contenido: 'Existe una Ley Contra la Usura que pone un "techo" máximo a lo que cualquier prestamista (banco o persona natural) puede cobrarte.'
          }
        ],
        ejemploCotidiano: {
          titulo: 'Roberto y sus $200 extra',
          contenido: 'Imagina que Roberto hizo un gran esfuerzo y logró ahorrar $200 extras. Él va al banco y pide que ese dinero se aplique directamente al capital de su préstamo de auto. El banco no puede cobrarle una multa por querer salir de su deuda más rápido. Al hacer esto, Roberto reduce el saldo sobre el cual se calculan los intereses del próximo mes.'
        },
        porQueImporta: 'Porque conocer estos derechos te da el poder de reclamar si un banco comete un error o intenta un cobro injustificado. También te ayuda a evitar a los "usureros" informales que operan fuera de la ley.',
        erroresComunes: [
          { titulo: 'Quedarse callado por miedo', contenido: 'Si el banco te trata mal o te cobra algo raro, tienes derecho a reclamar en su oficina de atención al cliente y, si no te resuelven, acudir a la SSF o Defensoría.' }
        ],
        consejos: [
          { titulo: 'Lee antes de firmar', contenido: 'El contrato debe decir exactamente qué comisiones y recargos aceptaste. Si no está en el contrato, no pueden cobrártelo.' },
          { titulo: 'Guarda tus comprobantes', contenido: 'Cada vez que pagues, guarda el recibo. Es tu prueba legal.' }
        ],
        terminos: [
          { termino: 'Anatocismo', definicion: 'El cobro ilegal de intereses sobre intereses.' },
          { termino: 'Pago a capital', definicion: 'Dinero que entregas para reducir directamente la deuda original, lo cual baja los intereses futuros.' },
          { termino: 'Usura', definicion: 'Cobrar intereses por encima de los límites legales permitidos.' }
        ],
        relacion: 'Si sientes que tus derechos están siendo vulnerados, en nuestra sección de Asistente IA puedes preguntar los pasos específicos para poner una denuncia formal en El Salvador.',
        miniEvaluacion: [
          {
            pregunta: '¿Es legal en El Salvador que un banco te cobre una multa por pagar tu préstamo antes de tiempo?',
            opciones: ['Sí, siempre pueden cobrarla.', 'No, tienes derecho a pagos anticipados sin cargo.', 'Solo si el préstamo es mayor a $5,000.'],
            correcta: 1,
            explicacion: 'Tienes derecho a efectuar pagos anticipados sin cargo alguno (salvo excepciones muy específicas con fondos externos).'
          },
          {
            pregunta: '¿Cómo se llama la práctica de cobrar intereses sobre intereses acumulados?',
            opciones: ['Usura.', 'Anatocismo.', 'Amortización.'],
            correcta: 1,
            explicacion: 'El anatocismo es ilegal en El Salvador.'
          }
        ]
      }
    ],

    evaluacionFinal: {
      titulo: 'Mini evaluación del Nivel 2',
      preguntas: [
        {
          pregunta: 'Estás comparando dos créditos. Uno dice que tiene tasa del 10% y el otro del 12%. ¿En qué dato oficial deberías fijarte para saber cuál es realmente el más barato?',
          opciones: ['En la tasa nominal anunciada.', 'En la Tasa de Interés Efectiva Anual.', 'En el nombre del banco.'],
          correcta: 1,
          explicacion: 'La Tasa Efectiva Anual incluye comisiones y seguros, mostrando el costo real del crédito.'
        },
        {
          pregunta: 'Si recibes un bono de fin de año y quieres usarlo para pagar parte de tu préstamo, ¿qué beneficio obtienes?',
          opciones: ['El banco te da un premio.', 'Al bajar el capital, pagarás menos intereses en los meses siguientes.', 'Ninguno, el total a pagar nunca cambia.'],
          correcta: 1,
          explicacion: 'El interés se calcula sobre el saldo de capital restante.'
        },
        {
          pregunta: '¿Cuál de estas instituciones supervisa que no te cobren intereses sobre intereses en El Salvador?',
          opciones: ['La Alcaldía.', 'La Superintendencia del Sistema Financiero (SSF).', 'El Ministerio de Turismo.'],
          correcta: 1,
          explicacion: 'La SSF vigila el cumplimiento de la Ley de Bancos y la Ley de Protección al Consumidor.'
        }
      ]
    },

    fuentes: [
      { tipo: 'OFICIAL', texto: 'Superintendencia del Sistema Financiero (SSF). "Derechos de los usuarios financieros". Basado en Ley de Bancos (Arts. 64, 66) y Ley de Protección al Consumidor (Art. 19).' },
      { tipo: 'OFICIAL', texto: 'Asamblea Legislativa de El Salvador. "Reformas a la Ley Contra la Usura" (Julio 2022).' },
      { tipo: 'OFICIAL', texto: 'SSF. Tarifarios mensuales comparativos de tasas activas y comisiones (Mayo 2026).' },
      { tipo: 'LIBRO', texto: 'Tiffany Aliche. "Get Good with Money". Definición de interés y APR (Tasa Efectiva).' },
      { tipo: 'LIBRO', texto: 'Eric Tyson. "Personal Finance for Dummies". Componentes de préstamos y costo total de la deuda.' },
      { tipo: 'LIBRO', texto: 'Robert Kiyosaki. "Padre Rico, Padre Pobre para Jóvenes". Concepto de deuda buena y mala y manejo de estados financieros.' },
      { tipo: 'LIBRO', texto: 'Vicki Robin. "La Bolsa o la Vida". Relación entre deuda y pérdida de libertad (energía vital).' }
    ]
  },


  // ============================================================
// NIVEL 3 — ORGANIZAR MIS FINANZAS
// ============================================================
  nivel3: {
titulo: 'Organizar mis finanzas',
  descripcion: 'Aprende a administrar tu dinero: presupuesto, ahorro, interés compuesto y capacidad de endeudamiento para tomar el control de tu vida financiera.',
  guias: [
    // ---------------------------------------------------------
    // GUÍA 1
    // ---------------------------------------------------------
    {
      id: 'ingresos-y-gastos',
      titulo: 'Ingresos y Gastos: ¿A dónde se va el dinero?',
      aprenderas: [
        'Diferenciarás entre lo que ganas "en papel" y lo que realmente llega a tu bolsillo.',
        'Aprenderás a clasificar tus gastos para identificar fugas de dinero.',
        'Entenderás que cada dólar gastado representa tiempo de tu vida.'
      ],
      introduccion: `La mayoría de las personas se preguntan al final de la quincena: "¿En qué se me fue el dinero?". Para tomar el control, primero debes observar la realidad sin excusas. Organizar tus finanzas no se trata de restringirte, sino de ser consciente de cómo intercambias tu Energía Vital (tu tiempo y esfuerzo) por las cosas que compras.`,
      secciones: [
        {
          titulo: 'Ingreso Neto (o "Líquido")',
          contenido: 'Es el dinero real que recibes después de que te descuentan ley (ISSS y AFP en El Salvador).',
          ejemplo: 'Si tu contrato dice $400 (Ingreso Bruto), pero a tu cuenta llegan $360, tu Ingreso Neto es $360. Ese es el número que importa para tu presupuesto.'
        },
        {
          titulo: 'Gastos Fijos',
          contenido: 'Son pagos que no puedes evitar y que suelen ser la misma cantidad cada mes.',
          ejemplo: 'El pago del alquiler, el internet de tu casa o la cuota de un préstamo.'
        },
        {
          titulo: 'Gastos Variables',
          contenido: 'Son pagos que cambian según tu consumo o hábitos.',
          ejemplo: 'Lo que gastas en salidas con amigos, el súper o el recibo de luz (que sube si usas más el aire acondicionado o ventilador).'
        },
        {
          titulo: 'Gastos Hormiga (o "Alfileres Gazingus")',
          contenido: 'Son compras pequeñas e inconscientes que parecen inofensivas pero que, sumadas, "vacían" tu billetera.',
          ejemplo: 'El café de $3.00 todos los días o el snack de la tienda cada tarde.'
        }
      ],
      ejemploCotidiano: {
        titulo: 'Carlos y su sueldo en el centro comercial',
        contenido: 'Carlos trabaja en San Salvador y gana $365 netos. Sus gastos fijos son $100 para su mamá y $25 de celular. En transporte y comida gasta $150. Además, compra un refresco y pan dulce de $1.50 cada día de trabajo (22 días), lo que suma $33 al mes. Sin darse cuenta, esos gastos hormiga representan casi el 10% de su sueldo. Si los anota, ve que le sobran $57 para ahorrar o emergencias.'
      },
      porQueImporta: 'Porque si no sabes cuánto entra y cuánto sale, nunca tendrás "suficiente". El seguimiento meticuloso elimina el miedo a que se acabe el dinero antes del próximo pago.',
      erroresComunes: [
        { titulo: 'Presupuestar con el sueldo bruto', contenido: 'Si cuentas con dinero que se va para el ISSS o AFP, te faltará dinero al final del mes.' },
        { titulo: 'Ignorar los gastos pequeños', contenido: 'Los gastos de $1.00 o $2.00 son los que más rápido desequilibran un presupuesto.' },
        { titulo: 'No llevar un registro diario', contenido: 'Confiar en la memoria es el error más grande; los centavos se olvidan rápido.' }
      ],
      consejos: [
        { titulo: 'Guarda tus recibos', contenido: 'Pide ticket hasta por un chicle. Eso te obliga a pensar en la compra.' },
        { titulo: 'Usa un cuaderno pequeño o una app', contenido: 'Anota cada gasto al momento de hacerlo, no al final del día.' }
      ],
      terminos: [
        { termino: 'Ingreso Neto', definicion: 'Dinero que queda libre tras descuentos legales (ISSS y AFP).' },
        { termino: 'Energía Vital', definicion: 'El tiempo de tu vida que intercambias por dinero.' },
        { termino: 'Flujo de Efectivo', definicion: 'La dirección en la que se mueve tu dinero (hacia tu bolsillo o fuera de él).' }
      ],
      relacion: 'Usa nuestra herramienta "¿A dónde se va mi dinero?" para ingresar tus gastos diarios y ver gráficamente qué porcentaje de tu sueldo se va en necesidades versus deseos.',
      faq: [
        { pregunta: '¿Qué hago si mi ingreso es variable?', respuesta: 'Promedia tus últimos 3 meses y toma ese promedio como base; en los meses buenos ahorra el excedente.' },
        { pregunta: '¿Cómo identifico mis gastos hormiga?', respuesta: 'Revisa tus estados de cuenta de los últimos 30 días y agrupa todas las compras de menos de $3.00.' }
      ],
      miniEvaluacion: [
        {
          pregunta: '¿Cuál es el ingreso que debes usar para planear tus gastos mensuales?',
          opciones: ['El ingreso bruto (el del contrato).', 'El ingreso neto (lo que recibes tras descuentos).', 'El ingreso bruto más las comisiones.'],
          correcta: 1,
          explicacion: 'El ingreso neto es el dinero real que tienes disponible para gastar.'
        },
        {
          pregunta: 'Si pagas $20 todos los meses por el gimnasio, ¿qué tipo de gasto es?',
          opciones: ['Gasto variable.', 'Gasto fijo.', 'Gasto hormiga.'],
          correcta: 1,
          explicacion: 'Es un pago recurrente y de monto fijo.'
        },
        {
          pregunta: 'Verdadero o Falso: Los gastos pequeños de $1.00 no afectan el presupuesto a largo plazo.',
          opciones: ['Verdadero.', 'Falso.'],
          correcta: 1,
          explicacion: 'Sumados, pueden representar una parte importante del ingreso mensual.'
        }
      ],
      resumen: [
        'El ingreso neto es el dinero que realmente llega a tu cuenta.',
        'Clasifica tus gastos en fijos, variables y hormiga.',
        'Llevar un registro diario te da control sobre tu dinero.'
      ]
    },

    // ---------------------------------------------------------
    // GUÍA 2
    // ---------------------------------------------------------
    {
      id: 'ahorro-y-fondo-emergencia',
      titulo: 'Ahorro y Fondo de Emergencia: Tu colchón de tranquilidad',
      aprenderas: [
        'Entenderás la diferencia entre ahorrar para gastar luego y ahorrar para tener seguridad.',
        'Aprenderás cuánto dinero necesitas realmente en tu Fondo de Emergencia.',
        'Conocerás la regla de "Págate a ti mismo primero".'
      ],
      introduccion: `En El Salvador, es común que una enfermedad o un problema con el carro nos obligue a pedir prestado con intereses altos. Ahorrar no es "lo que sobra" al final del mes; es una decisión que tomas al principio. Tener ahorros es ser libre. Significa que, si tienes un problema en el trabajo o una emergencia, tienes tiempo para decidir sin desesperación.`,
      secciones: [
        {
          titulo: 'Fondo de Emergencia (o "Colchón")',
          contenido: 'Es una reserva de dinero guardada en el banco (de preferencia en una cuenta de ahorros que te dé un poquito de interés) que solo se usa para cosas urgentes y no planeadas.',
          ejemplo: 'Lo ideal es tener ahorrado el equivalente a entre 3 y 6 meses de tus gastos básicos. Si tus gastos básicos son $200 al mes, tu fondo debería ser de al menos $600.'
        },
        {
          titulo: 'Págate a ti mismo primero',
          contenido: 'Este es un secreto de los expertos: en lugar de esperar al final del mes para ver si sobra algo, separa una cantidad (aunque sean $5 o $10) en cuanto recibas tu pago.'
        },
        {
          titulo: 'Metas Financieras',
          contenido: 'Ahorrar es más fácil si tiene nombre. Puedes ahorrar para corto plazo (celular), mediano plazo (curso o enganche de moto) o largo plazo (jubilación o casa).'
        }
      ],
      ejemploCotidiano: {
        titulo: 'Lucía y su celular roto',
        contenido: 'Lucía decidió crear su Fondo de Emergencia ahorrando $20 de cada quincena. En un año, tenía $480. Cuando se le arruinó el celular que usa para trabajar, no tuvo que pedir un préstamo a un usurero ni usar su tarjeta de crédito al 40% de interés. Usó su "colchón", compró el celular de contado y luego empezó a llenar el fondo de nuevo. Durmió tranquila esa noche.'
      },
      porQueImporta: 'Porque el ahorro te impide tomar malas decisiones por desesperación. Te da poder de negociación y paz mental.',
      erroresComunes: [
        { titulo: 'Usar el fondo de emergencia para "ofertas"', contenido: 'Una rebaja en ropa NO es una emergencia.' },
        { titulo: 'Tener el ahorro "bajo el colchón"', contenido: 'En el banco está más seguro contra robos y no te da la tentación de gastarlo en el momento.' },
        { titulo: 'Esperar a tener un gran sueldo para empezar', contenido: 'El hábito de ahorrar se construye con centavos.' }
      ],
      consejos: [
        { titulo: 'Automatiza', contenido: 'Si tu banco tiene aplicación, programa una transferencia automática a tu cuenta de ahorros el día que te pagan.' },
        { titulo: 'Separa cuentas', contenido: 'Ten una cuenta para tus gastos diarios y otra (sin tarjeta de débito si es posible) para tu ahorro de emergencia.' }
      ],
      terminos: [
        { termino: 'Fondo de Emergencia', definicion: 'Dinero para imprevistos (salud, reparaciones, desempleo).' },
        { termino: 'Largo Plazo', definicion: 'Metas que toman más de 5 años.' },
        { termino: 'Automatización', definicion: 'Configurar pagos o transferencias que se ejecutan automáticamente.' }
      ],
      relacion: 'Consulta nuestra Calculadora de Metas de Ahorro para saber cuánto debes separar cada mes para alcanzar el monto que deseas en el tiempo que te propongas.',
      faq: [
        { pregunta: '¿Puedo usar el fondo de emergencia para pagar una deuda?', respuesta: 'Solo si esa deuda está generando intereses muy altos y te está ahogando, pero lo ideal es que sea para imprevistos reales.' },
        { pregunta: '¿Dónde es mejor guardar el fondo de emergencia?', respuesta: 'En una cuenta de ahorros de fácil acceso, pero separada de tu cuenta de gastos diarios.' }
      ],
      miniEvaluacion: [
        {
          pregunta: '¿Cuánto dinero recomiendan los expertos tener en un fondo de emergencia?',
          opciones: ['1 mes de gastos.', 'De 3 a 6 meses de gastos básicos.', '12 meses de gastos básicos.'],
          correcta: 1,
          explicacion: 'Lo ideal es tener entre 3 y 6 meses para cubrir imprevistos sin desesperarte.'
        },
        {
          pregunta: '¿Qué significa "Págate a ti mismo primero"?',
          opciones: ['Gastar todo tu sueldo y luego ahorrar lo que sobre.', 'Separar el ahorro en cuanto recibes tu salario, antes de gastar en otra cosa.', 'Pedir prestado para ahorrar.'],
          correcta: 1,
          explicacion: 'Es la estrategia de priorizar tu ahorro antes que cualquier otro gasto.'
        },
        {
          pregunta: 'Se me ponchó la llanta del carro y no tengo repuesto. ¿Es válido usar el fondo de emergencia?',
          opciones: ['Sí, es un imprevisto necesario para tu movilidad y trabajo.', 'No, el fondo solo es para enfermedades.', 'Sí, pero solo si el carro es nuevo.'],
          correcta: 0,
          explicacion: 'Una reparación urgente es exactamente para lo que sirve el fondo de emergencia.'
        }
      ],
      resumen: [
        'Ahorra entre 3 y 6 meses de gastos básicos como fondo de emergencia.',
        'Págate a ti mismo primero: separa el ahorro en cuanto recibas tu sueldo.',
        'Usa cuentas separadas y automatiza tus transferencias.'
      ]
    },

    // ---------------------------------------------------------
    // GUÍA 3
    // ---------------------------------------------------------
    {
      id: 'interes-simple-vs-compuesto',
      titulo: 'Interés Compuesto: La "magia" que multiplica tu ahorro',
      aprenderas: [
        'Entenderás por qué el tiempo es el mejor amigo de tus ahorros.',
        'Diferenciarás entre ganar intereses solo sobre tu capital o sobre tus intereses acumulados.',
        'Aprenderás el valor de empezar a ahorrar joven.'
      ],
      introduccion: `El dinero tiene el poder de generar más dinero. Mucha gente cree que para ser rico hay que trabajar el doble de horas, pero el secreto está en que tu dinero trabaje para ti mientras duermes. En El Salvador, las tasas de ahorro pueden parecer bajas, pero cuando aplicas el Interés Compuesto a lo largo de los años, los resultados son sorprendentes.`,
      secciones: [
        {
          titulo: 'Interés Simple',
          contenido: 'El interés se calcula solo sobre el dinero que depositaste al inicio (el capital).',
          ejemplo: 'Depositas $100 al 5% anual. Cada año ganas $5. Después de 3 años, tienes $115.'
        },
        {
          titulo: 'Interés Compuesto',
          contenido: 'Los intereses que ganas se suman a tu capital, y el siguiente mes ganas intereses sobre esa nueva cantidad (intereses sobre intereses).',
          ejemplo: 'Año 1: $100 al 5% → ganas $5, tienes $105. Año 2: 5% sobre $105 → ganas $5.25, tienes $110.25. Año 3: 5% sobre $110.25 → ganas $5.51, tienes $115.76. La curva de crecimiento se vuelve cada vez más empinada con el tiempo.'
        }
      ],
      ejemploCotidiano: {
        titulo: 'Ana vs. Beto: el poder de empezar temprano',
        contenido: 'Dos amigos salvadoreños empiezan su primer trabajo a los 20 años. Ana ahorra $50 al mes en un fondo con interés compuesto. Beto decide esperar y empieza a ahorrar los mismos $50 hasta que tiene 30 años. Aunque Beto ahorre lo mismo que Ana, cuando ambos tengan 50 años, Ana tendrá mucho más dinero, no porque puso más de su bolsa, sino porque le dio a su dinero 10 años más para que el interés compuesto hiciera su "magia".'
      },
      porQueImporta: 'Porque entender esto te hace ver que el ahorro no es solo "guardar", es invertir. Te motiva a no sacar los intereses de tus cuentas de ahorro o plazos fijos para que el capital siga creciendo solo.',
      erroresComunes: [
        { titulo: 'Retirar los intereses ganados', contenido: 'Si sacas los intereses, pierdes el efecto multiplicador del interés compuesto.' },
        { titulo: 'Pensar que necesitas mucho dinero para empezar', contenido: 'Incluso $5 al mes, con el tiempo, crecen mucho gracias al interés compuesto.' },
        { titulo: 'Dejar el dinero en una cuenta que no paga intereses', contenido: 'Busca cuentas o plazos fijos que al menos te den una tasa pasiva.' }
      ],
      consejos: [
        { titulo: 'Empieza hoy', contenido: 'No importa si es poco dinero. El tiempo es más importante que la cantidad inicial.' },
        { titulo: 'No toques los intereses', contenido: 'Si reinviertes tus ganancias, el crecimiento será exponencial.' },
        { titulo: 'Aprovecha los plazos fijos', contenido: 'Si no vas a usar el dinero en un año, colócalo a plazo fijo para obtener una mejor tasa.' }
      ],
      terminos: [
        { termino: 'Capital', definicion: 'El dinero original que ahorras o inviertes.' },
        { termino: 'Interés Compuesto', definicion: 'Ganar intereses sobre el capital + los intereses ya ganados.' },
        { termino: 'Tasa Pasiva', definicion: 'El interés que el banco te paga por tener tu dinero ahorrado.' }
      ],
      relacion: 'Usa nuestro Simulador de Interés Compuesto para ver cuánto dinero podrías tener en 10, 20 o 30 años si empiezas a ahorrar hoy una pequeña cantidad mensual.',
      faq: [
        { pregunta: '¿El interés compuesto aplica en todas las cuentas de ahorro?', respuesta: 'No siempre. Pregunta en tu banco si los intereses se capitalizan (se suman al capital) o si se pagan por separado.' },
        { pregunta: '¿Qué pasa si saco el dinero antes del plazo en un plazo fijo?', respuesta: 'Pierdes los intereses o te cobran una penalización; por eso solo debes poner dinero que no vayas a necesitar.' }
      ],
      miniEvaluacion: [
        {
          pregunta: '¿Qué diferencia al interés compuesto del interés simple?',
          opciones: ['El compuesto genera intereses sobre los intereses acumulados.', 'El compuesto paga más al principio.', 'No hay diferencia.'],
          correcta: 0,
          explicacion: 'El interés compuesto acelera el crecimiento de tu dinero porque los intereses se reinvierten.'
        },
        {
          pregunta: 'Si ahorras $20 al mes al 5% anual, ¿qué factor es más importante para que crezca mucho?',
          opciones: ['La cantidad inicial.', 'El tiempo (años).', 'La tasa de interés.'],
          correcta: 1,
          explicacion: 'El tiempo es el factor más poderoso en el interés compuesto; entre más años, más crece.'
        },
        {
          pregunta: '¿Por qué es mejor empezar a ahorrar a los 18 años que a los 30?',
          opciones: ['Porque a los 18 tienes menos gastos.', 'Porque el interés compuesto tiene más años para trabajar.', 'Porque los bancos dan mejores tasas a los jóvenes.'],
          correcta: 1,
          explicacion: 'Comenzar temprano le da a tu dinero más tiempo para multiplicarse con interés compuesto.'
        }
      ],
      resumen: [
        'El interés simple solo genera ganancias sobre el capital inicial.',
        'El interés compuesto genera ganancias sobre el capital + los intereses acumulados.',
        'Empieza a ahorrar hoy, aunque sea poco; el tiempo es tu mejor aliado.'
      ]
    },

    // ---------------------------------------------------------
    // GUÍA 4
    // ---------------------------------------------------------
    {
      id: 'capacidad-de-pago',
      titulo: 'Capacidad de Pago: ¿Cuánto puedo pedir prestado?',
      aprenderas: [
        'Aprenderás a calcular cuánto de tu sueldo puedes dedicar a pagar deudas sin perder la tranquilidad.',
        'Entenderás qué es el sobreendeudamiento y cómo detectarlo.'
      ],
      introduccion: `Es tentador ver que un banco te ofrece un préstamo o una tarjeta. Pero el hecho de que el banco te "autorice" un monto no significa que tú puedas pagarlo cómodamente. En El Salvador, la ley prohíbe el Anatocismo (interés sobre interés en deudas), pero aun así, una deuda mal manejada puede arruinar tus planes de vida.`,
      secciones: [
        {
          titulo: 'Capacidad de Endeudamiento',
          contenido: 'Es la cantidad máxima de tus ingresos mensuales que puedes destinar al pago de cuotas (préstamos, tarjetas, créditos de tiendas) sin dejar de cubrir tus necesidades básicas (comida, techo, salud).'
        },
        {
          titulo: 'La Regla de Oro',
          contenido: 'Tus deudas totales nunca deberían superar el 30% o 40% de tu Ingreso Neto.',
          ejemplo: 'Fórmula sencilla: Ingreso Neto - Gastos Básicos = Lo que te queda para pagar deudas y ahorrar.'
        },
        {
          titulo: 'Sobreendeudamiento',
          contenido: 'Ocurre cuando tus deudas son tan grandes que ya no te queda dinero para vivir dignamente o tienes que pedir un préstamo para pagar otro préstamo.'
        }
      ],
      ejemploCotidiano: {
        titulo: 'Rina y su capacidad de pago',
        contenido: 'Rina gana $400 netos. Sus gastos básicos (comida, pasajes, casa) son $250. Le quedan $150 libres. Si saca un teléfono a cuotas de $40 y una moto con cuota de $80, ya debe $120 al mes. Solo le quedan $30 para todo lo demás. Si un mes se enferma o quiere ir al cine, ya no le alcanza. Rina está al límite de su capacidad. Si la cuota total supera los $120 (30% de $400), ya está en riesgo de sobreendeudamiento.'
      },
      porQueImporta: 'Porque superar tu capacidad de pago te genera estrés, insomnio y te quita la libertad de cambiar de empleo si no te gusta, ya que vives encadenado a la deuda.',
      erroresComunes: [
        { titulo: 'Pensar que el límite de la tarjeta es "dinero tuyo"', contenido: 'Es una deuda potencial, no dinero extra.' },
        { titulo: 'No sumar todas las cuotas', contenido: 'A veces sumamos el préstamo del banco pero olvidamos la cuota de la refrigeradora que sacamos a crédito en la tienda.' },
        { titulo: 'Aceptar un préstamo solo porque te lo aprueban', contenido: 'El banco evalúa tu historial, no tu capacidad real de vivir cómodamente.' }
      ],
      consejos: [
        { titulo: 'Haz la prueba del sueño', contenido: 'Antes de aceptar una deuda, pregúntate: "¿Podré dormir tranquilo sabiendo que debo pagar esta cuota cada mes?".' },
        { titulo: 'Calcula tu capacidad real', contenido: 'Usa nuestra calculadora para saber exactamente cuánto puedes pagar sin afectar tu calidad de vida.' },
        { titulo: 'Prioriza deudas con mayor interés', contenido: 'Si ya tienes deudas, paga primero las que cobran más intereses.' }
      ],
      terminos: [
        { termino: 'Capacidad de Endeudamiento', definicion: 'El porcentaje máximo de tus ingresos que puedes usar para pagar deudas (idealmente < 30%).' },
        { termino: 'Sobreendeudamiento', definicion: 'Situación donde no puedes cubrir tus necesidades por pagar deudas.' },
        { termino: 'Anatocismo', definicion: 'Cobro ilegal de intereses sobre intereses en deudas (prohibido en El Salvador).' }
      ],
      relacion: 'Usa nuestra Calculadora de Capacidad de Endeudamiento para ingresar tu salario y tus gastos actuales. La app te dirá en "semáforo" (verde, amarillo o rojo) si es prudente tomar una nueva deuda.',
      faq: [
        { pregunta: '¿Qué hago si ya estoy sobreendeudado?', respuesta: 'Busca asesoría en la SSF o Defensoría del Consumidor; ellos pueden ayudarte a negociar con los bancos.' },
        { pregunta: '¿Los préstamos estudiantiles cuentan como deuda en esta regla?', respuesta: 'Sí, todo pago mensual que tengas que hacer debe sumarse.' }
      ],
      miniEvaluacion: [
        {
          pregunta: 'Según la regla de oro, ¿cuál es el porcentaje máximo recomendado de tu ingreso neto para destinar a deudas?',
          opciones: ['50%', '30-40%', '10%'],
          correcta: 1,
          explicacion: 'Mantener tus deudas por debajo del 30-40% de tu ingreso neto te permite vivir sin estrés financiero.'
        },
        {
          pregunta: 'Si tienes $500 de ingreso neto y pagas $200 en deudas, ¿estás en riesgo de sobreendeudamiento?',
          opciones: ['No, porque $200 es el 40% y está en el límite.', 'Sí, porque es más del 30% y te queda poco para gastos básicos.', 'Depende de si tienes ahorros.'],
          correcta: 1,
          explicacion: 'Si tus gastos básicos son altos, $200 puede dejarte sin margen; la regla sugiere no superar el 30% idealmente.'
        },
        {
          pregunta: '¿Cuál es una señal clara de que estás sobreendeudado?',
          opciones: ['Tienes que usar una tarjeta de crédito para pagar la cuota de otra tarjeta.', 'Tus ahorros crecen cada mes.', 'Pagas todas tus cuotas antes de la fecha límite.'],
          correcta: 0,
          explicacion: 'Cuando usas una deuda para pagar otra, estás en una espiral de sobreendeudamiento.'
        }
      ],
      resumen: [
        'No superes el 30-40% de tu ingreso neto en pagos de deudas.',
        'Suma todas tus cuotas (bancos, tiendas, tarjetas) antes de pedir un nuevo crédito.',
        'Si ya estás sobreendeudado, busca asesoría profesional.'
      ]
    }
  ],

  // Evaluación integradora del nivel
  evaluacionFinal: {
    titulo: 'Mini evaluación del Nivel 3',
    preguntas: [
      {
        pregunta: 'Juan gana $400 netos. Gasta $300 en lo básico. Quiere sacar un crédito cuya cuota es de $120. ¿Está dentro de su capacidad de pago según la regla del 30-40%?',
        opciones: [
          'Sí, porque el 40% de $400 es $160 y la cuota es menor.',
          'No, porque a él solo le quedan $100 libres tras sus gastos básicos, y la cuota de $120 lo dejaría en negativo.',
          'Sí, porque el banco se lo aprobó.'
        ],
        correcta: 1,
        explicacion: 'Aunque el 40% de $400 sea $160, Juan solo tiene $100 disponibles después de cubrir sus necesidades básicas; la cuota de $120 excede su capacidad real.'
      },
      {
        pregunta: '¿Por qué el interés compuesto es mejor para el ahorro que el interés simple?',
        opciones: [
          'Porque permite que los intereses ganados también generen nuevos intereses, acelerando el crecimiento del dinero.',
          'Porque la tasa de interés es siempre más alta.',
          'Porque el banco te da un bono adicional.'
        ],
        correcta: 0,
        explicacion: 'El interés compuesto reinvierte las ganancias, creando un efecto "bola de nieve" que multiplica tus ahorros con el tiempo.'
      },
      {
        pregunta: '¿Cuál es la mejor forma de asegurar que vas a ahorrar cada mes?',
        opciones: [
          'Esperar a ver si sobra dinero el día 30.',
          'Pagar todas las deudas primero y ahorrar los centavos.',
          'Pagarme a mí mismo primero en cuanto recibo el sueldo.'
        ],
        correcta: 2,
        explicacion: 'Separar el ahorro al principio del mes te asegura que realmente ahorres, sin depender de lo que "sobre".'
      }
    ]
  },

  fuentes: [
    { tipo: 'OFICIAL', texto: 'SSF El Salvador. "Tarifarios y tasas de interés pasivas" (Mayo 2026). Respaldo para tipos de cuentas y tasas de ahorro.' },
    { tipo: 'OFICIAL', texto: 'Ley de Protección al Consumidor El Salvador. Prohibición de cobros no pactados y anatocismo en deudas.' },
    { tipo: 'LIBRO', texto: 'Tiffany Aliche. "Get Good with Money". Conceptos de "Ahorrar como ardilla" y Fondo de Emergencia.' },
    { tipo: 'LIBRO', texto: 'Vicki Robin. "Your Money or Your Life". Concepto de Energía Vital y Tabulación Mensual (Pasos 2, 3 y 4).' },
    { tipo: 'LIBRO', texto: 'Robert Kiyosaki. "Padre Rico, Padre Pobre para Jóvenes". Definiciones de activos, pasivos y estados financieros básicos.' },
    { tipo: 'LIBRO', texto: 'Eric Tyson. "Personal Finance for Dummies". Cálculo de la relación deuda/ingreso y capacidad de endeudamiento.' },
    { tipo: 'LIBRO', texto: 'Ramit Sethi. "I Will Teach You to Be Rich". Estrategia de págate a ti mismo primero y automatización.' }
  ],

  siguientesPasos: [
    { texto: 'Usa la Calculadora de Metas de Ahorro para proyectar cuánto puedes acumular con interés compuesto.', enlace: '/calculadora' },
    { texto: 'Evalúa tu capacidad de endeudamiento actual con nuestra calculadora de semáforo financiero.', enlace: '/calculadora' },
    { texto: 'Visita la sección de Rankings para ver qué bancos ofrecen mejores tasas pasivas para tu ahorro.', enlace: '/rankings' }
  ]
  }


  // ============================================================
  // NIVEL 2 — (próximamente)
  // Para agregar el siguiente nivel, copia la estructura de arriba:
  //
  // nivel2: {
  //   titulo: '...',
  //   descripcion: '...',
  //   guias: [ { id: '...', titulo: '...', aprenderas: [...], ... } ],
  //   evaluacionFinal: { ... },
  //   fuentes: [ ... ],
  //   siguientesPasos: [ ... ]
  // },
  // ============================================================
};
