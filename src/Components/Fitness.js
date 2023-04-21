import React, { useContext } from 'react'
import Nav from './Nav'
import { store } from './ContextAPI'
import { Link } from 'react-router-dom'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Fitness= () => {
  const [data]=useContext(store)
        console.log(data)
  return (
    <>
    <Nav/>
    <div className='main-page'>
      <div className='latest'>
      <div className="page-heading">Fitness<hr className="hr-under"/></div>
       <div >
      {
       data.filter((item)=> {return item.category==="fitness" && item.id===42}).map((element)=>(
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
       data.filter((item)=> {return item.category==="fitness" && item.id===47}).map((element)=>(
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
       data.filter((item)=> {return item.category==="fitness" && item.id===44}).map((element)=>(
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
       data.filter((item)=> {return item.category==="fitness" && item.id===45}).map((element)=>(
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
       data.filter((item)=> {return item.category==="fitness" && item.id===46}).map((element)=>(
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
       data.filter((item)=> {return item.category==="fitness" && item.id===43}).map((element)=>(
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
            data.filter((item)=> {return item.category==="fitness" && item.id===48}).map((element)=>(
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
            data.filter((item)=> {return item.category==="fitness" && item.id===49}).map((element)=>(
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
            data.filter((item)=> {return item.category==="fitness" && item.id===50}).map((element)=>(
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
            data.filter((item)=> {return item.category==="fitness" && item.id===51}).map((element)=>(
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

export default Fitness