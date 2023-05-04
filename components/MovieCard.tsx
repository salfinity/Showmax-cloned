import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { BiChevronDown } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';

import { MovieInterface } from '@/types';
import FavoriteButton from './FavoriteButton';
import useInfoModal from '@/hooks/useInfoModalStore';

interface MovieCardProps {
  data: MovieInterface;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  const redirectToWatch = useCallback(() => router.push(`/watch/${data.id}`), [router, data.id]);

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] overflow-hidden">
      <img onClick={redirectToWatch} src={data.thumbnailUrl} alt="Thumbnail" draggable={false} className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
      " />
      <div area-hidden="true" className='absolute object-cover table-fixed w-[7vw] h-[7vw] bg-red-600 -top-14  -right-14 shadow-2xl rotate-45'>
         <div className='text-white text-[12px] font-bold absolute items-center bottom-1 ml-[2.55vw]'>
          NEW
         </div>
       </div>
      <div className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        h-[12vw]
        scale-0
        group-hover:scale-110
        group-hover:translate-x-[0vw]
        group-hover:opacity-100
      "
      >
      
        <div className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          h-[12vw]
          transition
          shadow-md
          rounded-t-md
          rounded-b-md
          ">
            <div className='flex flex-col cursor-pointer px-6 py-0'>
             <span className="text-white hover:text-underline">{data.title}</span>
          <div className="flex flex-row mt-4 gap-2 items-center"> 
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row pb-2 items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>{data.genre}</p>
          </div>
            </div>
          <div className="flex flex-row items-center gap-3 px-6 mb-6">
            <div onClick={redirectToWatch} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
              <BsFillPlayFill className="text-black w-4 lg:w-6" />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div onClick={() => openModal(data?.id)} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <BiChevronDown className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default MovieCard;