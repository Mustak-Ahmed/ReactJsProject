import React from 'react';
import web from "../src/images/img10.jpg";
import Common from "./Common";

const Home=()=>{
    return(
        <>
            <Common  name='Welcome to the company of' imgsrc={web} visit="/service" btname="Get Started" msg="We are the Developer team" />
        </>
    );
}
export default Home;