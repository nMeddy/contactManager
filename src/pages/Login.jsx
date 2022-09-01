import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container loginPage mt-5">
      <div className="row">
        {/* leftPart */}
        <div className="col-md-6 leftPart pt-5 shadow"></div>

        {/* RightPart */}
        <div className="col-md-6 rightPart shadow">
          <div className="container Top">
            <div className="leftTitle">
              <h4 className="headText">S'Inscrire ici</h4>
              <span className="headIcon">
                <i
                  class="fa-solid fa-user"
                  title="Cliquez ici si vous avez un compte"
                ></i>
              </span>
            </div>
            {/* Formulaire */}
            <div className="container form">
              <form action="" method="get">
                <div className="input">
                  <span className="inputName" htmlFor="name">
                    NOM D'UTILISATEUR
                  </span>
                  <input type="text" name="name" autoComplete="off"/>
                </div>
                <div className="input">
                  <span className="inputName" htmlFor="name">
                    MOT DE PASSE
                  </span>
                  <input type="password" name="mpd"autoComplete="off" />
                </div>
                <div className="input">
                  <span className="inputName" htmlFor="bio">
                    BIOGRAPHIE
                  </span>
                  <textarea name="bio" id="" cols="30" rows="4" autoComplete="off"></textarea>
                </div>
                {/* SendButton */}
                <div className="btnGroup mt-3">
                  <button className="btn-primary px-4">Envoyez</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
