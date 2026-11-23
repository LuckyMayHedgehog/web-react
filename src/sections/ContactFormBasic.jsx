import { useNavigateCountdown } from "../hooks/useNavigateCountdown.js";
import { useState } from "react";

export default function ContactFormBasic() {
  const { secondsLeft, startCountdown } = useNavigateCountdown();
  const [status, setStatus] = useState("idle"); // 'idle' 'loading' 'success' 'error'
  const [error, setError] = useState("");
  
  // Використовуємо проксі-шлях /echo/post (налаштуємо його, щоб обійти CORS)
  const endpoint = "/echo/post";

  async function onSubmit(e) {
    e.preventDefault(); // Зупиняємо стандартне перезавантаження сторінки браузером
    setStatus("loading"); // Переводимо форму в режим завантаження (це заблокує кнопку та покаже напис "Надсилання...")

    setError(""); // очищаємо текст попередньої помилки, якщо вона була
    const form = e.target; // Отримуємо DOM-елемент форми, щоб передати його в FormData
    const fd = new FormData(form); // Збираємо всі поля форми за їхніми атрибутами name

    try {
      const res = await fetch(endpoint, {
        method: "POST", // Обов'язково вказуємо POST, бо за замовчуванням fetch робить GET
        body: fd,
      });

      if (!res.ok) { 
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson?.message || `HTTP ${res.status}`);
      }

      const json = await res.json();
      console.log("Відповідь сервера (FormData):", json);
      setStatus("success");
      form.reset(); // Нативне очищення полів форми

      // Запускаємо 5-секундний відлік та перехід на головну зі станом
      startCountdown(5, "/", {
        replace: true,
        state: { from: "contact-success" },
      });
      
    } catch (e) {
      setError(e.message || "Network error");
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__item">
        <label htmlFor="name" className="contact-form__label">ПІБ</label>
        <input
          id="name"
          name="name"
          required
          className="contact-form__input"
          placeholder="Ваше ПІБ"
        />
      </div>

      <div className="contact-form__item">
        <label htmlFor="email" className="contact-form__label">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="contact-form__input"
          placeholder="you@example.com"
        />
      </div>

      <div className="contact-form__item">
        <label htmlFor="msg" className="contact-form__label">Повідомлення</label>
        <textarea
          id="msg"
          name="message"
          minLength={10}
          className="contact-form__textarea"
          placeholder="Ваше повідомлення"
        ></textarea>
      </div>

      <button className="contact-form__button" disabled={status === "loading"}>
        Надіслати
      </button>

      {status === "loading" && <small className="text-blue-400">Надсилання...</small>}
      {status === "error" && <small className="text-red-600">Помилка: {error}</small>}
      {status === "success" && (
        <small className="text-green-600">
          Відправлено! Перенаправлення на головну через {secondsLeft} с...
        </small>
      )}
    </form>
  );
}