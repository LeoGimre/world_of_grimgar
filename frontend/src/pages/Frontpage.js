import React, { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Mainpage from "../components/Mainpage";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Frontpage() {
    const [lore_state, set_lore_state] = React.useState({
        lores: [],
      });
    
      useEffect(
        () =>
            fetch("/api/lore/log")
            .then((response) => response.json())
            .then((data) => set_lore_state({ lores: data })),
        [],
      );
    
      React.useEffect(() => {
      let quote = document.getElementById("quote_text");
      console.log(quote);
      }, [])

    return (
        <div>
      <Logo/>
      <Navbar/>
      <div id="wrapper">
      <div id="page">
        <div id="page-bgtop">
          <div id="page-bgbtm">
            <div id="content">
              <div id="smallPosts"></div>
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
            </div>

            <div id="sidebar">
              <ul id="entire_list">
                <li>
                  <h2>Quote</h2>
                  <p id="quote_text">
                    Let your mind wander into the endless depth of knowledge.
                  </p>
                </li>
                {lore_state.lores.map((lore) => (
                    <a href={`/knowledge/${lore.id}`}>
                      <li>
                        <h2 class="knowledge_list_title">
                        {lore.group}
                        </h2>
                    </li>
                    </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
    );
}
