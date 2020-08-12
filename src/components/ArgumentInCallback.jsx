import React from 'react';

export default () => {
    const movies = ['toy story', 'toy story 2','toy story 3','toy story 4'];

    const onClickHandler = (e, movie) => {
        alert(`You clicked: ${movie}`);
    }

    return(
        <div>
            {movies.map((movie, idx) => 
                <button key={idx} onClick={(e)=>onClickHandler(e,movie)}>{movie}</button>
            )}
        </div>
    );
}