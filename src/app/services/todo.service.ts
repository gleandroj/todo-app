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

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private resource = '/todo';

    constructor(private http: HttpClient) { }

    getAll() {
        //TODO: Remove delay
        return this.http.get<TodoModel[]>(`${this.resource}`)
            .pipe(catchError(() => of(testData).pipe(delay(2000))));
    }
}