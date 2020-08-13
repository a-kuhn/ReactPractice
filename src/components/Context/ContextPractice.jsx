import React, {createContext} from 'react';
import Wrapper from './Wrapper';
import FormWrapper from './FormWrapper';
import Navbar from './Navbar';

export default () => {

    return(
        <Wrapper>
            <Navbar />
            <FormWrapper />
        </Wrapper>
    );
}