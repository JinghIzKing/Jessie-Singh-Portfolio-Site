import React from 'react'

const Navbar = () => {
  return (
    <div className="h-20 flex flex-wrap space-x-0.5 justify-evenly items-center border border-gray-300">
        <div className="flex items-center gap-2">
            <img className="w-20 h-20 p-3 rounded-3xl" src="public\images\fav.png" alternate="logo"></img>
            <h1 className="text-2xl">Jessie Singh</h1>
        </div>
        <div className="flex items-center text-2xl">
            <h1>Projects</h1>
        </div>
        <div className="flex items-center text-2xl">
            <h1>Experience</h1>
        </div>
        <div className="flex items-center text-2xl">
            <h1>About Me</h1>
        </div>
        <button>
            <h1 className="text-2xl">Contact Me!</h1>
        </button>
    </div>
  )
}

export default Navbar