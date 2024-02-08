import { UUID } from "crypto";
enum TodoStatus {
    Pending = 'Pending',
    InProgress = 'In Progress',
    Completed = 'Completed',
}
export enum TaskTags {
    Programming = "Programming",
    HomeTask = "Home Task",
    OfficeWork = "Office Work",
    Hobbies = "Hobbies"
}

export interface ToDoTask {
    id: UUID;
    title: string;
    description: string;
    priorityLevel: number;
    status: TodoStatus;
    createdAt: Date;
    dueDate: Date;
    Tags: TaskTags[]
}


export interface GetResultObject {
    status: string;
    message: string;
    data: ToDoTask[]
}