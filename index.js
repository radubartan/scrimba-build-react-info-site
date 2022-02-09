import ReactDOM from "react-dom"
import logo from "../scrimba-build-react-info-site/src/images/logo_React_v3.png"
import '../scrimba-build-react-info-site/src/css/style.css'

function Header() {
   return (
         <header>
            <nav className="nav">
               <img src={logo} className="nav-logo"/>
               <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
               </ul>
            </nav>
         </header>
   )
}

function MainContent() {
   return (
      <div className="mainContent">
         <h1 className="font_FiraSansCondensed_extraBold800">Reasons I'm excited to learn React</h1>
         <ol className="font_FiraSansCondensed_regular400">
            <li>It's a popular library, so I'll be
               able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
               if I know React</li>
         </ol>
      </div>
   )
}

function Footer() {
   return (
         <footer className="footer">
            <small>© 2021 Ziroll development. All rights reserved.</small>
         </footer>
   )
}

function Page() {
   return (
      <div>
         <Header />
         <MainContent />
         <Footer />
      </div>
   )
}

ReactDOM.render(<Page />, document.getElementById("root"))









