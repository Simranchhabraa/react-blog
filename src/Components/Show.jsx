import React from 'react'
import {Link} from "react-router-dom"

export default function Show() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/blogs1">Blogs 1</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/blogs2">Blogs 2</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/blogs3">Blogs 3</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/blogs4">Blogs 4</Link>
            </li>
        </ul>

    </div>
  )
}
