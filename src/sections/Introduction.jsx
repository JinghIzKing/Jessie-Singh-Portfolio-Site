import React from 'react'

const Introduction = () => {
  return (
    <div className="grid grid-cols-2 items-center pl-20 pr-20 gap-10 border">
        <img className="w-full h-full p-3 rounded-3xl" src="/images/Manager_hat.webp" alternate="A Picture Of Me"></img>
        <div className="flex flex-col items-center justify-center">
            <p className="text-3xl">Hi, my name is Jessie Singh! I am majoring in Computer Science and Data Science at Rutgers University-New Brunswick. My expertise is in Machine Learning and Web Development.</p>
            <button className="border">
                <h1 className="text-4xl">
                    See my work!
                </h1>
            </button>
        </div>
    </div>
  )
}

export default Introduction