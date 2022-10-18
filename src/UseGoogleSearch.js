import {useState, useEffect} from 'react'
import API_KEY from './Keys'

const CONTEXT_KEY = "7c9db0949d7f9ca92";

// custom hook
const UseGoogleSearch = (term)=> {
   const [data, setData] = useState(null);

   useEffect(() => {
    const fetchData = async() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
        // get the response as jsons
        .then(response => response.json())
        .then(result => { setData(result)
        })
    }
    fetchData();
   },[term])
   // return data as object
   return { data }
};

export default UseGoogleSearch