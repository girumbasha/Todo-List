import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TodoInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TodoButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TodoText = styled.span`
  flex-grow: 1;
  margin-left: 0.5rem;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === '') return;
    setTodos([...todos, todoText]);
    setTodoText('');
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new task"
        />
        <TodoButton type="submit" className='add_button'>Add</TodoButton>
      </TodoForm>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            <input type="checkbox" />
            <TodoText>{todo}</TodoText>
            <button style ={{color:'red',margin:'10px'}}onClick={() => handleDelete(index)}>Delete</button>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
}

export default App;
