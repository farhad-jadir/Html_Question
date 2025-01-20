import React, { useState } from "react";

function CodeExamples() {
  const [IncludeBootstrap] = useState(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
`);
const [DownloadingFiles] = useState(`<link href="css/bootstrap.min.css" rel="stylesheet">
<script src="js/bootstrap.bundle.min.js"></script>
`);
const [PackageManager] = useState(`npm install bootstrap
`);
const [Importit] = useState(`@import "node_modules/bootstrap/dist/css/bootstrap.min.css";
`);
const [UsingBootstrap] = useState(`@import "bootstrap/scss/bootstrap";
`);
const [Gridsystem] = useState(`@import "bootstrap/scss/bootstrap";
    `);
const [containerfluid] = useState(`<div class="container">Fixed-width container</div>
<div class="container-fluid">Full-width container</div>
`);
const [Customwritten] = useState(`<button class="btn btn-primary">Bootstrap Button</button>
`);
    const [CustomCSS] = useState(`<style>
.my-button {
  background-color: blue;
  color: white;
}
</style>
<button class="my-button">Custom Button</button>
`);
const [Bootstrapensures] = useState(`<div class="row">
  <div class="col-12 col-md-6">Responsive Column</div>
  <div class="col-12 col-md-6">Responsive Column</div>
</div>
`);
const [BreakpointsBootstrap] = useState(`<div class="col-12 col-md-6 col-lg-4">Responsive Column</div>
`);
const [NavbarLink] = useState(`<nav class="navbar navbar-expand-lg navbar-light bg-light">...</nav>
`);
const [ButtonsLink] = useState(`<button class="btn btn-primary">Click Me</button>
`);
const [CardsLink] = useState(`<div class="card">...</div>
`);
const [AlertsLink] = useState(`<div class="alert alert-success">Success Message</div>
`);
const [ModalsLink] = useState(`<div class="modal">...</div>
`);
const [FormsLink] = useState(`<form>...</form>
`);
const [NavigationBar] = useState(`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
    </ul>
  </div>
</nav>
`);
const [BasicStructure] = useState(`<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="Image">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`);
const [Modalcomponent] = useState(`<!-- Trigger Button -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Launch Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Content inside the modal.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`);
const [buttonsdifferently] = useState(`<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-danger">Danger Button</button>
`);
  const [Largebutton] = useState(`<button class="btn btn-primary btn-lg">Large Button</button>
<button class="btn btn-secondary btn-sm">Small Button</button>
`);
  const [ButtonSizes] = useState(`<button class="btn btn-outline-primary">Outline Button</button>
`);



    
  return { IncludeBootstrap, DownloadingFiles, PackageManager, Importit, UsingBootstrap, Gridsystem, containerfluid, Customwritten, CustomCSS, Bootstrapensures, BreakpointsBootstrap, NavbarLink, ButtonsLink, CardsLink, AlertsLink, ModalsLink, FormsLink, NavigationBar, BasicStructure, Modalcomponent, buttonsdifferently, Largebutton,ButtonSizes 
    

  };


}

export default CodeExamples;
