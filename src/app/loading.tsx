import React from 'react'

const loading = () => {
    return (
        <section className='h-screen w-full flex justify-center items-center bg-neutral'>
            <div>
                <span className="loading loading-infinity  w-[7rem]"></span>
            </div>
        </section>
    )
}

export default loading