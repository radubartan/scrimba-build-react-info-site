import logo from '../images/react-icon-small.png'

function Navbar() {
   return (
      <nav className='nav d-flex flex-row'>
         <div className='logo'><img src={logo}/></div>
         <div className='reactFacts'>ReactFacts</div>
         <div className='reactCourse'>React Course - Project 1</div>
      </nav>
   )
}

export default Navbar



