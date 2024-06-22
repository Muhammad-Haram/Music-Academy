"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const whyChooseUs = [
    {
        title: "Expert Instructors",
        description:
            "Learn from the best in the industry. Our music academy boasts a team of highly qualified and experienced instructors who are passionate about teaching. They bring their professional expertise and a love for music to every lesson, ensuring you receive top-notch instruction and guidance."
    },
    {
        title: "Personalized Curriculum",
        description:
            "Your musical journey is unique, and so is our approach. We offer a personalized curriculum tailored to your individual needs and goals. Whether you're a beginner or an advanced musician, our flexible programs are designed to help you progress at your own pace and achieve your musical aspirations."
    },
    {
        title: "State-of-the-Art Facilities",
        description:
            "Practice and learn in an inspiring environment. Our academy features state-of-the-art facilities equipped with the latest musical instruments and technology. Enjoy a comfortable and professional setting that enhances your learning experience and fosters creativity."
    },
    {
        title: "Performance Opportunities",
        description:
            "Showcase your talent and gain confidence through regular performance opportunities. We organize concerts, recitals, and community events where you can perform in front of an audience. These experiences are invaluable for building stage presence and gaining practical performance skills."
    },
    {
        title: "Supportive Community",
        description:
            "Join a vibrant and supportive community of music lovers. At our academy, you'll connect with fellow students who share your passion for music. Participate in group activities, collaborative projects, and social events that enrich your learning experience and create lasting friendships."
    },
];

const WhyChooseUs = () => {
    return (
        <div className='bg-[#121827]'>

            <h2 className='text-center pb-2 pt-5 sm:pt-16 text-teal-600 font-semibold tracking-wide uppercase'>
                Discover our Music Academy</h2>

            <h1 className='text-center pb-5 sm:pb-12 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Why Choose US</h1>

            <StickyScroll content={whyChooseUs} />

        </div>
    )
}

export default WhyChooseUs
