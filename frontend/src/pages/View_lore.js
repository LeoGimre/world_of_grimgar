import React, { useEffect } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Piece_of_knowledge() {
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
      fetch(`/api/lore/${id}`)
        .then((response) => response.json())
        .then((data) => set_lore_state({ lore: data })),
    []
  );

  const [lores_state, set_lores_state] = React.useState({
    lores: [],
  });

  useEffect(
    () =>
      fetch(`/api/lore/${url[3]}`)
        .then((response) => response.json())
        .then((data) => set_lores_state({ lores: data })),
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
                    {lore_state.lore.name}
                    <a class="back_button" onClick={goToPreviousPath} >Back</a>
                  </h2>
                  <div class="entry">
                    <div class="lore_pic">
                      <img src={lore_state.lore.image} />
                    </div>
                    
                    <pre>{lore_state.lore.description}</pre>
                  </div>
                </div>
              </div>

              <div id="sidebar">
                <ul id="entire_list">
                  <li>
                    <h2>Quote</h2>
                    <p id="quote_text">
                      Let your mind wander into the endless depth of knowledge.
                    </p>
                  </li>
                  {lores_state.lores.map((lore) => (
                    <a href={`/${url[3]}/group/${lore.id}`}>
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