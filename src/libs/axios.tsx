import axios, { AxiosInstance } from "axios";

import { REACT_APP_API_URL, MAX_ITEM_IN_PAGE } from "../config/constants";

const Axios: AxiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
});

export function getTodos(url: string, currentPage: number) {
  return Axios.get(`${url}/?page=${currentPage}&limit=${MAX_ITEM_IN_PAGE}`);
}

export function getActiveTodos(url: string, currentPage: number) {
  return getTodos(url, currentPage);
}

export function getCompletTodos(url: string, currentPage: number) {
  return getTodos(url, currentPage);
}

export function completeTodo(url: string) {
  return Axios.put(url);
}

export function createTodos(url: string, values: object) {
  return Axios.post(url, values);
}

export function deleteTodo(url: string) {
  return Axios.delete(url);
}
