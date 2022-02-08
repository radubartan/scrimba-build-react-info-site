import ReactDOM from "react-dom";
import logo from '../scrimba-build-react-info-site/images/logo_React_v1.png';

function TemporaryName() {
   return (
      <>
         <img src={logo} width='40px' alt="logo"/>
         <h1>Fun facts about React</h1>
         <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
         </ul>
      </>
   )
}

ReactDOM.render(<TemporaryName/>, document.getElementById("root"))







