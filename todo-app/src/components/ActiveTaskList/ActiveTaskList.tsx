import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { toggleTask } from '../../slices/tasksSlice'
import './ActiveTaskList.less'

const ActiveTaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    const dispatch = useDispatch()

    const handleTaskToggle = (id: string) => { 
        dispatch(toggleTask(id))
    }

    return (
        <div className='tasks-cont'>
            <span>Действующие задачи</span>
            <ul>
                {tasks.filter(task => !task.completed).map( el => (
                <li key={el.id}>
                    <span>
                        {el.text}
                    </span>
                    <button onClick={() => handleTaskToggle(el.id)}>
                        переключить
                    </button>
                </li>    
                ))}
            </ul>
        </div>
    )
}

export default ActiveTaskList;
