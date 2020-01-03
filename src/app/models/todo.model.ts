export type TodoPriority = 1 | 2 | 3 | 4 | 5;

export class TodoModel {
    constructor(
        public _id: string | number,
        public title: string,
        public description: string,
        public priority: TodoPriority,
        public createdAt: Date,
        public isDone: boolean
    ) { }
}