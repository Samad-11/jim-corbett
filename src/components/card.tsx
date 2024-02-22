import Image, { StaticImageData } from 'next/image'
import React from 'react'
import image from '../../public/jim-corbett-jungle-safari.jpg'

const ServiceCard = ({ img = image, title = 'Jim Corbett', btnValue = 'Book Now' }: { img: StaticImageData, title: string, btnValue: string }) => {
    return (
        <div className="card card-compact relative max-w-md bg-base-100 shadow-xl">
            <figure><Image src={img} alt={'image'} /></figure>
            <div className="card-body">
                <h2 className="card-title capitalize text-sec">{title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn w-full btn-primary capitalize">{btnValue}</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard