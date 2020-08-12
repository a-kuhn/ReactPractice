import React, {useState} from 'react';

export default () => {
    const [todos, setTodos] = useState([
        {goal:'walk dogs', isComplete: false},
        {goal:'go for a run', isComplete: false},
        {goal:'make breakfast', isComplete: true},
        {goal:'practice React', isComplete: false},
        {goal:'do dishes', isComplete: true},
    ]);
    
    // onSubmitHandler -- add new todo to todos todo== {goal: '', isComplete: t/f}

    // onDeleteHandler -- run .filter on todos, removing todo[idx]

    return(
        <div>

        </div>
    );
}