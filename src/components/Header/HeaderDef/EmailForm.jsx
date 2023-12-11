import emailjs from 'emailjs-com';

// Настройте параметры отправки письма
const serviceId = 'service_ezqx7y4';
const templateId = 'template_uk29teq';
const userId = '2MtE1LgcHIP9kxTpQ';

const sendEmail = (e) => {
  e.preventDefault();
  
  // Получите данные из формы
  const { target } = e;
  const { email, subject, message } = target.elements;

  // Отправьте письмо
  emailjs.send(serviceId, templateId, {
    to_email: email.value,
    subject: subject.value,
    message: message.value
  }, userId)
    .then((response) => {
      console.log('Письмо успешно отправлено!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Ошибка при отправке письма:', error);
    });
}

function EmailForm() {
  return (
    <form onSubmit={sendEmail}>
      <input type="email" name="email" placeholder="Адрес электронной почты" required />
      <input type="text" name="subject" placeholder="Тема" required />
      <textarea name="message" placeholder="Сообщение" required></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default EmailForm;