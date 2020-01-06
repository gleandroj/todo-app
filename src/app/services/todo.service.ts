import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { TodoModel, TodoPriority } from '../models/todo.model';

const randomDate = (start: Date, end: Date) => (new Date(+start + Math.random() * (+end - +start)))

const bigDescription = (new Array(10))
    .fill(() => { }).map((a, i) => `${i}`).join('');

const testData = (new Array(10))
    .fill(() => { })
    .map((a, i) =>
        (new TodoModel(
            i,
            `Todo ${++i}`, `Description ${i} ${bigDescription}`,
            (Math.floor(Math.random() * 5) + 1) as TodoPriority,
            randomDate(new Date(2019, 1, 1), new Date(2020, 12, 31)),
            Math.random() >= 0.5
        ))
    );

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

    private resource = '/todo';

    constructor(private http: HttpClient) { }

    getAll(filter?: Partial<TodoModel>) {
        return of([]).pipe(
            delay(2000),
            switchMap(() => this.http.get<TodoModel[]>(`${this.resource}`)
                .pipe(catchError(() => of(testData.filter(testFilter(filter || {}))))))
        );
    }

    save(todo: Partial<TodoModel>) {
        return of([]).pipe(
            delay(2000),
            //switchMap(() => this.http.post<TodoModel>(`${this.resource}`, todo))
            switchMap(() => of(todo))
        );
    }

    delete(todo: TodoModel) {
        return of([]).pipe(
            delay(2000),
            switchMap(() => of(todo))
            //switchMap(() => this.http.delete(`${this.resource}/${todo._id}`))
        );
    }
}