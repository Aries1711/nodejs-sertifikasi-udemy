import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");
  if (request.method === "GET") {
    service.getTodolist(request, response);
  } else if (request.method === "POST") {
    service.createTodolist(request, response);
  } else if (request.method === "PUT" || request.method === "PATCH") {
    service.updateTodolist(request, response);
  } else if (request.method === "DELETE") {
    service.deleteTodolist(request, response);
  }
});

server.listen(3000);
