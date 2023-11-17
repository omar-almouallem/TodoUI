import React, { useState, useEffect } from "react";

import { Typography } from "@mui/material";

import { getTodos } from "../services/todo-services";
import TodoCard from "../components/TodoCard/TodoCard";
import CustomPagination from "../components/Pagination/Pagination";

export default function Completed(this: any) {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState<number | any>(1);
  const [total, setTotal] = useState();

  const fetchTodos = async () => {
    const todosData = await getTodos(currentPage);
    setTotal(todosData.totalPages);
    setTodos(todosData.todo);
  };
  useEffect(() => {
    fetchTodos();
  }, [todos]);
  return (
    <>
      <Typography textAlign="center" variant="h3">
        All Todo
      </Typography>
      <TodoCard todos={todos} />
      <CustomPagination
        count={total}
        page={currentPage}
        onChange={setCurrentPage}
      />
    </>
  );
}
