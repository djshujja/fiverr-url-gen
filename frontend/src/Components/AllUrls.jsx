import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {serverHost} from '../utils/serverUrls'
import {Link} from 'react-router-dom'

const AllUrls = () => {

    const [ urls, setUrls ] = useState([])
    
    useEffect(() => {
        loadingUrls()

    }, [])

    const loadingUrls = () => {
        axios.get(serverHost + '/all').then(res => {
            console.log(res.data)
            setUrls(res.data)
            console.log(urls)
        })
    }

    return (
        <div class="container">
        <h2>Affiliate Tracking Software</h2>
           
            <table class="table">
                <thead>
                <tr>
                    <th>Full Url</th>
                    <th>Affiliate Link</th>
                    <th>Clicks</th>
                    <th>Get Pixels</th>
                </tr>
                </thead>
                <tbody>
                {
                    urls.map(url => (
                        <tr key={url._id}>
                            <td>{url.full}</td>
                            <td><a href={serverHost+ `/${ url.short}`}>{serverHost+ `/${ url.short}`}</a></td>
                            <td>{url.clicks}</td>
                            <td><Link to={`/${ url.short}`}>Get Pixels</Link></td>
                        </tr>
                    ))
                }
                
                </tbody>
            </table>
        </div>
    )
}

export default AllUrls
