import React from 'react';
import './MailList.css'
function MailList(props) {
    return (
        <div className='mail'>
            <h1 className="title">Save Time,Save money!</h1>
            <span>Sign up and we'll send the best deals to you </span>
            <div className='mailInputContainer'>
                <input type="text"  placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default MailList;