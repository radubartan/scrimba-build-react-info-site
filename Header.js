import logo from "../scrimba-build-react-info-site/src/images/logo_React_v3.png"

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

export default Header;



