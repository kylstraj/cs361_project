import React from 'react';
import { Link } from 'react-router-dom';
import {monthNumToName, monthNameToNum, getCurMonth, getCurYear, getNextMonth, getNextMonthYear, getPrevMonth, getPrevMonthYear} from '../lib/monthFunctions';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={"/month/" + monthNumToName(getCurMonth()) + "/" + getCurYear()}>Monthly View</Link>
    <Link to="/week">Weekly View</Link>
  </nav>
);

export default NavBar;
