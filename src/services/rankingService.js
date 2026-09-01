import { supabase } from '../utils/supabaseClient';

// 1. Obtener ranking de satisfacción desde la vista SQL
export async function fetchRankings() {
  const { data, error } = await supabase
    .from('ranking_satisfaccion')
    .select('*')
    .order('calificacion_promedio', { ascending: false });

  if (error) {
    console.error('Error al obtener rankings:', error.message);
    return [];
  }
  return data;
}

// 2. Obtener el ranking de menores tasas desde la vista SQL
export async function fetchLowestRates() {
  const { data, error } = await supabase
    .from('ranking_menores_tasas')
    .select('*')
    .order('tasa_interes_activa', { ascending: true });

  if (error) {
    console.error('Error al obtener menores tasas:', error.message);
    return [];
  }
  return data;
}

// 3. Enviar encuesta validando sesión activa e inyectando el user_id
export async function enviarEncuesta(bancoId, datosEncuesta) {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    throw new Error('Debes iniciar sesión para enviar la encuesta.');
  }

  const { data, error } = await supabase
    .from('encuestas')
    .insert([
      {
        banco_id: bancoId,
        user_id: session.user.id,
        satisfaccion_general: datosEncuesta.satisfaccion,
        q2_experiencia: datosEncuesta.q2,
        q3_experiencia: datosEncuesta.q3,
        q4_experiencia: datosEncuesta.q4,
        q5_experiencia: datosEncuesta.q5,
        comentarios: datosEncuesta.comentarios,
      },
    ]);

  if (error) {
    console.error('Error al registrar encuesta:', error.message);
    throw error;
  }
  return data;
}