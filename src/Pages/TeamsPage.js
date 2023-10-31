import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Tlist from '../components/Tlist/Tlist';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './loader.css';

const TeamsPage = () => {
 
  const [loading, SetLoading]= useState(false);

  useEffect(()=>{
  SetLoading(true);
  setTimeout(()=>{
    SetLoading(false)
  },2000)
},[])

  return (
    <div>
      <Navigation />
      {loading ? 
        <div className='loader' >
            <ClimbingBoxLoader color="#000fff" size={20} />
          </div>
      : 
   
        <div>
        <Tlist />
        <Footer />
        </div>
      }
      
    </div>
  );
};

export default TeamsPage;
