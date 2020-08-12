import React, {useState} from 'react';

export default () => {
    // set state for input box with isComplete set to false by default
    const [currTodo, setCurrTodo] = useState({goal:'', isComplete:false});

    // set state for todo list with dummy data for easier testing
    const [todos, setTodos] = useState([
        {goal:'walk dogs', isComplete: false},
        {goal:'go for a run', isComplete: false},
        {goal:'make breakfast', isComplete: true},
        {goal:'practice React', isComplete: false},
        {goal:'do dishes', isComplete: true},
    ]);
    
    // onSubmitHandler -- add new todo to todos todo== {goal: '', isComplete: f}
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, currTodo]);
        setCurrTodo({goal:'', isComplete:false});
    }

    // onDeleteHandler -- run .filter on todos, removing todo[idx]
    const onDeleteHandler = (e, goal) => {
        e.preventDefault();
        setTodos(todos.filter(todo => todo.goal != goal))
    }

    // isCompleteHandler
    const isCompleteHandler = (idx) => {
        todos[idx].isComplete = !todos[idx].isComplete;
        setTodos([...todos]);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    className="mx-2"
                    placeholder="enter new todo..."
                    value={currTodo.goal}
                    onChange={(e)=>setCurrTodo({goal: e.target.value, isComplete: false})}
                ></input>
                <button type="submit" className="btn btn-primary">Add</button>
                <div className="container">
                    {todos.map((todo, idx) =>
                        <label key={idx} className="d-flex mx-4 align-items-center">
                            <input 
                                className="mx-2"
                                type="checkbox" 
                                checked={todo.isComplete}
                                onChange={()=>isCompleteHandler(idx)}>
                            </input>
                            <span className={todo.isComplete? `line-through` : ``}>{todo.goal}</span>
                            <button
                                className="mx-2 btn-danger btn"
                                onClick={(e)=>onDeleteHandler(e,todo.goal)}
                            >Delete</button>
                        </label>
                    )}
                </div>
            </form>
        </div>
    );  
}