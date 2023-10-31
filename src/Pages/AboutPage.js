import React, { useState, useEffect } from 'react';
import Navigation from "../components/Navigation/Navigation";
import ImG2 from "../Assets/partners/about.jpg";
import Footer from "../components/Footer/Footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './loader.css';

const AboutPage = () => {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false)
    }, 2000)
  }, [])


  return (
    <div>
      <Navigation />
      <div className="nav-ignore"></div>
      {loading ? 

        <div className='loader' >
          <ClimbingBoxLoader color="#000fff" size={20} />
        </div>

       : 
       <div>
        <div className="about">
          <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
              <img src={ImG2} alt="" className="about-img" />
            </div>
          </div>
          <div className="about-right">
            <h1 className="a-title">About Us</h1>
            <div className="sep">
              <p className="a-sub" data-aos="fade-left">
                <span style={{ fontWeight: "bold" }}>CSIT Association of BMC</span>{" "}
                is a non-profitable organization inside Butwal Multiple Campus
                created for the welfare of CSIT Students by the CSIT students and
                operating actively since 2016
              </p>
              <br />
              <p className="a-desc" data-aos="fade-left" data-aos-delay={200}>
                We have been conducting several tech and non-tech workshops
                internally and helping students to connect with national tech
                community. Similarly, we also play a part in assisting our college
                department for technical assistance and provide suggestions based on
                technology criteria.
              </p>
              <br />
              <p className="a-desc" data-aos="fade-left" data-aos-delay={300}>
                We believe that the students should be provided with the relevant
                skills and platform to prepare them for their career and at last we are at Butwal
                Multiple Campus with the motive of helping students to address their
                problem as well.
              </p>
            </div>
          </div>
         
        </div>
        <Footer />
        </div>
      }

    </div>
  );
};

export default AboutPage;
