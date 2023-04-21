import React from 'react'
import Nav from './Nav'
import { useContext } from 'react'
import { store } from './ContextAPI'
import { Link } from 'react-router-dom'
import {AiOutlineArrowDown} from 'react-icons/ai'


const Bollywood = () => {
  const [data] = useContext(store);
  return (
    <>
    <Nav/>
    <div className='main-page'>
      <div className='latest'>
      <div className="page-heading">Bollywood <hr className="hr-under"/></div>
       <div >
      {
       data.filter((item)=> {return item.category==="bollywood" && item.id===2}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }
      </div>

      <div >
      {
       data.filter((item)=> {return item.category==="bollywood" && item.id===3}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }
      </div>

      <div >
      {
       data.filter((item)=> {return item.category==="bollywood" && item.id===4}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }
      </div>

      <div >
      {
       data.filter((item)=> {return item.category==="bollywood" && item.id===5}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }
      </div>

      <div >
      {
       data.filter((item)=> {return item.category==="bollywood" && item.id===6}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }
      </div>

      <div >
      {
       data.filter((item)=> {return item.category==="bollywood" && item.id===7}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }
      </div>
      </div>
        
      <div className='latest'>
        <div className="page-heading">Top Post <hr className="hr-under"/></div>

        <div >
          {
            data.filter((item)=> {return item.category==="bollywood" && item.id===8}).map((element)=>(
            <div className='latest2' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
             </div>
           ))
          }
      </div>

      
      <div >
          {
            data.filter((item)=> {return item.category==="bollywood" && item.id===9}).map((element)=>(
            <div className='latest3' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
                <h1>1</h1>
             </div>
           ))
          }
          <hr></hr>
      </div>

      <div >
          {
            data.filter((item)=> {return item.category==="bollywood" && item.id===10}).map((element)=>(
            <div className='latest3' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
                <h1>2</h1>
             </div>
           ))
          }
          <hr></hr>
      </div>

      
      <div >
          {
            data.filter((item)=> {return item.category==="bollywood" && item.id===11}).map((element)=>(
            <div className='latest3' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
                <h1>3</h1>
             </div>
           ))
          }
          <hr></hr>
      </div>
       </div>
      <div className='advertisement'>Advertisement</div>
  
  </div>

  <div className='load-more'><AiOutlineArrowDown/>LOAD MORE</div>

    </>
  )
}

export default Bollywood