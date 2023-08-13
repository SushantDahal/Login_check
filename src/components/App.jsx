import React from "react";
import Login from "./Login";

var userIsRegister = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      <Login isRegistered={userIsRegister} />
    </div>
  );
}
export default App;
// {isLoggedIn ? <h1>Hello</h1> : <Login />}
//       {currentTime > 20 ? <h2>Sut mula</h2> : null}
//       {currentTime > 20 && <h2>Sut mula</h2>}
//       {/* Ternary operater in React as well as Expression */}
