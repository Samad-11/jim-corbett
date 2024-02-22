import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer footer-center max-w-full p-10 bg-neutral text-base-content rounded">
            <nav className="flex flex-wrap gap-10 justify-center items-center ">
                <Link href='' className="link link-hover">About us</Link>
                <Link href='' className="link link-hover">Contact</Link>
                <Link href='' className="link link-hover">Refunds And Cancellations</Link>
                <Link href='' className="link link-hover">Terms And Conditions</Link>
            </nav>
            <nav>
                <div className="flex flex-wrap gap-8 justify-center items-center">
                    <Link href=''><FaFacebook size={28} className='hover:text-white' /></Link>
                    <Link href=''><FaInstagram size={28} className='hover:text-white' /></Link>
                    <Link href=''><FaYoutube size={28} className='hover:text-white' /></Link>
                    <Link href=''><FaWhatsapp size={28} className='hover:text-white' /></Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by JimCorbettTravelGuide</p>
            </aside>
        </footer>
    )
}

export default Footer