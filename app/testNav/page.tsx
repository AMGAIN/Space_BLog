'use client'
import React from 'react'
import { useState } from 'react'

const page = () => {
    const [open, setOpen] =useState(false);
  return (
    <div>
        <button onClick={()=>setOpen(!open)}>click</button>
        {open && <p>menu open </p>}

    </div>
  )
}

export default page