import React from 'react'

export default function GotIt(props) {

    const initialAction = () => {
        
        props.actions.initialAction();
        
        
    }
    return (
        <div >
            <button className='gotit-btn' onClick={() => initialAction()}>Got It !</button>
        </div>
    )
}
