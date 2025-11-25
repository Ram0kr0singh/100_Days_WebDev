import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-violet-600 text-white py-3">
            <div className="logo">
                <span className='font-bold text-xl mx-8'>ITask</span>
            </div>
            <ul className="flex gap-8">
                <li className='cursor-pointer hover:font-bold transition-all duration-1000'>HOme</li>
                <li className='cursor-pointer hover:font-bold transition-all duration-1000'>Your Task</li>
            </ul>
        </nav>
    )
}

export default Navbar