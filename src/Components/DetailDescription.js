import React, { useContext } from 'react'
import { store } from './ContextAPI'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailDescription = () => {
  const [data]=useContext(store);
  var {id}=useParams();
  id=Number(id);
  return (
    <>
     <header className='header'>
         <div className='head2'>
            <div className='the the2'>The </div>
            <div className='siren'> Siren</div>
         </div>
         <div className='get'>Get Started</div>
     </header>
     <hr/>
    <div>
      {
        data.filter((item)=>{return item.id===id}).map((element)=>(
           <div  className='detail-content' >
              <div key={element.id} className='detail_title' >
                <h1 >{element.title}</h1>
              </div>
              <div  className='more-avatar'>
                    <img src={element.avatar} alt=""></img>
                    <div className='avatar_data'>
                       <p className='name'>{element.name}</p>
                       <p className='more-date'>{element.date}</p>
                    </div>
                </div>
              <img className='detail-content-img' src={element.image} alt={element.title}></img>
              <div className='detail-para'>
                 <p>{element.content}</p>
              </div>
          </div>
       ))
      }
    </div>
    
    <footer>
      <h2>More from The Siren</h2>
      <hr/>
      <div className='latest-home'>
        {
          data.filter((item)=>{return item.id===34}).map((element)=>(
            <div className='latest2' key={element.id}>
                <Link className='link'><img src={element.image} alt={element.title}></img></Link>
                <Link className='link'><h4>{element.title}</h4></Link>
                <div  className='more-avatar'>
                    <img src={element.avatar} alt=""></img>
                    <div className='avatar_data'>
                       <p className='name'>{element.name}</p>
                       <p className='more-date'>{element.date}</p>
                    </div>
                </div>
            </div>
          ))
        }

        {
          data.filter((item)=>{return item.id===26}).map((element)=>(
            <div className='latest2' key={element.id}>
                <Link className='link'><img src={element.image} alt={element.title}></img></Link>
                <Link className='link'><h4>{element.title}</h4></Link>
                <div  className='more-avatar'>
                    <img src={element.avatar} alt=""></img>
                    <div className='avatar_data'>
                       <p className='name'>{element.name}</p>
                       <p className='more-date'>{element.date}</p>
                    </div>
                </div>
            </div>
          ))
        }

        {
          data.filter((item)=>{return item.id===45}).map((element)=>(
            <div className='latest2' key={element.id}>
                <Link className='link'><img src={element.image} alt={element.title}></img></Link>
                <Link className='link'><h4>{element.title}</h4></Link>
                <div  className='more-avatar'>
                    <img src={element.avatar} alt=""></img>
                    <div className='avatar_data'>
                       <p className='name'>{element.name}</p>
                       <p className='more-date'>{element.date}</p>
                    </div>
                </div>
            </div>
          ))
        }
      </div>
    </footer>
    


    </>
  )
}

export default DetailDescription