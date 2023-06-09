import {
    PencilAltIcon, EyeIcon
} from '@heroicons/react/solid';
import { useContext, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { BeatLoader } from 'react-spinners';
import Link from 'next/link'
import { useRouter } from 'next/router'
import PopunderAds from './Ads/Popunder';


function StoryThumbnail({ story_details }) {


    const router = useRouter()

    const rough = story_details.href.substring(story_details.href.indexOf('.com/') + 5, story_details.href.length - 1)
    const category = rough.substring(0, rough.indexOf('/'))
    const title = rough.substring(rough.indexOf('/') + 1, rough.length)





    return (
        <div className=" p-4 shadow-orange-100 shadow-2xl  my-2  rounded-lg "  >

            <PopunderAds />

            <Link href={`/${category}/${title}`}>
                <h2 className='text-[24px] sm:text-[27px] font-Opensans text-orange-800 cursor-pointer hover:text-green-800  '>{story_details.Title}</h2>
            </Link>
            <div className='flex items-center text-sm  my-2 space-x-2'>

                <div className='flex  items-center '>
                    <PencilAltIcon className='icon text-brown-400' />
                    <p onClick={() => { router.push(`/author/${story_details.author.href}`) }} className='cursor-pointer underline hover:text-red-500 font-semibold text-gray-600' >{story_details.author.name}</p>
                </div>
                <p className='font-semibold text-gray-600'>{story_details.date.day + "-" + story_details.date.month + "-" + story_details.date.year}</p>

                <div className='flex items-center'>
                    <EyeIcon className='icon text-blue-500' />
                    <p className='font-semibold text-gray-600'>{story_details.views}</p>
                </div>
            </div>


            <p className='text-gray-800 text-lg font-Opensans'>{story_details.description}</p>

            <Link href={`/${category}/${title}`}>
                <p className=' mb-1 font-semibold text-md font-kalam text-right text-orange-800 hover:text-green-800 cursor-pointer'>पूरी कहानी पढ़ें</p>
            </Link>


            <div className='flex flex-wrap space-x-1'>

                {story_details.tags.map(tag => {
                    return (


                        <p onClick={() => { router.push(`/tag/${tag.href.substring(tag.href.indexOf('tag/') + 4, tag.href.length - 1)}`) }} className='hover:text-orange-800 cursor-pointer underline  text-xs m-1 font-arial' key={tag.name}>{tag.name}</p>
                    )
                })}


            </div>
        </div>
    )
}

export default StoryThumbnail

