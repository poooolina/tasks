import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Counter = () => {
  const [sum, setSum] = useState(0);
  const [counter, setCounter] = useState(0);
  const [counterd, setCounterd] = useState(0);

  function increment() {
    setCounter(counter + 1);
    setSum(sum + 1);
  }

  function decrement() {
    setCounterd(counterd - 1);
    setSum(sum + 1);
  }
  return (
    <div className="container">
      <h1>TASK 1</h1>
      <p>Вы нажали {sum} раз</p>
      <p>Вы нажали {counter} раз</p>
      <p>Вы нажали {counterd} раз</p>

      <Button onClick={increment}>+</Button>
      <Button className="ms-3" onClick={decrement}>
        -
      </Button>
    </div>
  );
};

export default Counter;
