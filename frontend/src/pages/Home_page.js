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
import New_lore from "./New_lore";
import Login from "./Login";
import { useAuthContext } from "../context/authContext";
import Register from "./Register";
import Account from "./Account";
import View_log from "./View_log";
import View_rule from "./View_rule";
import View_all_rule from "./View_all_rule";
import View_all_players from "./View_all_players";
import View_player from "./View_player";
import Make_new from "./Make_new";
import New_group from "./New_group";
import New_undergroup from "./New_undergroup";
import New_hero from "./New_hero";

export default function Home_page() {
  const { user } = useAuthContext();
    
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

        <Route path="/rule/:id" component={View_rule} />
        
        <Route path="/player/:id" component={View_player} />
        
        <Route path="/log/:id" component={View_log} />
        
        <Route path="/rule" component={View_all_rule} />
        
        <Route path="/player" component={View_all_players} />      
        
        <Route path="/new/lore" component={New_lore} />
        <Route path="/new/group" component={New_group} />
        <Route path="/new/undergroup" component={New_undergroup} />
        <Route path="/new" component={Make_new} />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />

        <Route path="/account/new_hero" component={New_hero} />
        <Route path="/account" component={Account} />
      </Switch>
    </Router>
  );
}
