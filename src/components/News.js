import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem.js'
import loading from './DoubleRing.gif'

export default function News(p) {

  const [data, setdata] = useState([])
  const [Ree, setresult] = useState()
  const [load, setLoad] = useState(false)
  const [next, setnext] = useState(1)


  var url = `https://newsapi.org/v2/top-headlines?country=in&category=${p.category}&apiKey=296b9cc2eec24b79a33477ff6f8d3b3c&pagesize=21`


  const fetchdata = async () => {
    setLoad(true)

    var res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${p.category}&apiKey=296b9cc2eec24b79a33477ff6f8d3b3c&pagesize=21`)
    


    const result = await res.json()

    // console.log(result)
    setLoad(false)
    setresult(result.totalResults)

    setdata(result.articles)

  }

  useEffect(() => {
    fetchdata()
  }, [])



  // console.log(Ree)
  const handleNext = async () => {

    setLoad(true)

    console.log("next")
    setnext(next + 1)
    //  console.log(next) 
    
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${p.category}&apiKey=296b9cc2eec24b79a33477ff6f8d3b3c&page=${next + 1}&pagesize=21`)



    const result = await res.json()

    setdata(result.articles)
    setLoad(false)


  }

  const handlePrev = async () => {

    setLoad(true)
  
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${p.category}&apiKey=296b9cc2eec24b79a33477ff6f8d3b3c&page=${next - 1}&pagesize=21`)
     
    setnext(next - 1)

    const result = await res.json()

    setdata(result.articles)
    setLoad(false)
  }
  var title='on ' + p.category
  if(p.category==='general') title='of today'



  return (
    <div className='container-fluid my-5'  >
      {load &&
        (<div className="container-fluid text-center">
          <img src={loading} style={{ width: '17rem', height: '17rem' }} alt="Loading" />

        </div>)}


      {!load && <h1 className='my-4 text-center' style={{ fontFamily: 'Abril Fatface', fontSize: '70px', color: '#050000' }}>Top headlines  {title}</h1>}
      <div className="row my-3" >



        {
          !load && data.map(p => (
            <div className="col-lg-4 col-sm-6 my-3" key={p.url} >
              <Newsitem title={p.title ? p.title.slice(0, 80) : ""} url={p ? p.url : p.url} urlToImage={p.urlToImage ? p.urlToImage : 'https://th.bing.com/th/id/OIP.ts4ta01AXoKIElgyDmcfUQAAAA?w=212&h=173&c=7&r=0&o=5&dpr=1.3&pid=1.7'} dis={p.description ? p.description.slice(0, 150) : ""} />
            </div>

          ))
        }

        {!load && (<div className="container d-flex justify-content-between my-5">

          <button disabled={next <= 1} style={{ marginLeft: '6rem', backgroundColor: '#FF7000' }} type="button" className="btn btn-dark" onClick={handlePrev} >&laquo; Previous</button>
          <button disabled={next + 1 > Math.ceil(Ree / 21)} style={{ marginRight: '6rem', backgroundColor: '#FF7000' }} type="button " onClick={handleNext} className="btn btn-dark ">Next &raquo;</button>
        </div>)}

      </div>

    </div>
  )
}

//