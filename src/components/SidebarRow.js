import React from 'react'
import'./sidebar.css'
// import { Icon } from '@mui/material'

function SidebarRow(props) {
  return (
    <div className={`sidebar-row ${props.selected && "selected"}`}>
        <props.Icons className="sidebar-row-icons"/>
        <h5 className='sidebar-row-name'>{props.title}</h5>
    </div>
  )
}

export default SidebarRow