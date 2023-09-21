import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import '../Assets/CSS/main.css';
import { selectUser } from '../Redux/userSlice'
import { Link } from 'react-router-dom';
function Home() {
  // Use useSelector to access the 'user' state from the Redux store
  const user=useSelector(selectUser); 

  return (
    <div className='homepic'>
      <div>
        <nav className='topnav'>
          <input
            className="sbar"
            name="text"
            type="text"
            placeholder="   Search..."
          ></input>
          <ul>
            <div className='active'>
              <Link to='/'><li><a href="#">Log Out</a></li></Link>
            </div>
          </ul>
        </nav>
        <div className='nav-bar-name'><h1>Hello, {user ? user.email : ''}</h1></div>
        {/* Use user.email to display the user's email */}
        <nav className='leftnav'>
          <label className="navleft"></label>
          <ul>
            <div className='navbar'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Recharge</a></li>
              <li><a href="#">Offers</a></li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
