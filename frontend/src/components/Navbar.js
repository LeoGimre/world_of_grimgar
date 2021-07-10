import React, { useEffect } from "react";

export default function Navbar() {
  var url = window.location.href;
  url = url.split("/");

  
  
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
          <a href="/player" >Grimgar Players</a>
        </li>
        <li class={ url[3] == "rule" ? "current_page_item" : "not_current_page_item"}>
          <a href="/rule" >Homebrew Rules</a>
        </li>
        <li  class={ url[3] == "new" ? "current_page_item" : "not_current_page_item"}>
          <a href="/new">+</a>
        </li>
      </ul>
    </div>
  );
}
