import React, { useEffect , useState} from 'react'
import Column from './components/Column'
import Taskcard from './components/Taskcard'
import { sortTask } from './Utilities'

export default function Board() {


    let task = [
        {
            title: "Task1",
            status: "done"
        },
        {
            title: "Task2",
            status: "doing"
        },
        {
            title: "Task3",
            status: "done"
        },
        {
            title: "Task4",
            status: "todo"
        }

    ]

    const [sortedTask, setSortedTask] = useState({})

    const [createCard, setCreateCard] = useState(false)

    useEffect(() => {
       setSortedTask( sortTask(task));
    }, [])

    return (
        <>
            <h1>Main Component</h1>
            
            <button className='btn btn-warning btn-lg m-4'>Create Task +</button>

            {

               createCard? <Taskcard title={""} status={""} hideStatus={false} isEditOn={false}/>:null
            }

            <div className='row'>
                <div className='col-md-4'>
                    <Column title="Todo" tasks={sortedTask["todo"]}/>
                </div>
                <div className='col-md-4'>
                    <Column title="Doing" tasks={sortedTask["doing"]}/>
                </div>
                <div className='col-md-4'>
                    <Column title="Done" tasks={sortedTask["done"]}/>
                </div>
            </div>

        </>
    )
}
