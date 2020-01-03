import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';

import { TodoModel } from '../models/todo.model';

const bigDescription = (new Array(100))
    .fill(() => { }).map((a, i) => `${i}`).join('');

const testData = (new Array(10))
    .fill(() => { })
    .map((a, i) => (new TodoModel(i, `Todo ${++i}`, `Description ${i} ${bigDescription}`, 5, new Date(), false)));

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
        //TODO: Remove delay
        return this.http.get<TodoModel[]>(`${this.resource}`)
            .pipe(catchError(() => of(testData.filter(testFilter(filter || {}))).pipe(delay(2000))));
    }
}