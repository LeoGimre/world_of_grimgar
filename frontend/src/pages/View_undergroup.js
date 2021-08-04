import React, { useEffect } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backspace from './backspace.png' // relative path to image 

export default function View_undergroup() {
  var url = window.location.href;
  url = url.split("/");
  const [loreundergroup_state, set_loreundergroup_state] = React.useState({
    loreundergroups: [],
  });

  useEffect(
    () =>
      fetch(`/api/lore/${url[4]}/under${url[4]}/${url[5]}`)
        .then((response) => response.json())
        .then((data) => set_loreundergroup_state({ loreundergroups: data })),
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
        history.goBack()
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
                    Group Name
                    <a class="back_button" onClick={goToPreviousPath} ><img src={Backspace} style={{height: "20px"}}/></a>

                  </h2>
                </div>
                <div id="smallPosts">
                  {loreundergroup_state.loreundergroups.map((lore) => (
                    <div class="">
                      <a href={`/${url[3]}/group/undergroup/${lore.id}`}>
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
                  {loregroup_state.loregroups.map((loregroup) => (
                    <a href={`/${url[3]}/group/${loregroup.id}`}>
                      <li>
                        <h2 class="...">{loregroup.name}</h2>
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
