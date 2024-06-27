"use client"

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export const MusicWebinarsCards = [
    {
        title: "Spotify",
        description:
            "Discover new music, podcasts, and artists on Spotify. Stream music for free with ads or subscribe for ad-free listening, offline playback, and exclusive content. Explore curated playlists and personalized recommendations.",
        link: "https://spotify.com",
    },
    {
        title: "SoundCloud",
        description:
            "SoundCloud is a platform for creators to upload, promote, and share their music worldwide. Discover emerging and established artists across diverse genres. Connect with a community of music enthusiasts and explore new tracks.",
        link: "https://soundcloud.com",
    },
    {
        title: "Apple Music",
        description:
            "Apple Music offers over 90 million ad-free songs, albums, and playlists. Listen across all your devices and explore curated playlists tailored to your taste. Discover new music with recommendations based on your listening habits.",
        link: "https://music.apple.com",
    },
    {
        title: "Bandcamp",
        description:
            "Bandcamp is a platform to discover indie music and directly support artists. Explore a diverse catalog of music spanning genres like indie rock, electronic, hip-hop, and more. Purchase music and merchandise to support your favorite artists.",
        link: "https://bandcamp.com",
    },
    {
        title: "YouTube Music",
        description:
            "YouTube Music is a music streaming service with a vast library of songs, albums, and videos. Enjoy music videos, live performances, and original content from your favorite artists. Discover new tracks and personalized playlists.",
        link: "https://music.youtube.com",
    },
    {
        title: "Tidal",
        description:
            "Tidal offers high-fidelity music streaming with over 80 million tracks in lossless quality. Explore exclusive music and videos from top artists across genres. Experience superior sound with Tidal's high-definition audio formats.",
        link: "https://tidal.com",
    },
];

const UpComing = () => {
    return (

        <div className='py-12 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>

                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                        FEATURED WEBINARS</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
                </div>

                <div className='mt-10'>
                    <HoverEffect items={MusicWebinarsCards} />
                </div>

                <div className='mt-0 text-center'>
                    <Link href={"/"} className="bg-zinc-700 rounded-full px-4 py-2 text-white">
                        View All Courses
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default UpComing
