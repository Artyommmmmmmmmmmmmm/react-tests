import React, { useState } from 'react'
import './TaskLists.less'
import CompletedTaskList from '../CompletedTaskList/CompletedTaskList'
import ActiveTaskList from '../ActiveTaskList/ActiveTaskList'
import AllTaskList from '../AllTaskList/AllTaskList'
const TaskLists: React.FC = () => {
    const [list, setList] = useState('all')


    
    return (
        <div className='task-lists-cont'>
            <div>
                {list === 'all' && <AllTaskList />}
                {list === 'active' && <ActiveTaskList />}
                {list === 'completed' && <CompletedTaskList />}
            </div>
            <div className='toggler-cont'>
                <span className='toggler' onClick={() => setList('all')}>all</span>
                <span className='toggler' onClick={() => setList('active')}>active</span>
                <span className='toggler' onClick={() => setList('completed')}>completed</span>
            </div>
        </div>
    )
}

export default TaskLists;
