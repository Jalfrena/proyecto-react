const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function consultarAsistente(mensajeUsuario) {
  if (!GROQ_API_KEY) {
    console.error('VITE_GROQ_API_KEY no está definida en el archivo .env');
    return 'Error de configuración: Clave de API no encontrada.';
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente financiero oficial de BancoGuía en El Salvador. Responde preguntas sobre créditos, tasas, bancos y finanzas personales de forma clara, precisa y directa.'
          },
          {
            role: 'user',
            content: mensajeUsuario
          }
        ],
        temperature: 0.5
      })
    });

    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    }
    
    return 'No se pudo generar una respuesta en este momento.';
  } catch (error) {
    console.error('Error en la llamada a la API de Groq:', error);
    return 'Ocurrió un error al comunicar con el asistente virtual.';
  }
}