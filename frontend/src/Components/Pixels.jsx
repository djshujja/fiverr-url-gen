import React from 'react'
import {serverHost} from '../utils/serverUrls'

const Pixels = props => {


    
    const pixelUrl = props.location.pathname + props.location.search

    const text = `<img src='${serverHost}${pixelUrl}' width='1px' height='1px' />`;
    return (
        <div>
    
            <div>
                    <h2>HTML Pixels</h2>
                    {text}
                    <br/>
                    <h2>Tracking Url</h2>
                    {`${serverHost}${pixelUrl}`}
                </div>
        </div>
    )
}

export default Pixels
