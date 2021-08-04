import React, { useEffect } from "react";
import "./style.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CSRFToken from "./CSRFToken";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuthContext } from "../context/authContext";


export default function Account() {
  var url = window.location.href;
  url = url.split("/");
  const { user } = useAuthContext();

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
                    Welcome to your profile page {user.name}!
                  </h2>
                  <p>Yes very bare right now so if you got ideas just send them my way.</p>
                  <div class="entry">
                  <Button variant="dark"><a href={`account/new_hero`}>Create new Hero</a></Button>{' '}
                  </div>
                </div>
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
