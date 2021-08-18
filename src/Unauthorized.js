import React from 'react';
import { Link } from 'react-router-dom';


const Unauthorized = () => {
  return (

    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>404 HTML Template by Colorlib</title>
     
      {/*[if lt IE 9]>
		  
		  
		<![endif]*/}
      <meta name="robots" content="noindex, follow" />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! This Page Could Not Be Found</h2>
          <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
          <a href="/">Go To Login page</a>
        </div>
      </div>
    </div>

  )
}
export default Unauthorized;