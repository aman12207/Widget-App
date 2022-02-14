import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Search = () => {
  const[term,setTerm] = useState("programming");
  const[debouncedTerm,setDebouncedTerm]= useState(term);
  const[results,setResults] = useState([]);
  const handleChange = (event) => {
    setTerm(event.target.value);
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return ()=> {
      clearTimeout(timeoutId);
    }
  },[term])

  useEffect(()=>{
    const search = async()=>{   // Here we are using helper function because we cannot use async directly in callback function 
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
        params: {
          action : 'query',
          list : 'search',
          format :'json',
          origin : '*',
          srsearch : term
        }
      });
      setResults(data.query.search);
    }
    search();
  },[debouncedTerm])

  const renderedResults = results.map((result)=> {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a className='ui button'
            href={`https://en.wikipedia.org?currid=${result.pageid}`}>
              Go
            </a>
        </div>
        <div className='content'>
        <div className='header'>
          {result.title}
        </div>
        <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
        </div>
      </div>
    )
  })
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => handleChange(e)}
            className="input"
          />
        </div>
      </div>
      <div className='ui celled list'>
        {renderedResults}
      </div>
    </div> 
  );
};

export default Search;