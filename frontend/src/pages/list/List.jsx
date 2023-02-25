import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/header';
import './list.css'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';

import useFecth from '../../CostumHook/useFetch';

function List(props) {
    const location = useLocation()
    console.log(location)
    const [optionStatus,setoptionStatus] = useState(false)
    const [Destination,setDestination] = useState(location.state.Destination)
    const [date,setDate] = useState(location.state.date)
    const [opendate,setOpendate] = useState(false)

    const [min,setmin]=useState(undefined)
    const [max,setmax]=useState(undefined)

    
    const {data,error,loading,reFetch}= useFecth(`/api/hotel?city=${Destination}&min=${min||1}&max=${max||9999}`)
    console.log(data)

    const handleSearch2 = ()=>{
        reFetch()
    }


    return (
        <div>
            <Navbar/>
            <Header  type="list" />
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='lsTitle'> Search </h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" placeholder={Destination} />
                        </div>
                        <div className="lsItem">
                            <label>check-in Date</label>
                            <span onClick={()=>{setOpendate(!opendate)}}>{`${format(date[0].startDate,"MM/dd/yyyy")}`} to {`${format(date[0].endDate,"MM/dd/yyyy")}`} </span>
                            
                                {opendate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                               
                                />}
                            
                        </div>
                        <div className="lsItem">
                            <label className='option' onClick={()=>{setoptionStatus(!optionStatus)}}> Options </label>
                            {optionStatus &&<div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Min Price</span>
                                    <input type="number" className='lsOptionInput' onChange={(e)=>setmin(e.target.value)} />
                            </div>
                            <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Man Price</span>
                                    <input type="number" className='lsOptionInput' onChange={(e)=>setmax(e.target.value)}/>
                            </div>
                            </div>
                            }

                        </div>
                        <button className='btn' onClick={handleSearch2}>Search</button>
                    
                    </div>
                    <div className='listResult'> 
                    
                    {
                    data.map(item=>(
                        <SearchItem item={item} key={item._id}/>
                    ))    
                        
                        
                    }
                    
                    
                    </div>
                </div>
            </div>

        </div>
    );
}

export default List;