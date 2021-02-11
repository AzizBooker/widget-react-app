import React, { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  //Empty Array runs at intial arary  ''
  //Nothing runs at intaly render and every render after  ' '
  //Array with some elment runs at intial render and ever rerender if that same elment data has changed [term]

  useEffect(() => {
     
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
      console.log(data.query.search);
    };
    if(term && !results.length){
        search()
    }
    const timeoutId=setTimeout(()=>{

        if (term) {
          search();
        }
    },450);
    
    //Clears Timeout
    return ()=>{
        clearTimeout(timeoutId)
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
      </div>

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
