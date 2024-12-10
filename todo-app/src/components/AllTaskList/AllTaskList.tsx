import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { toggleTask } from '../../slices/tasksSlice'
import './AllTaskList.less'

const AllTaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    const dispatch = useDispatch()

    const handleTaskToggle = (id: string) => { 
        dispatch(toggleTask(id))
    }

    return (
        <div className='tasks-cont'>
            <span>Все задачи</span>
            <ul className='all-task-list-cont'>
                {tasks.map( el => (
                <li key={el.id}>
                    <span>
                        {el.text}
                    </span>
                    <span>
                        {el.completed}
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


export default AllTaskList;