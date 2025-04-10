import { BOT, CHAT } from "../components/Advantages/user";

export const sendToTelegram = (
  name: string,
  email: string,
  message: string,
) => {
  const messaged = `
📢 *ЗАПИСЬ НА КУРС*  
---👤 Имя: *${name}*  
--- email: *${email}*  
--- Результат: *${message}%*  
`;

  fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT,
      text: messaged,
      parse_mode: "Markdown",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        alert("Отправлено!");
      } else {
        alert("Ошибка при отправке.");
      }
    })
    .catch((error) => {
      alert("Ошибка соединения.");
    });
};