import React from 'react';
import web from "../src/images/img8.jpg";
import Common from './Common';

const About=()=>{
    return(
        <>
            <Common name='Grow your Business With' imgsrc={web} visit="/contact" btname="Contact Now" 
            msg="We are one of the fastest growing company in India.We are working in the various typs of development projects from last few years based upon the client's demand." />
        </>
    );
}
export default About;