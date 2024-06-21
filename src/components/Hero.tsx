import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

            <div className='relative w-full z-10 text-center p-4'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
                <p>Welcome, where musical excellence meets inspiration. Our renowned academy offers expert instruction across a range of disciplines, tailored to nurture talent at every level. Join us and embark on a transformative musical journey with our passionate instructors and state-of-the-art facilities. Discover your potential and elevate your artistry at Music Academy</p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        Explore Courses
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Hero