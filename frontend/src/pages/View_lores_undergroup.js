import React, { useEffect } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function View_lores_undergroup() {
  var url = window.location.href;
  url = url.split("/");
  const { id } = useParams();

  const [lores_state, set_lores_state] = React.useState({
    lores: [],
  });

  useEffect(
    () =>
      fetch(`/api/lore/undergroup/${url[6]}`)
        .then((response) => response.json())
        .then((data) => set_lores_state({ lores: data })),
    []
  );

  const [loregroup_state, set_loregroup_state] = React.useState({
    loregroups: [],
  });

  useEffect(
    () =>
      fetch(`/api/lore/${url[3]}`)
        .then((response) => response.json())
        .then((data) => set_loregroup_state({ loregroups: data })),
    []
  );

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

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
                    Hello
                    <a class="back_button" onClick={goToPreviousPath}>
                      Back
                    </a>
                  </h2>
                </div>
                <div id="smallPosts">
                  {lores_state.lores.map((lore) => (
                    <div class="">
                      <a href={`/${url[3]}/${lore.id}`}>
                        <img src={lore.image} width="250px" />
                        <p class="knowledge_list_title">{lore.name}</p>
                      </a>
                    </div>
                  ))}
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
                  {loregroup_state.loregroups.map((lore) => (
                    <a href={`/${url[3]}/group/${lore.id}`}>
                      <li>
                        <h2 class="knowledge_list_title">{lore.name}</h2>
                      </li>
                    </a>
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
