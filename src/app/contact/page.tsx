import React from 'react'
import { BackgroundBeams } from "../../components/ui/background-beams";

const page = () => {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-start justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-6">
                    Contact Us
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Have questions? We're here to help! Reach out to us via phone or email to learn more about our classes and how to get started on your musical journey.
                </p>
            </div>
            <div className='mx-auto w-[80%] sm:w-[50%]'>

                <input
                    type="text"
                    placeholder="Your Email Address"
                    required
                    className="rounded-lg border p-5 text-white border-neutral-800 focus:ring-2 focus:[#0e8179]  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                />

                <textarea
                    placeholder="Your Message"
                    rows={5}
                    cols={50}
                    required
                    className="rounded-lg border p-5 text-white border-neutral-800 focus:ring-2 focus:[#0e8179]  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700">
                </textarea>

            </div>
            <BackgroundBeams />
        </div>
    )
}

export default page