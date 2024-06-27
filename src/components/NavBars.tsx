import './NavCss1.css';

function NavBar(){
    return <div>
<nav>
      <input type="checkbox" id="check"/>
      <label  className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">DesignX</label>
      <ul>
        <li><a className="active" href="#">Homes</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
    </div>
}

export default NavBar;