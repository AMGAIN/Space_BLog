import React from 'react'

const BlogInfo = () => {
    return (
        <div className='p-4 w-[300px] '>
            <div className='my-5 gap-2 flex item-center justify-center'>
                <div className='rounded-[50%] bg-red-100 w-20 h-20'></div>
                <div className='text-3xl'>Mark A. Garcia</div>
            </div>
            <hr />
            <div className='my-5'>March 24, 2026 8:47AM</div>
            <hr />
            <div className='my-5 '>Categories:</div>
            <div className='border '>
                {['SpaceStation', 'SpaceLogistics', 'CheaperTravel'].map((cat) => (
                        <button key={cat} className='p-3 m-0 bg-gray-700 hover:cursor-pointer'>{cat}</button>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default BlogInfo