import React from 'react';
import './Property.css'
import dublin from '../../images/dublin.jpg'
import newYork from '../../images/newyork.jpg'
import London from '../../images/kondon.jpg'
import marrakech from '../../images/marrakech.jpg'
import useFecth from '../../CostumHook/useFetch';
import hotel from '../../images/hotel.jpg'
import appar from '../../images/appar.jpg'
import cabins from '../../images/cabins.jpg'
import villa from '../../images/villa.jpg'
function Property(props) {

    const {data,error,loading}= useFecth("/api/hotel/countByType")
    
   
    return (
        <div className='plist'>
            <div className="pListItem">
                <img className='plistImg' src={hotel}/>
                <div className="plistTitles">
                    <h1>Hotel </h1>
                   <h2>{data[0]} hotel</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className='plistImg' src={appar}/>
                <div className="plistTitles">
                    <h1>apartment</h1>
                    <h2>{data[1]} apartments</h2>
                </div>
            </div>
            <div className="pListItem">
                <img  className='plistImg'  src={cabins}/>
                <div className="plistTitles">
                    <h1>Resorts</h1>
                    <h2>{data[2]} resorts</h2>

                </div>
            </div>
            <div className="pListItem">
                <img className='plistImg' src={villa}/>
                <div className="plistTitles">
                    <h1>Villas</h1>
                    <h2>{data[3]} villa</h2>
                </div>
            </div>
        </div>
    );
}

export default Property;