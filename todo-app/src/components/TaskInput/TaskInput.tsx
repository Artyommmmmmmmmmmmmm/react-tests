import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../slices/tasksSlice'
import './TaskInput.less'

const TaskInput: React.FC = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim()) {
            dispatch(addTask(text))
            setText('')
        }
    }
    
    return (
        <div className='tasks-cont'>
            <form onSubmit={handleAddTask}>
                <input
                    type='text'
                    value={text}
                    placeholder='Введите новую задачу'
                    onChange={(e) => setText(e.target.value)}
                />
                <button type='submit'>✔</button>
            </form>
        </div>
    )
}

export default TaskInput;
