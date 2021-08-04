import React, { useEffect } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuthContext } from "../context/authContext";
import CSRFToken from "./CSRFToken";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



export default function Login() {
  var url = window.location.href;
  url = url.split("/");

  const { setUser } = useAuthContext();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/api/login/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
        history.push("/");
      });
  }

  const [quote_state, set_quote_state] = React.useState({
    quote: [],
  });

  useEffect(
    () =>
      fetch("/api/quote/")
        .then((response) => response.json())
        .then((data) => set_quote_state({ quote: data })),
    []
  );

  const random = Math.floor(Math.random() * quote_state.quote.length) + 1;

  return (
    <div>
      <Logo />
      <Navbar />
      <div id="wrapper">
        <div id="page">
          <div id="page-bgtop">
            <div id="page-bgbtm">
              <div id="content">
                <div id="post">
                  <h2 class="title" id="knowledge_title">
                    Login
                  </h2>
                  <div class="entry">
                    <form onSubmit={handleSubmit}>
                      <CSRFToken />

                      <label component="legend">Email</label>
                        <br />
                      <TextField
                        required
                        name="email"
                        id="outlined-required"
                        inputProps={{ style: { color: "black" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                        variant="outlined"
                      />
                      <br />
                      <br />
                      
                      <label component="legend">Password</label>
                        <br />
                      <TextField
                        required
                        id="outlined-password-input"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        inputProps={{ style: { color: "black" } }}
                        variant="outlined"
                        InputLabelProps={{ style: { color: "black" } }}
                      />
                      <br />
                      <br />

                      <br />
                      <Button
                        type="submit"
                        className="register_button"
                        variant="contained"
                        color="default"
                      >
                        Logg inn
                      </Button>
                      <br />
                      <br />
                    </form>

                    <a id="link_register" href="/register">
                      Register new user!
                    </a>
                  </div>
                </div>
                <br/>
              </div>

              <div id="sidebar">
                <ul id="entire_list">
                  {
                  quote_state.quote.slice(random-1, random).map((quote) => (
                    <li id="quote">
                      <h2>Quote</h2>
                      <p id="quote_text">"{quote.quote}"</p>
                      <p id="quoter_text">- {quote.quoter}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
