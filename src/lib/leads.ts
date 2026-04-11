export type LeadPayload = Record<string, string>;

const LEADS_EMAIL = 'a.neon369@mail.ru';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${LEADS_EMAIL}`;

export async function sendLead(formName: string, payload: LeadPayload) {
  const formData = new FormData();
  formData.append('_subject', `Новая заявка: ${formName}`);
  formData.append('_captcha', 'false');
  formData.append('_template', 'table');
  formData.append('Форма', formName);
  formData.append('Источник', 'aneon369.ru');
  formData.append('Дата', new Date().toLocaleString('ru-RU'));

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Не удалось отправить заявку');
  }

  const result = (await response.json()) as { success?: string };
  if (!result.success || result.success !== 'true') {
    throw new Error('Сервис отправки вернул ошибку');
  }
}

