import React, { useEffect } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backspace from './backspace.png' // relative path to image 


export default function Make_new() {
  var url = window.location.href;
  url = url.split("/");
  const { id } = useParams();

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
                  <div class="entry">
                    <div class="lore_pic">
                      <a href={`new/lore`}>New Lore</a>
                      <a href={`new/group`}>New Group</a>
                      <a href={`new/undergroup`}>New Undergroup</a>
                    </div>
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
              <div style={{clear:'both'}}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
