import React from 'react';
import './featured.css'
import dublin from '../../images/dublin.jpg'
import useFecth from '../../CostumHook/useFetch';
import marrakech from '../../images/marrakech.jpg'
import paris from '../../images/paris2.jpg'


function Featured(props) {

    const {data,error,loading}= useFecth("/api/hotel/countByCity?cities=dublin,marrakech,paris")
    console.log(data)

    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img src={dublin}/>
                <div className='featuredTitle'>
                    <h1>Dublin </h1>
                    <h1>{data[0]} properties</h1>
                </div>
            </div>
            <div className='featuredItem'>
                <img src={marrakech}/>
                <div className='featuredTitle'>
                    <h1>marrakech </h1>
                    <h1>{data[1]} properties</h1>
                </div>
            </div>
            <div className='featuredItem'>
            <img src={paris}/>
                <div className='featuredTitle'>
                    <h1>paris</h1>
                    <h1>{data[2]} properties</h1>
                </div>    
            </div>
        </div>  
    );
}

export default Featured;