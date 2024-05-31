export class TodolistService {
  todolist = [
    "buatku harus segera rampung",
    "upwork harus segera apply job cari receh dulu",
  ];

  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: "Success get all todolist data",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  getTodolist(request, response) {
    response.write(this.getJsonTodolist());
    response.end();
  }

  createTodolist(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolist.push(body.todo);
      response.write(this.getJsonTodolist());
      response.end();
    });
  }

  updateTodolist(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
      }
      response.write(this.getJsonTodolist());
      response.end();
    });
  }

  deleteTodolist(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1);
      }
      response.write(this.getJsonTodolist());
      response.end();
    });
  }
}
