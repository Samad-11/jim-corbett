import Link from 'next/link'
import React from 'react'
import { TiThMenu } from 'react-icons/ti'

const nav = () => {
    const links = [
        {
            href: '',
            label: "Home"
        },
        {
            href: 'jeep-safari',
            label: "Jeep Safari"
        },
        {
            href: 'activities',
            label: "Activities"
        },
        {
            href: 'river-rafting',
            label: "River Rafting"
        },
        {
            href: 'hotels-and-resort',
            label: "Hotels and Resorts"
        },
        {
            href: 'forest-lodge',
            label: "Forest Lodge"
        },
        {
            href: 'hot-air-balloon-ride',
            label: "Hot Air Balloon Ride"
        },
        {
            href: 'sightseeing',
            label: "Sightseeing"
        },
        {
            href: 'paragliding',
            label: "Paragliding"
        },
        {
            href: 'feedbacks',
            label: "feedbacks"
        },
        {
            href: 'contact',
            label: "Contact Us"
        },
        {
            href: 'privacy-policy',
            label: "Privacy Policy"
        },
        {
            href: 'tnc',
            label: "Terms And Conditions"
        },
    ]
    return (
        <div className="fixed z-50 right-5 top-5" >

            <div className="drawer drawer-end ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-neutral rounded">
                        <TiThMenu size={15} />
                    </label>
                </div>
                <div className="drawer-side z-50 ">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 max-md:max-w-[80%] min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            links.map((link) => (
                                <li key={link.href} className='capitalize'><Link href={link.href}>{link.label}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default nav