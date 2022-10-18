import React, { useState } from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";


function Search({ hideButton  = false}) {
const [{}, dispatch] = useStateValue();
  // state = how u write variables
  const [ input, setInput] = useState("");

  const navigate = useNavigate();
  const search = e =>{
    e.preventDefault();
    console.log('u hit the search button >> ', input);
dispatch({
  type: actionTypes.SET_SEARCH_TERM,
  term: input,
})

    navigate('/search');
  }
  return (
    <form className='search'>
      <div className='search__input'>
        <MicIcon />
          <input value={input} onChange={e => setInput(e.target.value)} /> 
          
          <SearchIcon className='search__inputIcon'></SearchIcon>
          
        
      </div>
      {!hideButton ? (
        <div className='search__button'>
        <Button  type='submit' onClick={search} variant='outlined'> NSE Search </Button>
      </div>) : (
        <div className='search__button'>
        <button className='search__buttonHidden' type='submit' onClick={search} variant='outlined'> NSE Search </button>
          </div>
      ) }
   
    </form>
  );
}

export default Search