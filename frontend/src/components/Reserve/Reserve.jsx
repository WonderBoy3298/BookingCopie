import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Reserve.css'
import useFecth from '../../CostumHook/useFetch';


function Reserve(props) {

    const {data,error,loading}= useFecth(`/api/hotel/hotelrooms/${props.hotelId}`) 
    
    const hotelrooms=data.list
    const [selectedrooms,setselectedrooms] = useState([])
    const handleSelect = (e)=>{

        const checked =e.target.checked 
        const value = e.target.value
        setselectedrooms(checked ?
             [...selectedrooms,value] 
             : selectedrooms.filter( (item) => item !== value)  )
        console.log("selected rooms")
       
    }

    const handleClick = ()=>{

    }
    
    return (
        <div className='reserve'>
            <div className="rContainer">
                <FontAwesomeIcon icon = { faCircleXmark } className="rclose" onClick={()=>{props.setopen(false)}}/>
                <span>  Select your room :  </span> 
                {hotelrooms?.map(item=>(

                        <div className='rItem'>
                            <div className='rItemInfo'>
                                <div className="rTitle">{item.title}</div>
                                <div className="rDesc">{item.desc}</div>
                                <div className="rMax">Max People : {item.maxPeople}</div>
                                <div className='rPrice'>{item.price}</div>
                            </div>

                            {item.roomNumbers.map(n=>(
                            <div className="room">
                                <label>{n.number}</label>
                                <input type="checkbox" value={n._id} onChange={handleSelect}/>
                            </div>
                            
                            ))}
                        </div>

                ))}
                <button onClick={handleClick} className="rButton">Reserve Now</button>
            </div>
        </div>
    );
}

export default Reserve;