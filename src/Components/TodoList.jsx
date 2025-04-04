import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";

const TodoList = () => {
  // states to hold the todos and the Todo-input value
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [draggedIndex, setDraggedIndex] = useState(null);

  //   function to save to local storage
  const saveToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    //   function to get the todos from local storage
    const getTodos = () => {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos) {
        setTodos(todos);
      }
    };
    getTodos();
  }, []);

  // function to handle the addition of a new todo
  const handleAdd = () => {
    if (todo.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    setTodos([...todos, { todo: todo, isFInished: false }]);
    saveToLocalStorage([...todos, { todo: todo, isFInished: false }]);
    setTodo("");
  };

  // function to handle the edit button click
  const handleEdit = (index) => {
    setTodo(todos[index].todo);
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  // function to handle the delete button click
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  // function to handle the finished button click
  const handleFinished = (index) => {
    const newTodos = [...todos];
    newTodos[index].isFInished = !newTodos[index].isFInished;
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

    // function to handle the drag and drop functionality
    const handleDrag = (index) => {
        if(draggedIndex === null) return;
        const newTodos = [...todos];
        const draggedTodo = newTodos.splice(draggedIndex, 1)[0]
        newTodos.splice(index, 0, draggedTodo)

        setTodos(newTodos)
        saveToLocalStorage(newTodos)
        setDraggedIndex(null)
    }

  return (
    <>
      <div className="container sm:w-[500px] w-[300px] rounded-3xl min-h-[40vh] bg-amber-50 mx-auto my-10">
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold py-5 text-purple-800 flex justify-center items-center gap-2">
          Todo List
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#ff5845"
            fill="none"
          >
            <path
              d="M3.5 9.36842C3.5 5.89491 3.5 4.15816 4.52513 3.07908C5.55025 2 7.20017 2 10.5 2H13.5C16.7998 2 18.4497 2 19.4749 3.07908C20.5 4.15816 20.5 5.89491 20.5 9.36842V14.6316C20.5 18.1051 20.5 19.8418 19.4749 20.9209C18.4497 22 16.7998 22 13.5 22H10.5C7.20017 22 5.55025 22 4.52513 20.9209C3.5 19.8418 3.5 18.1051 3.5 14.6316V9.36842Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.5 11H17"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              d="M7 12C7 12 7.5 12 8 13C8 13 9.58824 10.5 11 10"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.5 17H17"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              d="M8 2L8.0822 2.4932C8.28174 3.69044 8.38151 4.28906 8.80113 4.64453C9.22075 5 9.82762 5 11.0414 5H12.9586C14.1724 5 14.7793 5 15.1989 4.64453C15.6185 4.28906 15.7183 3.69044 15.9178 2.4932L16 2"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 17H9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </h1>
        {/* Input Box */}
        <div className="flex justify-center items-center gap-2 mb-5 p-3 flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Add a new task..."
            className="border-2 border-gray-300 rounded-2xl p-2 sm:w-[350px] w-[280px]"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd();
              }
            }}
          />
          <button
            onClick={handleAdd}
            className="bg-linear-to-b from-orange-600 to-yellow-400 text-white rounded-2xl px-4 py-2 font-bold active:scale-95 w-[280px] sm:w-auto"
          >
            Add Task
          </button>
        </div>
        {/* Todos container */}
        <div className="Todos p-3">
          {todos.map((todo, index) => {
            return (
              <div
                key={index}
                draggable
                onDragStart={() => setDraggedIndex(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {handleDrag(index)}}
                className="todo flex justify-between items-center rounded-4xl p-3 mb-3 shadow-sm sm:w-full w-[280px]"
              >
                <div className="left flex justify-center items-center gap-2">
                  <StyledWrapper2>
                    <label className="container">
                      <input
                        checked={todo.isFInished}
                        type="checkbox"
                        onChange={() => {
                          handleFinished(index);
                        }}
                      />
                      <div className="checkmark" />
                    </label>
                  </StyledWrapper2>
                  <h4
                    className={
                      "text-lg font-semibold h-auto text-left " +
                      `${todo.isFInished ? "line-through" : ""}`
                    }
                  >
                    {todo.todo}
                  </h4>
                </div>
                <div className="right flex justify-center items-center gap-2 flex-col sm:flex-row">
                  <StyledWrapper>
                    <button
                      className="Btn"
                      onClick={() => {
                        handleEdit(index);
                      }}
                    >
                      <div className="sign">
                        <FaRegEdit />
                      </div>
                      <div className="text">Delete</div>
                    </button>
                  </StyledWrapper>
                  <StyledWrapper>
                    <button
                      className="Btn"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      <div className="sign">
                        <svg
                          viewBox="0 0 16 16"
                          className="bi bi-trash3-fill"
                          fill="currentColor"
                          height={18}
                          width={18}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                      </div>
                      <div className="text">Delete</div>
                    </button>
                  </StyledWrapper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const StyledWrapper2 = styled.div`
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
  }

  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.6em;
    width: 1.6em;
    border-radius: 50%;
    background: #ffeded38;
    transition: all 0.2s ease;
  }

  .checkmark {
    opacity: 0.4;
  }

  .container input:checked ~ .checkmark {
    background: linear-gradient(144deg, #fdc700, #f54a00);
    opacity: 0.9;
    transition: all 0.2s ease;
  }

  .container input:not(:checked) ~ .checkmark {
    border: 1px solid black;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 0.61em;
    top: 0.43em;
    width: 0.25em;
    height: 0.5em;
    border: solid rgb(255, 255, 255);
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }
`;

const StyledWrapper = styled.div`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background: rgb(255, 135, 65);
    background: linear-gradient(144deg, #fdc700, #f54a00);
  }

  /* plus sign */
  .sign {
    width: 100%;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 17px;
  }

  .sign svg path {
    fill: white;
  }
  /* text */
  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: 0.3s;
  }
  /* hover effect on button width */
  .Btn:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: 0.3s;
  }

  .Btn:hover .sign {
    width: 30%;
    transition-duration: 0.3s;
    padding-left: 20px;
  }
  /* hover effect button's text */
  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: 0.3s;
    padding-right: 10px;
  }
  /* button click effect*/
  .Btn:active {
    transform: translate(2px, 2px);
  }
`;

export default TodoList;
