import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { TodoModel, TodoPriority } from '../models/todo.model';

const applyFilter = (filter, value) => {
    if (!filter) return true;
    if (typeof value === "string") return value && value.toLocaleLowerCase().indexOf(filter && filter.toLocaleLowerCase()) > -1;
    if (typeof value === "boolean") return value === filter;
    if (value instanceof Date) return value.toDateString() === (filter && filter.toDateString());
    return value === filter;
};

const testFilter = function (filter: Partial<TodoModel>) {
    return (item: TodoModel) => {
        return applyFilter(filter.title, item.title)
            && applyFilter(filter.description, item.description)
            && applyFilter(filter.isDone, item.isDone)
            && applyFilter(filter.createdAt, item.createdAt)
            && applyFilter(filter.priority, item.priority);
    };
}

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private resource = '/api/todo';

    constructor(private http: HttpClient) { }

    getAll(filter?: Partial<TodoModel>) {
        const params = new URLSearchParams();
        Object.entries(filter || {}).forEach(item => {
            if (item[1] instanceof Date) {
                params.append(item[0], item[1].toISOString());
            } else if (item[1] != null) {
                params.append(item[0], item[1].toString());
            }
        });
        return this.http.get<TodoModel[]>(`${this.resource}?${params}`);
    }

    save(todo: Partial<TodoModel>) {
        console.log(`Save: ${JSON.stringify(todo)}`);

        if (todo._id) {
            return this.http.put<TodoModel>(`${this.resource}/${todo._id}`, todo);
        }
        return this.http.post<TodoModel>(`${this.resource}`, todo);
    }

    delete(todo: TodoModel) {
        return this.http.delete(`${this.resource}/${todo._id}`);
    }
}