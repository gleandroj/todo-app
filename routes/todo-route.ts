import { Request, Response, NextFunction, Application } from "express";
import { title } from "process";
import Todo from "../models/todo";

export class TodoRoute {
  constructor(app: Application) {
    app.route("/api/todo").get(this.findAll);
    app.route("/api/todo").post(this.create);
    app.route("/api/todo/:id").put(this.update);
    app.route("/api/todo/:id").delete(this.delete);
  }

  findAll = (req: Request, res: Response, next: NextFunction) => {
    Todo.find((err, todos) => {
      if (err) {
        return next(err);
      }
      res.json(todos);
    });
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    const todo = new Todo() as any;
    const { title, description, priority, isDone, createdAt } = req.body;
    todo.title = title;
    todo.description = description;
    todo.priority = priority;
    todo.isDone = isDone;
    todo.createdAt = createdAt;
    await todo.save();
    console.log("Todo Created: ", todo);
    res.json(todo);
  };

  update = (req: Request, res: Response, next: NextFunction) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, null, (err, todo) => {
      if (err) {
        return next(err);
      }
      res.json(todo);
    });
  };

  delete = (req: Request, res: Response, next: NextFunction) => {
    Todo.findByIdAndRemove(req.params.id, req.body, (err, todo) => {
      if (err) {
        return next(err);
      }
      res.json(todo);
    });
  };
}
