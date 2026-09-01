import { supabase } from '../utils/supabaseClient';

export async function submitSurvey(bancoId, surveyData) {
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
        satisfaccion_general: surveyData.satisfaccion,
        q2_experiencia: surveyData.q2,
        q3_experiencia: surveyData.q3,
        q4_experiencia: surveyData.q4,
        q5_experiencia: surveyData.q5,
        comentarios: surveyData.comentarios,
      },
    ]);

  if (error) throw error;
  return data;
}