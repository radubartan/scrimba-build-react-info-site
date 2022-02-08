import ReactDOM from "react-dom"
import logo from "../scrimba-build-react-info-site/images/logo_React_v3.png"

function Page() {
   return (
       <div>
           <header>
               <nav>
                   <img src={logo} width="40px" />
               </nav>
           </header>
           <h1>Reasons I'm excited to learn React</h1>
           <ol>
               <li>It's a popular library, so I'll be 
               able to fit in with the cool kids!</li>
               <li>I'm more likely to get a job as a developer
               if I know React</li>
           </ol>
           <footer>
               <small>© 2021 Ziroll development. All rights reserved.</small>
           </footer>
       </div>
   )
}

ReactDOM.render(<Page />, document.getElementById("root"))


{/*
   My answers to the 'Custom Components Quiz'

   What is a React component?
	> a component allows us to write code that can be executed over and over again
	> a function that returns React elements is considered a component in React


	What's wrong with this code?
		function myComponent() {
		    return (
		        <small>I'm tiny text!</small>
		    )
		}
	> the function name has camelCase not PascalCase
	 
	
	What's wrong with this code?
		function Header() {
		    return (
		        <header>
		            <nav>
		                <img src="./react-logo.png" width="40px" />
		            </nav>
		        </header>
		    )
		}
		ReactDOM.render(Header(), document.getElementById("root"))
	> the ReactDOM.render does not have the JSX function call:
      ReactDOM.render(<Header />, document.getElementById("root"))

*/}