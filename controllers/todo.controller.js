const TodoModel = require("../models/todo.model");

const createTodo = async (req, res, next) => {
  try {
    const createModel = await TodoModel.create(req.body);
    res.status(201).json(createModel);
  } catch (error) {
    next(error);
  }
};

const getTodos = async (req, res, next) => {
  try {
    const allTodos = await TodoModel.find({});
    res.status(200).json(allTodos);
  } catch (error) {
    next(error);
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const TodoModel = await TodoModel.findById(req.params.todoId);
    if (TodoModel) {
      res.status(200).json(TodoModel);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const updateTodo = await TodoModel.findByIdAndUpdate(
      req.params.todoId,
      req.body,
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (updateTodo) {
      res.staus(200).json(updateTodo);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.todoId);
    if (deleteTodo) {
      res.status(200).json(deleteTodo);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createTodo, getTodos, getTodoById, updateTodo, deleteTodo };
