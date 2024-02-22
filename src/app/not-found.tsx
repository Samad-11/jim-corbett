import Link from 'next/link'
import React from 'react'
import { GiReturnArrow } from 'react-icons/gi'
import { GrReturn } from 'react-icons/gr'
import { IoReturnDownBack } from 'react-icons/io5'

const NotFoundPage = () => {
    return (
        <section className='h-screen w-full bg-neutral flex justify-center items-center'>
            <div>
                <h1 className='text-5xl my-5'>This section is in Under Construction</h1>
                <Link href='/' className='text-2xl text-center mx-auto hover:text-secondary flex items-center justify-center gap-6'><IoReturnDownBack /> Click to go on Home Page</Link>
            </div>
        </section>
    )
}

export default NotFoundPage