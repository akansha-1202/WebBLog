import React from 'react'
import { useContext } from 'react'
import { store } from './ContextAPI'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import {AiOutlineArrowDown} from 'react-icons/ai'


const Home = () => {
  const [data] = useContext(store);
  return (
    <>
    <Nav/><br></br>
    <div className='home-image-container'>
    <div className='images'>
    {
      data.filter((item)=>{return item.category==="home" && item.id===1}).map((element)=>(
        <div id='bollywood-image' key={element.id}>
           <img src={element.image} alt={element.image}></img>
        </div>
      ))
    }
    
    {
      data.filter((item)=>{return item.category==="home" && item.id===53}).map((element)=>(
        <div id='food-image' key={element.id}>
           <img src={element.image} alt={element.image}></img>
        </div>
      ))
    }
      </div>
    {
      data.filter((item)=>{return item.category==="home" && item.id===52}).map((element)=>(
        <div id='hollywood-image' key={element.id}>
           <img src={element.image} alt={element.image}></img>
        </div>
      ))
    }
    </div>



    <div className="page-heading">The Latest <hr className="hr-under"/></div>
      <div className='latest-home'>
      <br/>
      {
           data.filter((item)=> {return item.category==="bollywood" && item.id===5}).map((element)=>(
            <div className='latest2' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
             </div>
         ))   
       }

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

       
       {
           data.filter((item)=> {return item.category==="technology" && item.id===28}).map((element)=>(
            <div className='latest2' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
             </div>
         ))   
       }
    </div>

    <div className='main-page'>
      <div className='latest'>
         <div className="page-heading"> Latest Articles <hr className="hr-under"/></div>
      {
       data.filter((item)=> {return item.category==="hollywood" && item.id===16}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }

{
       data.filter((item)=> {return item.category==="food" && item.id===37}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }

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

      {
       data.filter((item)=> {return item.category==="home" && item.id===54}).map((element)=>(
            <div className='latest1' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                </div>
             </div>
         ))
       }

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


    <div className='latest'>
        <div className='home-advertisement'>Advertisement</div>

        <div className="page-heading">Top Post <hr className="hr-under"/></div>

        {
            data.filter((item)=> {return item.category==="food" && item.id===40}).map((element)=>(
            <div className='latest3' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
                <h1>1</h1>
             </div>
           ))
          }

         {
            data.filter((item)=> {return item.category==="hollywood" && item.id===13}).map((element)=>(
            <div className='latest3' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
                <h1>2</h1>
             </div>
           ))
          }
          {
            data.filter((item)=> {return item.category==="technology" && item.id===30}).map((element)=>(
            <div className='latest3' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
                <h1>3</h1>
             </div>
           ))
          }
          {
            data.filter((item)=> {return item.category==="fitness" && item.id===50}).map((element)=>(
            <div className='latest3' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
                <h1>4</h1>
             </div>
           ))
          }
      </div>
    </div>

    <div className="page-heading">Latest Stories<hr className="hr-under"/></div>
      <div className='latest-home'>
      <br/>
      {
           data.filter((item)=> {return item.category==="technology" && item.id===28}).map((element)=>(
            <div className='latest2' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
             </div>
         ))   
       }

       {
           data.filter((item)=> {return item.category==="fitness" && item.id===50}).map((element)=>(
            <div className='latest2' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
             </div>
         ))   
       }

       
       {
           data.filter((item)=> {return item.category==="food" && item.id===33}).map((element)=>(
            <div className='latest2' key={element.id}>
               <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.image} alt={element.title}></img></Link>
                <div className='content'>
                   <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.title}</h4></Link>
                </div>
             </div>
         ))   
       }
    </div>

    <div className='load-more'><AiOutlineArrowDown/>LOAD MORE</div>
  </>
  )
}

export default Home