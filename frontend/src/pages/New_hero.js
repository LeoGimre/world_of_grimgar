import React, { useEffect } from "react";
import "./style.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useHistory } from "react-router-dom";
import CSRFToken from "./CSRFToken";
import { useAuthContext } from "../context/authContext";


export default function New_hero() {
  var url = window.location.href;
  const history = useHistory();

  const { user } = useAuthContext();
  var id = user.id;

  const [state_main, setState_main] = React.useState({
    main_lore_type: [],
  });

  useEffect(
    () =>
      fetch("/api/loretype/")
        .then((response) => response.json())
        .then((data) => setState_main({ main_lore_type: data })),
    []
  );


  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("player", id);
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    fetch("/api/hero/", {
      method: "POST",
      body: formData,
    }).then((response) => {
    if (response.ok) history.push("/");
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
                    Add new Hero
                  </h2>
                  <div class="entry">
                    <div className="form_container">
                      <form onSubmit={handleSubmit}>
                      <CSRFToken />
                        <label component="legend">Hero Name</label>
                        <br />
                        <TextField
                          required
                          name="name"
                          id="outlined-required"
                          variant="outlined"
                          inputProps={{ style: { color: "black" } }}
                          InputLabelProps={{ style: { color: "black" } }}
                        />
                        <br />
                        <br/>
                        
                        <label component="legend">Hero Class</label>
                        <br />
                        <TextField
                          required
                          name="fantasyclass"
                          id="outlined-required"
                          variant="outlined"
                          inputProps={{ style: { color: "black" } }}
                          InputLabelProps={{ style: { color: "black" } }}
                        />
                        <br />
                        <br />

                        <label component="legend">Hero Lvl</label>
                        <br />
                        <TextField
                          required
                          name="lvl"
                          id="outlined-required"
                          variant="outlined"
                          inputProps={{ style: { color: "black" } }}
                          InputLabelProps={{ style: { color: "black" } }}
                        />
                        <br />
                        <br />

                        <label component="legend">Hero info</label>
                        <br />
                        <TextareaAutosize
                          required
                          name="info"
                          id="outlined-required"
                          variant="outlined"
                          inputProps={{ style: { color: "black" } }}
                          InputLabelProps={{ style: { color: "black" } }}
                        />
                        <br />
                        <br />

                        <label component="legend">Hero Description</label>
                        <br />
                        <TextareaAutosize
                          required
                          name="description"
                          id="outlined-required"
                          variant="outlined"
                          inputProps={{ style: { color: "black" } }}
                          InputLabelProps={{ style: { color: "black" } }}
                        />
                        <br />
                        <br />

                        <div>
                          <label>
                            Hero Picture
                            <br />
                            <input type="file" accept="image/*" name="image" />
                          </label>
                        </div>

                        <br />
                        <Button
                          type="submit"
                          className="register_button"
                          variant="contained"
                          color="default"
                        >
                          Create New Hero
                        </Button>
                      </form>
                      <br />
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
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
