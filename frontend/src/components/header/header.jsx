import {React,useContext,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faCalendarDays, faCar, faDice, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import './header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
function Header(props) {

    const {user} = useContext(AuthContext)
    console.log(`user ${user}`)
    const [opendate,setOpendate] = useState(false)
    const [Destination,setDestination] = useState("")
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const navigate = useNavigate()
      const {dispatch}=useContext(SearchContext)
      const handleSearch = ()=>{

        dispatch({type:"NEW_SEARCH",payload:{city:Destination,date}})
        navigate('/hotels',{state:{Destination,date}})
        
      }
    return (
        <div className='header'>
            <div className='headerContainer'>
                <div className='headerList'>
                    
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon= {faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon= {faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon= {faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon= {faTaxi} />
                        <span>Attractions</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon= {faDice} />
                        <span>Airport taxis</span>
                    </div>

                </div>
                {props.type!="list" &&<>
                <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                <p className='headerDesc'>Get rewarded for your travels unlock instant saving of 10%  or more with 
                    a free booking
                </p>
                 {!user && <button className='headerBtn'>Sign in / Register </button>}
                 <div className="headerSearch">
                    <div className='headerSearchItem'>
                        
                        <FontAwesomeIcon icon={faBed} className='headerIcon'   />
                        <input  type="text" placeholder='Where are you going ?' onChange={(e)=>{setDestination(e.target.value)}} className='headerSearchInput' />

                    </div>
                    <div className='headerSearchItem a'>

                    
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'   />
                        <span onClick={()=>{setOpendate(!opendate)}} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")}`}
                        to {`${format(date[0].endDate,"MM/dd/yyyy")}`}
                        </span>
                        {
                        opendate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />
                        }


                    </div>
                    <div className='headerSearchItem'> 
                       
                        <FontAwesomeIcon icon={faPerson} className='headerIcon'   />
                        <span className='headerSearchText'>2 adults 2 children 1 room </span>
                    
                    </div>
                    <div className='headerSearchItem'> 
                       
                       <button className='headerBtn' onClick={()=>{handleSearch()}}>Search</button>
                   
                   </div>

                 </div>
                 </>
}

            </div>

        </div>
    );
}

export default Header;