import React, { useEffect, useState } from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "3707d4cc397db4c62";

const useGoogleSearch = ( term ) => {
   const [data, setData] = useState(null);
//    getting the search result
   useEffect( () => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=
                ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData();
   },[term]) //data layer variable
   return {data}
}

export default useGoogleSearch