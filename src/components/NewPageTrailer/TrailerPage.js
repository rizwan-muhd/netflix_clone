import React, { useState } from 'react'
import YouTube from 'react-youtube'
import './Trailer.css'



function TrailerPage(props) {
    const [state, setState] = useState(true)

    return (
        <div className='trailer-page'>

            <button onClick={() => setState(!state)}>Close</button>
            {state && <YouTube videoId={props.id.key} opts={props.opts} />}
        </div>
    )
}

export default TrailerPage