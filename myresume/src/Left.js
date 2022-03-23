import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import Language from "./Language";
import Profile from "./Profile";

function Left(){

    return(
      
        <>    
            <div class="left_side">

                    <Profile/>

                    <Contact/>

                    <Education/>
        
                    <Language/>
            </div>
    
        </>  
    );
}
export default Left;