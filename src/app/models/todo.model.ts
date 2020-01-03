export const todoPriorities = [1, 2, 3, 4, 5];
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

    static fromObject(value: any) {
        const {
            _id,
            title,
            description,
            priority,
            createdAt,
            isDone
        } = value;
        return new TodoModel(
            _id,
            title,
            description,
            priority,
            createdAt,
            isDone
        );
    }
}