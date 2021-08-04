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


export default function New_group() {
  var url = window.location.href;
  const history = useHistory();

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
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    fetch("/api/lore/group/", {
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
                    Add new Lore
                  </h2>
                  <div class="entry">
                    <div className="form_container">
                      <form onSubmit={handleSubmit}>
                      <CSRFToken />
                      <div>
                          <FormControl id="radio_buttons" component="fieldset">
                            <label component="legend">Choose main Lore type</label>
                            <RadioGroup aria-label="type" name="type" style={{display: "inline"}}>
                              {state_main.main_lore_type.map((lore_type) => (
                                <FormControlLabel
                                  key={lore_type.name}
                                  value={`${lore_type.id}`}
                                  control={<Radio />}
                                  label={lore_type.name}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </div>

                        <br />

                        <label component="legend">Group Name</label>
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
                        
                        <label component="legend">Group Description</label>
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
                            Group Picture
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
                          Create New Lore
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
