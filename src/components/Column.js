import React from 'react'
import Taskcard from './Taskcard'

export default function Column(props) {
    return (
        <>
            <div className='m-4'>
                <h1 className='text-center'>{props.title}</h1>
                {
                props.tasks?.map( (task,ind) => {
                    return <Taskcard key={ind} title={task.title} status={task.status} hideStatus={true} isEditOn={false}/>
                })
            }
            </div>

           
          
        </>
    )
}
