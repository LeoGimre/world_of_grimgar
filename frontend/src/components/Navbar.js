import React, { useEffect } from "react";
import { useAuthContext } from "../context/authContext";


export default function Navbar() {
  var url = window.location.href;
  url = url.split("/");

  const { user } = useAuthContext();

  
  
  return (
    <div id="menu">
      <ul>
        <li class={ url[3] == "" ? "current_page_item" : "not_current_page_item"}>
          <a href="/">Homepage</a>
        </li>
        <li class={ url[3] == "knowledge" ? "current_page_item" : "not_current_page_item"}>
          <a href="/knowledge" >Grimgar Knowledge</a>
        </li>
        <li class={ url[3] == "people" ? "current_page_item" : "not_current_page_item"}>
          <a href="/people" >Grimgar People</a>
        </li>
        <li class={ url[3] == "item" ? "current_page_item" : "not_current_page_item"}>
          <a href="/item" >Grimgar Items / Shops</a>
        </li>
        <li class={ url[3] == "player" ? "current_page_item" : "not_current_page_item"}>
          <a href="/player" >Grimgar Heroes</a>
        </li>
        <li class={ url[3] == "rule" ? "current_page_item" : "not_current_page_item"}>
          <a href="/rule" >Homebrew Rules</a>
        </li>
        {user && user.is_staff ?  <li class={ url[3] == "new" ? "current_page_item" : "not_current_page_item"} >
          <a href="/new">+</a>
        </li> : ""}
        {user ? <li class={ url[3] == "account" ? "current_page_item" : "not_current_page_item"}>
          <a href="/account" >{`${user.name}`}</a>
        </li> :
        <li class={ url[3] == "login" || url[3] == "register" ? "current_page_item" : "not_current_page_item"}>
          <a href="/login" >Login</a>
        </li> }
      </ul>
    </div>
  );
}
