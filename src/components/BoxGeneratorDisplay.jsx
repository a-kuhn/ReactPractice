import React from 'react';

export default ({boxes}) => {

    return(
        <div>
            <h6>display of boxes:</h6>
            {boxes.map((box, idx) => 
                <div className="square-box" key={idx} style={{backgroundColor: box}}></div>
            )}
        </div>
    );
}