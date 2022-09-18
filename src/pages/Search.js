import React, { useState } from 'react'
import './Search.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function Search({ hideButtons = false }) {
    const [state, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useNavigate();
     
    const search = e => {
        console.log("hit hit ")
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
     
        history('/search');
    }

  return (
    <form className='search'>
        <div className='search_input'>
            <SearchIcon className="search_inputIcon" />
            <input value={input} onChange={e => setInput(e.target.value)} />
            <MicIcon/>
        </div>
         {!hideButtons ? ( <div className='search_buttons'>
            <Button type='submit' onClick={search} variant="outlined">
            Google Search
            </Button>
            <Button variant='outlined'>
            I'm Feeling Lucky
            </Button>
        </div>) : (
            <div className='search_buttons'>
            <Button className='search_buttonsHidden' type='submit' onClick={search} variant="outlined">
            Google Search
            </Button>
            <Button className='search_buttonsHidden' variant='outlined'>
            I'm Feeling Lucky
            </Button>
        </div>
        )
         }
    </form>
  )
}

export default Search