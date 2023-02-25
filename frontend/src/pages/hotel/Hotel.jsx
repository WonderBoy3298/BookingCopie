
import React, { useContext } from 'react';
import { faBed, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import useFecth from '../../CostumHook/useFetch';



import './Hotel.css'
import { SearchContext } from '../../context/SearchContext';
function Hotel(props) {
  const location = useLocation()
  
  const itemId = location.pathname
  const id = itemId.split("/")
  console.log(id[2])
  const {data,error,loading}= useFecth(`/api/hotel/find/${id[2]}`)  
  console.log(data)
  

  const {city,date} = useContext(SearchContext) 
  console.log(date[0].endDate)

 const MilPerDay = 1000*60*60*24
  function diffDays(date1,date2){
    const timeDiff = Math.abs(date2.getTime()-date1.getTime())
    const diffDays = Math.ceil(timeDiff/MilPerDay)
    return diffDays 

  }

const days = (diffDays(date[0].endDate,date[0].startDate))
  
const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ];
    
      
    return (
        <div>
          <Navbar/>
          <Header type="list"/>
          <div className="hotelContainer">
            <div className="hotelWrapper">
                    <button className='bookNow'>Reserve or Book Now </button>
                    <h1 > {data.name} </h1> 
                    <div className='hotelAdress'>
                       
                        <FontAwesomeIcon icon= {faLocationDot} />
                        <span>{data.adress}</span> 
                    </div>
                    <span className='HotelDistance'>{data.distance} from center</span>
                    <span className='HotelPrice'>Book a stay over {data.cheapestPrice}</span>
               
                <div className="hotelImg">
                    {photos.map(item=>(
                        
                        <div className='hotelimgWrraper'>
                            <img className='hotelImg' src = {item.src} />
                        </div>
                    ))}

                </div>
                <div className="hotelDetails">
                    <div className="hotelDetailsText">
                        <h1 className='hotelTitle'>{data.name}</h1>
                        <p className='hotelDesc'>
                           {data.desc}
                        </p>
                    </div>
                    <div className="hotelDetailsPrice">
                        <h1>Perfect for a -night stay!</h1>
                        <span>
                            Located in the real heart of Krakow, this property has an
                            excellent location !
                        </span>
                        <h2>
                            <b>{days*data.cheapestPrice} $</b><span> {days} nights</span>
                        </h2>
                        <button>Reserve or Book Now!</button>

                    </div>    
                </div>


            </div>



          </div>
        <MailList/>
        <Footer/>
        </div>
        
    );
}

export default Hotel;