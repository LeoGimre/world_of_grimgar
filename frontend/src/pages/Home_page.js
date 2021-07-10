import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Frontpage from "./Frontpage";
import View_lore from "./View_lore";
import View_group from "./View_group";
import View_lores_group from "./View_lores_group";
import View_lores_undergroup from "./View_lores_undergroup";
import View_undergroup from "./View_undergroup";

export default function Home_page() {
    
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Frontpage} />
        <Route path="/knowledge/group/:id" component={View_lores_group} />
        <Route path="/knowledge/:id" component={View_lore} />
        <Route path="/knowledge" component={View_group} />

        <Route path="/people/group/undergroup/:id" component={View_lores_undergroup} />
        <Route path="/people/group/:id" component={View_undergroup} />
        <Route path="/people/:id" component={View_lore} />
        <Route path="/people" component={View_group} />

        <Route path="/item/group/:id" component={View_lores_group} />
        <Route path="/item/:id" component={View_lore} />
        <Route path="/item" component={View_group} />

        <Route path="/rule/:id" component={View_lore} />
        
        <Route path="/player/:id" component={View_lore} />
        
        
        
        
        <Route path="/rule" component={View_group} />
        
        <Route path="/player" component={View_group} />        
      </Switch>
    </Router>
  );
}
