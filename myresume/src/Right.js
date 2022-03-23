import React from "react";
import Skilled from "./Skilled";
import Certificate from "./Certificate";
import About from "./About";
import Achivement from "./Achivement";

function Right(){
    return(
        <>

        <div class="right_side">
            <About/>
            <Achivement/>

            <Certificate/>

            <Skilled/>

        </div>
   
</>
    );
}

export default Right;