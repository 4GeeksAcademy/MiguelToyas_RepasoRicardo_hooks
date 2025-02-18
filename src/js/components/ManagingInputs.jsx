import React, { useState } from "react";

function ManagingInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "mitoperni@gmail.com") {
      if (password === "12345678") {
        alert("Has iniciado sesión");
      } else {
        alert("La contraseña es incorrecta");
      }
    } else {
      alert("El email es incorrecto");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Direccion
          </label>
          <input
            type="text"
            class="form-control"
            id="adress"
            name="adress"
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ManagingInputs;
