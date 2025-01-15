// actions.js
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
  } from './actionTypes';
  
  export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
  });
  
  export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
  });
  
  export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id },
  });
  
  export const filterTodos = (filter) => ({
    type: FILTER_TODOS,
    payload: { filter },
  });
  
  export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
  });
  
  export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
  });