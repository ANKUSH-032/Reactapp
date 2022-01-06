import React from 'react';
import {Add, Sub, Multi, Div} from './Calc';
function Para(){
    return(
        <> 
        
            <p><span>Addtion</span>  {Add (7, 2)}</p>
            <p><span>Subtraction</span> {Sub (195, 98)}</p>
            <p><span>Multiplication</span> {Multi (32, 2)}</p>
            <p><span>Division</span>  {Div (63, 2)}</p>
        
        </>
    );
}
export default Para;