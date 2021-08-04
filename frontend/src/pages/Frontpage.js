import React, { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Frontpage() {
  
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
  

  const [lores_state, set_lores_state] = React.useState({
    lore: [],
  });

  useEffect(
    () =>
      fetch("api/lore/")
        .then((response) => response.json())
        .then((data) => set_lores_state({ lore: data })),
    []
  );

  const [lore_state, set_lore_state] = React.useState({
    lores: [],
  });

  useEffect(
    () =>
      fetch("api/lore/group/7")
        .then((response) => response.json())
        .then((data) => set_lore_state({ lores: data })),
    []
  );

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
                    Welcome to the magical world of Grimgar
                  </h2>
                  <div class="entry">
                    <div id="slideshow_container"></div>
                    <p id="knowledge_text">
                      View all the newly added lore or read the session diaries!
                    </p>
                  </div>
                </div>
                <div id="smallPosts">
                  {lores_state.lore.slice(lores_state.lore.length-9, lores_state.lore.length).reverse().map((lore) => (
                    <div class="">
                      <a href={`/${lore.id}`}>
                        <img src={lore.image} />
                        <p class="knowledge_list_title">{lore.name}</p>
                      </a>
                    </div>
                  ))}
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

                  {lore_state.lores.map((lore) => (
                    <a href={`/log/${lore.id}`}>
                      <li>
                        <h2 class="log_entry">{lore.name}</h2>
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
