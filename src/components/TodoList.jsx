import React, {useState} from 'react';

export default () => {
    const [todos, setTodos] = useState([
        {goal:'walk dogs', isComplete: false},
        {goal:'go for a run', isComplete: false},
        {goal:'make breakfast', isComplete: true},
        {goal:'practice React', isComplete: false},
        {goal:'do dishes', isComplete: true},
    ]);

    const [currTodo, setCurrTodo] = useState({goal:'', isComplete:false});
    
    // onSubmitHandler -- add new todo to todos todo== {goal: '', isComplete: t/f}
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
    const isCompleteHandler = (e, idx) => {
        e.preventDefault();
        setTodos(!todos[idx].isComplete);
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
                                onChange={(e)=>isCompleteHandler(e,idx)}>
                            </input>
                            {todo.goal}
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