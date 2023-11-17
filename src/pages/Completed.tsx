import React, { useState, useEffect } from "react";

import { Typography } from "@mui/material";

import CustomPagination from "../components/Pagination/Pagination";
import { getCompletTodos } from "../services/todo-services";
import TodoCard from "../components/TodoCard/TodoCard";

export default function Completed() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState<number | any>(1);
  const [total, setTotal] = useState();

  const fetchTodos = async () => {
    const todosData = await getCompletTodos(currentPage);
    setTotal(todosData.totalPages);
    setTodos(todosData.todo);
  };
  useEffect(() => {
    fetchTodos();
  }, [todos]);

  return (
    <>
      <Typography textAlign="center" variant="h3">
        Completed Todo
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
