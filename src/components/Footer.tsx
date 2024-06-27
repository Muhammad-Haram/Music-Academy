import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-gray-400 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
                <div>
                    <h2 className='text-white text-lg font-semibold mb-4'>About Us</h2>
                    <p className='mb-4 text-neutral-400'>Music School is a premier institution dedication to teaching the art and science of music. We nurture talent from the group round, fostering a vibrantr community of musicians.</p>
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold mb-4'>Quick Lines</h2>
                    <Link href={"/"}><p className='text-neutral-400 mb-4'>Home</p ></Link>
                    <Link href={"/"}><p className='text-neutral-400 mb-4'>About</p ></Link>
                    <Link href={"/"}><p className='text-neutral-400 mb-4'>Courses</p ></Link>
                    <Link href={"/"}><p className='text-neutral-400 mb-4'>Contact</p ></Link>
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold mb-4'>Follow Us</h2>
                    <Link href={"/"}><p className='text-neutral-400 mb-4'>Facebook</p ></Link>
                    <Link href={"/"}><p className='text-neutral-400 mb-4'>Instagram</p ></Link>
                    <Link href={"/"}><p className='text-neutral-400 mb-4'>Linkedin</p ></Link>
                    <Link href={"/"}><p className='text-neutral-400 mb-4'>Twitter</p ></Link>
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold mb-4'>Contact US</h2>
                    <p className='text-neutral-400 mb-4'>Karachi</p >
                    <p className='text-neutral-400 mb-4'>123456789</p >
                    <p className='text-neutral-400 mb-4'>music@academy.com</p >
                </div>
            </div>
            <p className='text-neutral-400 text-center text-xs mt-4'>©2024 Music School. All Rights Reserved</p>
        </footer >
    )
}

export default Footer
