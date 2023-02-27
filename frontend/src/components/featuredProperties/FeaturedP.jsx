import React from 'react';
import './FeaturedP.css'
import dublin from '../../images/dublin.jpg'
import newYork from '../../images/newyork.jpg'
import London from '../../images/kondon.jpg'
import marrakech from '../../images/marrakech.jpg'
import useFecth from '../../CostumHook/useFetch';
function FeaturedP(props) {

    const {data,error,loading}= useFecth("/api/hotel?limit=4")
    
    return (

        <div className='fp'>
           {data.map((item)=>(
                 <div className='fpItem' key={item._id}>
                 <img className='fpImage' src={dublin}/>
                 <span className='fpName'>{item.name}</span>
                 <span className='fpCity'>{item.city}</span>
                 <span className='fpPrice'>Starting from {item.cheapestPrice}</span> 
                 {item.rating &&<div className="fpRating"> 
                     <button>item.rating</button> 
                     <span>Excellent</span> 
                 </div>}
             </div>
           )) 
               }
           
        </div>
    );
}

export default FeaturedP;