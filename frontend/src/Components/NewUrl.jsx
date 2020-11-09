import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {serverHost} from '../utils/serverUrls'

const NewUrl = () => {

    const [source, setSource] = useState('')
    const [trackingUrl, setTrackingUrl] = useState('')
    const [sub, setSub] = useState('')
    const [tracker, setTracker] = useState({})
    const [pixels, setPixels] = useState(false)
    const [pixelUrl, setPixelUrl] = useState('')
    const [short, setShort] = useState('')

    useEffect(() => {
        setTracker({
            sourceId:source,
            full: trackingUrl,
            sub
        })        
    }, [source,trackingUrl,sub]
    )

    const handleSubmit = async event => {
        event.preventDefault()
        postTracker(tracker)
    }

    const postTracker = data => {
        console.log(data)
        axios.post(`${serverHost}/shortUrls`, data).then(res => {
            setPixels(true)
            setPixelUrl(res.data.short)
        })
    }

    const text = `<img src='${serverHost}/${pixelUrl}' width='1px' height='1px' />`;

    return (
      
      <div>
           <form onSubmit={handleSubmit}>
               <br/>
                <label htmlFor="source">Tracking URL</label>
                <input name="source" type="text" value={trackingUrl} onChange={e => setTrackingUrl(e.target.value)} required  />
                <br/>
                <label htmlFor="source">Enter Source</label>
                <input name="source" type="text" value={source} onChange={e => setSource(e.target.value)} required  />
                <br/>
                <label htmlFor="Sub">Enter Sub</label>
                <input name="sub" type="text" value={sub} onChange={e => setSub(e.target.value)} required  />
                <br/>
                <button type="submit">Generate Url and Pixels</button>
           </form>
           {
               pixels ? (
                <div>
                    <h2>HTML Pixels</h2>
                    {text}
                    <br/>
                    <h2>Tracking Url</h2>
                    {`${serverHost}/${pixelUrl}`}
                </div>
               ) : null
           }
       </div>
    
    )
}

export default NewUrl
