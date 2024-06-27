"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolCards = [
    {
        quote: 'Joining the music school has been transformative for my understanding of music. The instructors are not only world-class but also deeply inspiring. Their guidance has helped me discover my unique sound on the guitar, and I\'m grateful for the supportive environment that encourages growth and creativity.',
        name: 'Emily Davis',
        title: 'Guitar Student'
    },
    {
        quote: 'The music school has provided me with invaluable opportunities to refine my piano skills. The teachers are incredibly supportive and knowledgeable, offering personalized guidance that has accelerated my progress. I\'ve gained confidence in my abilities and feel prepared to pursue a career in music with passion and skill.',
        name: 'Michael Brown',
        title: 'Piano Student'
    },
    {
        quote: 'Studying drums at the music school has been an amazing journey of growth. The environment is nurturing and encouraging, allowing me to develop my skills with confidence. The instructors are passionate and dedicated, pushing me to explore new techniques and genres. I\'m excited for the future as a drummer.',
        name: 'Sophia Carter',
        title: 'Drum Student'
    },
    {
        quote: 'The music school has empowered me to explore my vocal potential fully. The lessons are challenging yet rewarding, and the teachers are incredibly supportive. They\'ve helped me refine my technique and express myself authentically through music. I\'ve grown both as a vocalist and as a performer.',
        name: 'Daniel Green',
        title: 'Vocal Student'
    },
    {
        quote: 'Studying bass guitar at the music school has been an enriching experience. The instructors are experts who provide personalized guidance and encouragement. The school\'s supportive environment has allowed me to explore different styles and techniques, helping me become a versatile and skilled bassist.',
        name: 'Olivia White',
        title: 'Bass Guitar Student'
    },
    {
        quote: 'The music school has provided me with numerous opportunities to perform violin in front of an audience. The supportive community and expert instruction have helped me grow as a musician and performer. I\'m grateful for the mentorship and friendships I\'ve developed at the school.',
        name: 'Sophie Taylor',
        title: 'Violin Student'
    },
    {
        quote: 'Studying flute at the music school has been an incredible journey of musical discovery. The teachers are passionate about music and dedicated to their students\' success. They\'ve challenged me to push my boundaries and explore new musical horizons, helping me become a confident and skilled flutist.',
        name: 'Lucas Martinez',
        title: 'Flute Student'
    }
];

const MovingCards = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden">

            <h2 className="text-center text-white font-bold text-3xl mb-8 z-10">Hear Our Harmony : Voices Of Success</h2>

            <div className="flex justify-center w-full overflow-hidden px-0 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolCards}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>

        </div>
    )
}
    
export default MovingCards