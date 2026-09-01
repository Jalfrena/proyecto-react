export const guideConfig = {
  nivel1: {
    id: 'nivel1',
    icono: '🌱',
    color: '#3A8F68',
    guias: [
      { id: 'que-es-un-banco', orden: 1, tiempo: 5, showQuiz: true },
      { id: 'primera-cuenta', orden: 2, tiempo: 7, showQuiz: true },
      { id: 'tipos-de-cuentas', orden: 3, tiempo: 6, showQuiz: true },
      { id: 'tarjeta-debito', orden: 4, tiempo: 5, showQuiz: true },
      { id: 'tarjeta-credito', orden: 5, tiempo: 8, showQuiz: true }
    ]
  },




  nivel2: {
    id: 'nivel2',
    icono: '📊',
    color: '#2C6E8F',
    guias: [
      { id: 'esqueleto-del-prestamo', orden: 1, tiempo: 6, showQuiz: true },
      { id: 'tasa-nominal-vs-efectiva', orden: 2, tiempo: 6, showQuiz: true },
      { id: 'tus-derechos-al-pedir-prestado', orden: 3, tiempo: 7, showQuiz: true }
    ]
  },
  // ============================================================
  // Para agregar el Nivel 2 (u otros), copia este bloque y ajusta
  // el id, ícono, color y la lista de guías (deben coincidir con
  // los "id" de cada guía dentro de guideContent.js -> nivel2.guias):
  //
  // nivel2: {
  //   id: 'nivel2',
  //   icono: '🚀',
  //   color: '#2C8561',
  //   guias: [
  //     { id: 'id-de-la-guia-1', orden: 1, tiempo: 5, showQuiz: true },
  //   ]
  // },
  // ============================================================
};