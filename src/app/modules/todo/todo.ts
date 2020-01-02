export type TodoPriority = 1 | 2 | 3 | 4 | 5;

export class Todo {
    constructor(
        public title: string,
        public description: string,
        public priority: TodoPriority,
        public createdAt: Date,
        public done: boolean
    ) { }
}