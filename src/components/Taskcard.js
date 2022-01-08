import React from 'react'

export default function Taskcard(props) {
    return (
        <div>
            <div class="card">
                    <div class="card-body">
                        <input type="text" disabled={props.isEditOn} value={props.title} name="" id="" />
                        {
                            !props.hideStatus?<a href="/" class="btn btn-primary">{props.status}</a>:null
                        }
                        

                    </div>
            </div>
        </div>
    )
}
