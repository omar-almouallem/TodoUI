import * as ClinetApi from "../libs/axios";

import { toast } from "react-toastify";

export const createTodos = async (values: object) => {
  try {
    const res = await ClinetApi.createTodos("/", values);
    return res;
  } catch (error) {
    throw new Error("Failed to create todo");
  }
};

export const getTodos = async (currentPage: number) => {
  try {
    const res = await ClinetApi.getTodos("", currentPage);
    return res.data;
  } catch (error) {
    throw new Error("Failed to get todos");
  }
};

export const completeTodo = async (id: string) => {
  try {
    const res = await ClinetApi.completeTodo(`complete/${id}`);
    {
      res.data.completed === true
        ? toast.success("The todo is complete")
        : toast.success("The todo is active");
    }
    return res.data;
  } catch (error) {
    throw new Error("Failed to update todo");
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const res = await ClinetApi.deleteTodo(`${id}`);
    toast.success("Deleted successfully !");
    return res.data;
  } catch (error) {
    throw new Error("Failed to delete todo");
  }
};

export const getActiveTodos = async (currentPage: number) => {
  try {
    const res = await ClinetApi.getActiveTodos(`/isActive`, currentPage);
    return res.data;
  } catch (error) {
    throw new Error("Failed to get todo");
  }
};

export const getCompletTodos = async (currentPage: number) => {
  try {
    const res = await ClinetApi.getCompletTodos("/isCompleted", currentPage);
    return res.data;
  } catch (error) {
    throw new Error("Failed to get todo");
  }
};
