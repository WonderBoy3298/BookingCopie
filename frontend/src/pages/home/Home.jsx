import React from 'react';
import Featured from '../../components/featured/featured';
import FeaturedP from '../../components/featuredProperties/FeaturedP';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import Property from '../../components/propertyList/Property';
import './home.css'
import useFecth from '../../CostumHook/useFetch';

function Home(props) {
    const {data,error,loading}= useFecth(`/api/hotel`)  
    console.log(data)
    return (

        <div>
            <Navbar/>
            <Header/>
            <div className='homeContainer'>
                <Featured/>
                <h1 className='homeTitle'>Browse by property type</h1>
                <Property/>
                <h1 className='homeTitle'>Homes guests love</h1>
                <FeaturedP/>
                <MailList/>
                <Footer/>
            </div>
            
            
            
        </div>
    );
}

export default Home;