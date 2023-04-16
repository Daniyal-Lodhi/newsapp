import React from 'react'
import loading from './Spinner-1s-200px.gif'

function Spinner()     
  {
    return (
      <div className="text-center" >
        <img src={loading} alt="loading" height={'90px'} />
      </div>
    )
  
}

export default Spinner
