import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 20 ? <h2>Sut mula</h2> : null}
      {currentTime > 20 && <h2>Sut mula</h2>}
      {/* Ternary operater in React as well as Expression */}
    </div>
  );
}
export default App;
