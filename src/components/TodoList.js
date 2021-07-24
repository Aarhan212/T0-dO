import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';
import Time from './Time.js';
import {SiReddit} from 'react-icons/si';
import {FaNapster} from 'react-icons/fa';
import {ImBooks} from 'react-icons/im';
import {SiGooglehangoutsmeet} from 'react-icons/si';
import {FiMail} from 'react-icons/fi';

function TodoList() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };
  
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <><div className="wrapper">
      <div>
    <div className="extra3">
      <Time/>
    </div>
    <div className="extra6">
      <h1>Quick links</h1>
    <a href=" " className="logo"><SiReddit size="40px"/></a>
    <a href="" className="logo"><FaNapster size="40px"/></a>
    <a href="" className="logo"><ImBooks size="40px"/></a>
    <a href="" className="logo"><SiGooglehangoutsmeet size="40px" /></a>
    <a href=" " className="logo"><FiMail size="40px"/></a>
    </div>
    </div>
    <div className="extra2">  
    <h1>Tasks</h1>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      </div>
      <div className='extra'>
        <div className="extra5">
                <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      </div>
      <div className="extra4">
    <h1>Urgent Task</h1>
    <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      </div>
    </div>
    <div className>

    </div>
    <div></div>
    <div>

    </div>
    <div>

    </div>
    <div></div>
      
      </div>
    </>
  );
}

export default TodoList;
