import React, { useCallback } from 'react';
import { AiOutlineInfoCircle, AiOutlinePlus } from 'react-icons/ai';

import PlayButton from '@/components/PlayButton';
import useBillboard from '@/hooks/useBillboard';
import useInfoModalStore from '@/hooks/useInfoModalStore';

const Billboard: React.FC = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModalStore();  

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);  


  return (
    <div className="relative w-full h-[54.25vw]">
      <video 
      poster={data?.thumbnailUrl} 
        className="w-full h-[50.25vw] relative object-cover brightness-[20%]">
      </video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-4xl h-full w-2/3 lg:text-5xl font-bold drop-shadow-xl">
          {data?.title}
        </p>        
        <p className="text-white text-[8px] font-semibold md:text-lg mt-2 md:mt-8 w-2/3 lg:w-2/3 drop-shadow-xl">
          {data?.title} | 2023 | {data?.duration} | TV-PG:GUIDANCE
        </p>
        <p className="text-white text-[8px] md:text-lg mt-2 md:mt-8 w-[90%] md:w-[80%] lg:w-[35%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="
              border
              border-white
              text-white
              hover:text-black
              bg-opacity-30 
              rounded-full 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-white
              transition
            "
            >
              <AiOutlineInfoCircle className="w-4 md:w-7 mr-1" />
              More Info
          </button>
          <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:bg-neutral-100">
          <AiOutlinePlus className="text-white hover:bg-neutral-100 hover:text-black w-4 lg:w-6" />
         </div>
       </div>
       <video 
       poster={data?.thumbnailUrl}
       className='absolute object-cover brightness-75 w-7/12 h-[28vw] -right-0 -top-36  rounded-xl shadow-2xl cursor-pointer hidden lg:flex'
       autoPlay
       loop
       src={data?.videoUrl}
       > 
       </video>
     </div>     
   </div>
  )
}
export default Billboard;
