import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Validate = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [reppassword, setRepPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  function login(e) {
    e.preventDefault();
    if (password === reppassword) {
      setIsLogin(true);
    } else {
      alert("Пароли не совпадают");
    }
  }

  function handleLogin() {
    setIsLogin(false);
    setMail("");
    setPassword("");
    setRepPassword("");
  }

  return (
    <div>
      {isLogin && (
        <div>
          <h1>{mail}</h1>
          <Button onClick={handleLogin}>Exit</Button>
        </div>
      )}
      {!isLogin && (
        <form onSubmit={login}>
          <input
            onChange={(ev) => setMail(ev.target.value)}
            placeholder="Введите email"
            required
            type="email"
          />
          <input
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Введите пароль"
            required
            type="password"
          />
          <input
            onChange={(ev) => setRepPassword(ev.target.value)}
            placeholder="Повторите пароль"
            required
            type="password"
          />
          <Button className="m-3" type="submit">
            Войти
          </Button>
        </form>
      )}
    </div>
  );
};

export default Validate;
