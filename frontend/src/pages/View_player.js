import React, { useEffect } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backspace from './backspace.png' // relative path to image 


export default function View_player() {
  var url = window.location.href;
  url = url.split("/");
  const { id } = useParams();

  let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

  const [lore_state, set_lore_state] = React.useState({
    lore: [],
  });

  useEffect(
    () =>
      fetch(`/api/hero/${id}`)
        .then((response) => response.json())
        .then((data) => set_lore_state({ lore: data })),
    []
  );

  const [lores_state, set_lores_state] = React.useState({
    lores: [],
  });

  useEffect(
    () =>
        fetch("/api/hero")
        .then((response) => response.json())
        .then((data) => set_lores_state({ lores: data })),
    [],
  );

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
                    {lore_state.lore.name}
                    <a class="back_button" onClick={goToPreviousPath} ><img src={Backspace} style={{height: "20px"}}/></a>
                  </h2>
                  <div class="entry">
                    <div class="lore_pic">
                      <img src={lore_state.lore.image} />
                    </div>
                    <pre>Name: {lore_state.lore.name}</pre>
                    <pre>Class: {lore_state.lore.fantasyclass} {lore_state.lore.lvl}</pre>
                    <pre>Description: {lore_state.lore.description}</pre>
                    <pre>Info: {lore_state.lore.info}</pre>
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
                  {lores_state.lores.map((lore) => (
                    <a href={`/player/${lore.id}`}>
                      <li>
                        <h2 class="knowledge_list_title">{lore.name}</h2>
                      </li>
                    </a>
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
