import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Search from './Search';
import logo from './logo.png';
import{ Avatar } from "@material-ui/core";
import  AppsIcon  from "@material-ui/icons/Apps";


function home() {
  return (
    <div className='home'>
        
        <div className='home__header'>
        <div className='home__headerleft'>
        <Avatar></Avatar>
        <AppsIcon></AppsIcon> 
          <Link to={'gmail'}>Gmail</Link>
          <Link to={'images'}>Images</Link>
        
        </div>
        <div className='home__headerright'>
          <Link to={'about'}>About</Link>
          <Link to={'store'}>Store</Link>
          
        </div>
        </div>
        <div className='home__body'>
          <img src={logo} alt='logo'></img>
          <div className='home__inputContainer'>
            <Search  />
          </div>
        </div>
        </div>
    
  )
}

export default home