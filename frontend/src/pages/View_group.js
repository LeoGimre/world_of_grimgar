import React, { useEffect } from "react";
import "./style.css";
import { useParams} from "react-router-dom";
import Mainpage from "../components/Mainpage";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pieces_of_lore() {
  var url = window.location.href;
  url = url.split("/");
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
                    The Collection of the Lore of Grimgar
                  </h2>
                  <div class="entry">
                    <div id="slideshow_container"></div>
                    <p id="knowledge_text">
                      On this page you will find most when it commes to the Lore
                      and information related to Grimgar and its Universe.
                    </p>
                  </div>
                </div>
                <div id="smallPosts">
                  {loregroup_state.loregroups.map((lore) => (
                    <div class="">
                      <a href={`/${url[3]}/group/${lore.id}`}>
                        <img src={lore.image}/>
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
