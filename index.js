import reactDOM from "react-dom"
import logo from "../scrimba-build-react-info-site/images/logo_React_v3.png"

function Header() {
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank" href="https://reactjs.org/docs/getting-started.html">
               <img src={logo} width="40" className="d-inline-block align-top" />
               Why I'm excited to learn React
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item active">
                     <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   )
}

function MainContent() {
   return (
      <>
         <h3>Reasons I like to rean React</h3>
         <ol>
            <li>React will blend my strength in front end design with my desire to build full stack apps</li>
            <li>I will get to implement JavaScript & React UI goodies seen on CodePen</li>
            <li>Using React makes it exciting to be on the cutting edge of front end technologies</li>
            <li>At some point I want to build SASS businesses based on the React sites I build</li>
            <li>I will get to work professionally on website UIs - which is what I want to do</li>
         </ol>
      </>
   )
}

function Footer() {
   return (
      <>
         <p className="text-muted"><em>© 2022 Bartan Software Development. All rights reserved.</em></p>
      </>
   )
}

reactDOM.render(
   <div>
      <Header />
      <MainContent />
      <Footer />
   </div>,
   document.getElementById("root")
)





// <h3>Why I am excited to learn React</h3>
// <ol>
//    <li>React will blend my strength in front end design with my desire to build full stack apps</li>
//    <li>I will get to implement JavaScript & React UI goodies seen on CodePen</li>
//    <li>Using React makes it exciting to be on the cutting edge of front end technologies</li>
//    <li>At some point I want to build SASS businesses based on the React sites I build</li>
//    <li>I will get to work professionally on website UIs - which is what I want to do</li>
// </ol>