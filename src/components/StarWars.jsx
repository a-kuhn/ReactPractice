import React, {useState, useEffect} from 'react';
import {Router, Link} from '@reach/router';

import SearchForm from './SearchForm';
import DisplayPeople from './DisplayPeople';
import DisplayPlanets from './DisplayPlanets';

export default () => {


    return(

        // <Router>
        <>
            <SearchForm />
            <DisplayPeople />
            <DisplayPlanets />
        </>
        // </Router>

    );
}