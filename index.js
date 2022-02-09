import ReactDOM from "react-dom"
import logo from "../scrimba-build-react-info-site/src/images/logo_React_v3.png"
import '../scrimba-build-react-info-site/src/css/style.css'

function Header() {
   return (
         <header>
            <nav className="d-flex flex-row">
               <img src={logo} width="40px" height="40px" className="logoFlex" />
               <ul className="nav-items">
                  <li className="li-item">Pricing</li>
                  <li className="li-item">About</li>
                  <li className="li-item">Contact</li>
               </ul>
            </nav>
         </header>
   )
}

function MainContent() {
   return (
      <>
         <h1>Reasons I'm excited to learn React</h1>
         <ol>
            <li>It's a popular library, so I'll be
               able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
               if I know React</li>
         </ol>
      </>
   )
}

function Footer() {
   return (
         <footer>
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









