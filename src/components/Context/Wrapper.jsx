import React, {useState} from 'react';
import FormWrapper from './FormWrapper';
import Navbar from './Navbar';
import PracticeContext from './PracticeContext';

export default () => {
    const [name, setName] = useState('');

    return(
        <PracticeContext.Provider value={[name, setName]}>
            <Navbar />
            <FormWrapper />
        </PracticeContext.Provider>
    );
}