import React from 'react';
import {Link} from '@reach/router';

export default () => {

    return(
        <div>
            <h4>You have successfully navigated to the secondary view!</h4>
            <p>and<Link to="/" className="btn btn-success"> click here</Link> to go back to the root!</p>
        </div>
    );
}