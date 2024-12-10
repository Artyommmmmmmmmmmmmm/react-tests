import { createSlice, PayloadAction } from '@reduxjs/toolkit' 

interface Task {
    id: string,
    text: string,
    completed: boolean
}

interface TasksState {
    tasks: Task[]
}

const initialState: TasksState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // добавляет задачу
        addTask(state, action: PayloadAction<string> ) {
            state.tasks.push({id: Date.now().toString(), text: action.payload, completed: false})
        },
        // переключает выполненность задачи
        toggleTask(state, action: PayloadAction<string>) {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) task.completed = !task.completed
        },
    },
});

export const { addTask, toggleTask} = tasksSlice.actions;
export default tasksSlice.reducer;
