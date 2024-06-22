import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const Hero = () => {
    return (
        <div className='text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

            <div className='relative w-full z-10 text-center p-4'>
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Welcome, where musical excellence meets inspiration. Our renowned academy offers expert instruction across a range of disciplines, tailored to nurture talent at every level. Join us and embark on a transformative musical journey with our passionate instructors and state-of-the-art facilities. Discover your potential and elevate your artistry at Music Academy</p>
                <div className="mt-4">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <Link href={"/courses"}>
                            Explore Courses
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Hero