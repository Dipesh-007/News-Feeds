import React from 'react'

export default function Newsitem(p) {
  return (
    <div >
      <div className="card container-fluid" style={{ width: '20rem', height: '31.31rem', backgroundColor: "#F5EBE0", border: '0px' ,borderRadius:'15px'}}>
        <img className="card-img-top my-2" src={p.urlToImage} style={{ height: '10rem', width: '100%', border: '.1px',borderRadius:'15px' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: '600',height:'6rem' }}  >{p.title}..</h5>
          <p className="card-text" style={{ height: '7.5rem' }}>{p.dis}...</p>
          <a href={p.url} target="_blank" className="btn my-3" style={{ backgroundColor: "#ffb627" }} >Read More</a>
        </div>
      </div>
 </div>
  )
}
