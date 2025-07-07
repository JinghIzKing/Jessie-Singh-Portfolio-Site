import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center gap-20">
        <img className="w-20 h-20" src="public\images\fav.png" alternate="logo"></img>
        <link rel="icon" type="image/svg+xml" href="public\images\fav.png" />
        <h1>Jessie Singh</h1>
        <div>
            Projects
        </div>
        <div>
            Experience
        </div>
        <div>
            About Me
        </div>
        <button>
            Contact Me!
        </button>
    </div>
  )
}

export default Navbar