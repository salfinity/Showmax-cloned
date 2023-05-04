import React from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-zinc-800 w-56 absolute rounded-md top-8 left-0 py-5 flex-col border border-none flex">
      <div className="flex flex-col gap-4">
        <div className="text-white text-center block border border-none rounded-full hover:text-black hover:bg-gray-200 py-2 px-4 mx-4">
          Home
        </div>
        <div className="text-white text-center block border border-none rounded-full hover:text-black hover:bg-gray-200 py-2 px-4 mx-4">
          Series
        </div>
        <div className="text-white text-center block border border-none rounded-full hover:text-black hover:bg-gray-200 py-2 px-4 mx-4">
          Movies
        </div>
        <div className="text-white text-center block border border-none rounded-full hover:text-black hover:bg-gray-200 py-2 px-4 mx-4">
          Sport
        </div>
        <div className="text-white text-center block border border-none rounded-full hover:text-black hover:bg-gray-200 py-2 px-4 mx-4">
          My List
        </div>
      </div>
    </div>
  )
}
 
export default MobileMenu;