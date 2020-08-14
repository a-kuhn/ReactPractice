import React from 'react';
import {Link} from '@reach/router';

export default () => {

    return(
        <div>
            <h4>This here's the main view</h4>
            <p>and <Link to="/secondary" className="btn btn-warning">this button</Link> will take you to a secondary page</p>
        </div>
    );
}