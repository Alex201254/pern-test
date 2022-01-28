import React, {  useState } from "react";
import m from "./Main.module.css";

export const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {name, email, message};
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err.message);
    }
  }
  
  return (
    <div className={m.main}>
      <form action="submit" className={m.form}>
        <h1 className={m.title}>Reach out to us!</h1>
        <input
          type="text"
          className={m.input}
          placeholder="Your name*"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <input
          className={m.input}
          placeholder="Your e-mail*"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="email"
        />
        <textarea
          type="text"
          className={m.message}
          placeholder="Your message*"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <button type="submit" className={m.btn} onClick={onSubmitForm}>
          Send message
        </button>
      </form>
      <div className={m.photo}>
        <img src="img-main.png" alt="Here is an image" className={m.image} />
      </div>
      <img src="Group.png" alt="Here is an image" className={m.ball_1} />
      <img src="goodie1.png" alt="Here is an image" className={m.ball_2} />
      <img src="red_cartoon 4.png" alt="Here is an image" className={m.ball_3} />
    </div>
  );
};
