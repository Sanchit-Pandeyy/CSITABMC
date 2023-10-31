import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import List from "../components/Events/List";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './loader.css';



function EventsPage() {

  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false)
    }, 2000)
  }, [])


  return (
    <div className="App">
      <Navigation />

      {
        loading ?
          <div className='loader' >
            <ClimbingBoxLoader color="#000fff" size={20} />
          </div>

          :

          <div>
            <List showAll={true} title="All Events Organized By CSITA-BMC" />
            <Footer />
          </div>
      }

    </div>

  );
}

export default EventsPage;

