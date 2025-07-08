import React from 'react'

const Footer = () => {
  return (
    <div className="h-20 flex flex-wrap space-x-0.5 justify-evenly items-center border border-gray-300">
        <div className="flex items-center gap-2">
            <img className="w-20 h-20 p-3 rounded-3xl" src="\images\logos\Github-desktop-logo-symbol.svg.png" alternate="logo"></img>
            <img className="w-20 h-20 p-3 rounded-3xl" src="\images\logos\LinkedIn_logo_initials.png.webp" alternate="logo"></img>
        </div>
        <h1>@2025 Jessie Singh</h1>
    </div>
  )
}

export default Footer