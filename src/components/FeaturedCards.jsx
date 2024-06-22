import React from 'react'
import courseData from "@/data/music_courses.json"
import Link from 'next/link'

const FeaturedCards = () => {
    return (
        <div className='py-12 bg-gray-900'>

            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                    FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
            </div>

            <div></div>

            <div className='mt-20 text-center'>
                <Link href={"/contact"} className="bg-zinc-700 rounded-full px-4 py-2 text-white">
                    View All Courses
                </Link>
            </div>

        </div >
    )
}

export default FeaturedCards