import React from 'react'
import { Link } from "react-router-dom";


export default function HomePage() {
  return (

<div>
  <ul>
    <li>
      <Link to="/form"> Add New Blog </Link>
    </li>
  </ul>
  <ul>
    <li>
      <Link to="/show"> Show all Blogs </Link>
    </li>
  </ul>
</div>

  )
}
