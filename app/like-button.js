"use client";
import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Button clicked");
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Click me: {count}</button>;
}
