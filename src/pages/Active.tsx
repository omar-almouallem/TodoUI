import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

import CustomPagination from "../components/Pagination/Pagination";
import { getActiveTodos } from "../services/todo-services";
import TodoCard from "../components/TodoCard/TodoCard";

export default function Active() {
  const [todos, setTodos] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number | any>(1);
  const [total, setTotal] = useState();

  const fetchTodos = async () => {
    const todosData = await getActiveTodos(currentPage);
    setTotal(todosData.totalPages);
    setTodos(todosData.todo);
  };
  useEffect(() => {
    fetchTodos();
  }, [todos]);

  return (
    <>
      <Typography textAlign="center" variant="h3">
        Active Todo
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
