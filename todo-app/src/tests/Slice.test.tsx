import reducer, {addTask, toggleTask} from "../slices/tasksSlice";

describe('tasks Slice', () => {
    it('add a task', () => {
        const initialState = {tasks: []}
        const newState = reducer(initialState, addTask('new task'))
        expect(newState.tasks).toHaveLength(1)
        expect(newState.tasks[0].text).toBe('new task')
    })
    it('toggle a task', () => {
        const initialState = {tasks: [{id: '1', text: 'text', completed: false}]}
        const newState = reducer(initialState, toggleTask('1'))
        expect(newState.tasks[0].completed).toBe(true)
    })
})