import React  from "react";

function Contact(){
    return(
            <>
                 <div class="contactInfo">
            <h3 class="title"> Contact Info</h3>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <span class="text"> +91 7007635014</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <span class="text"> ankushdubey099@gmail.com</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                   <a href="https://www.linkedin.com/feed/"><span class="text"  > LinkedIn</span></a>
                   <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
                   <a href="https://github.com/"><span class="text"> github</span></a>
                   <span class="icon"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                   <a href="https://twitter.com/home"><span class="text">Twitter</span></a>
                </li>
               
                <li>
                    <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span class="text"> MiraRoad Thane(MH)</span>
                </li>
            </ul>
        </div>
            </>
    );
}
export default Contact;