import React from "react";

export default function Nav(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">George's Portfolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/">About Me<span class="sr-only"></span></a>
            <a class="nav-item nav-link" href="/Projects">Projects</a>
            <a class="nav-item nav-link" href="/Contact">Contact</a>
            <a class="nav-item nav-link" href="/Resume">Resume</a>
          </div>
        </div>
      </nav>
    );
}