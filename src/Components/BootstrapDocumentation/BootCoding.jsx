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
const [DismissibleAlerts] = useState(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    Warning! Something went wrong.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`);
  const [Animations] = useState(`<div class="alert alert-info" role="alert">
   For more information, visit <a href="#" class="alert-link">this link</a>.
</div>
`);
const [BasicUsage] = useState(`<div class="alert alert-success" role="alert">
    This is a success alert!
</div>
`);
const [Dropdownclass] = useState(`<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</div>
`);
const [Dropend] = useState(`<div class="dropdown">
   <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
       Right-Aligned Dropdown
   </button>
   <ul class="dropdown-menu dropdown-menu-end">
       <li><a class="dropdown-item" href="#">Option 1</a></li>
       <li><a class="dropdown-item" href="#">Option 2</a></li>
   </ul>
</div>
`);
const [CreatingForms] = useState(`<form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
`);
const [InlineForm] = useState(`<form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
</form>
`);
const [FlexboxGrid] = useState(`<div class="container">
    <div class="row">
        <div class="col-md-6">Column 1</div>
        <div class="col-md-6">Column 2</div>
    </div>
</div>
`);
const [CSSGrid] = useState(`<div class="d-grid gap-3">
    <div class="p-3 bg-primary text-white">Item 1</div>
    <div class="p-3 bg-secondary text-white">Item 2</div>
    <div class="p-3 bg-success text-white">Item 3</div>
</div>
`);
const [FlexboxUtilities] = useState(`<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">Centered</div>
`);
const [GridSystem] = useState(`<div class="row justify-content-center align-items-center" style="height: 100vh;">
  <div class="col-auto">Centered</div>
</div>
`);
const [TextAlignment] = useState(`<div class="text-center">Centered text</div>
`);
const [MarginAuto] = useState(`<div class="d-flex m-auto" style="height: 100vh;">Centered</div>
`);
const [quickstyling] = useState(`<div class="p-3 bg-primary text-white text-center">Quickly styled element</div>
`);
const [ClassStructure] = useState(`{property}-{side}-{size}
`);
const [justifycontent] = useState(`<div class="d-flex justify-content-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
`);
const [BootstrapSource] = useState(`npm install bootstrap
`);
  const [SourceFiles] = useState(`// Import Bootstrap functions and variables
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

// Override variables here
$primary: #ff5722;
$font-size-base: 1.2rem;

// Import rest of Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";
`);
const [CompileSASS] = useState(`sass custom.scss custom.css
`);
const [ModifyVariables] = useState(`@brand-primary: #ff5722;
@body-bg: #f8f9fa;
`);
const [CompileLESS] = useState(`lessc custom.less custom.css
`);
const [Triggers] = useState(`<button data-bs-toggle="modal" data-bs-target="#myModal">Open Modal</button>
`);
const [carouselitem] = useState(`<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="image1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="image2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="image3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`);
const [textlight] = useState(`<body class="bg-dark text-light">
  <!-- Content goes here -->
</body>
`);
const [dynamicallytoggle] = useState(`<button id="themeToggle" class="btn btn-secondary">Toggle Theme</button>

<script>
  document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
  });
</script>
 `);
const [togglethemes] = useState(`<body class="bg-dark text-light">
  <h1>Dark Theme</h1>
  <p>This is a dark-themed page.</p>
</body>
`);
const [Overriding] = useState(`<link href="bootstrap.min.css" rel="stylesheet">
<link href="custom.css" rel="stylesheet">
`);
  const [Specificity] = useState(`/* Override Bootstrap's default button color */
.btn-primary {
  background-color: #ff5722;
  border-color: #ff5722;
}
`);
const [Useimportant] = useState(`.btn-primary {
  background-color: #ff5722 !important;
}
`);
const [importingBootstrap] = useState(`$primary: #ff5722;  // Custom primary color
@import "bootstrap";
`);
const [Examplec] = useState(`<link href="bootstrap.min.css" rel="stylesheet">
<link href="custom.css" rel="stylesheet">

<!-- Custom styles in custom.css -->
<style>
  .btn-primary {
    background-color: #ff5722;
  }
</style>
`);





    
  return { IncludeBootstrap, DownloadingFiles, PackageManager, Importit, UsingBootstrap, Gridsystem, containerfluid, Customwritten, CustomCSS, Bootstrapensures, BreakpointsBootstrap, NavbarLink, ButtonsLink, CardsLink, AlertsLink, ModalsLink, FormsLink, NavigationBar, BasicStructure, Modalcomponent, buttonsdifferently, Largebutton,ButtonSizes, DismissibleAlerts, Animations, BasicUsage, Dropdownclass, Dropend, CreatingForms, InlineForm, FlexboxGrid, CSSGrid, FlexboxUtilities, GridSystem, TextAlignment, MarginAuto, quickstyling, ClassStructure, justifycontent, BootstrapSource, SourceFiles, CompileSASS, ModifyVariables, CompileLESS, Triggers, carouselitem, textlight, dynamicallytoggle, togglethemes, Overriding, Specificity, Useimportant, importingBootstrap, Examplec
    

  };


}

export default CodeExamples;
