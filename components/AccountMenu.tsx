import { signOut } from 'next-auth/react';
import React from 'react';

import BsQuestionCircleFill from "react-icons/bs";

import useCurrentUser from '@/hooks/useCurrentUser';
import { AiFillQuestionCircle } from 'react-icons/ai';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-zinc-800 w-56 absolute top-14 right-0 py-5 px-2 flex-col border-none rounded-md border-gray-800 flex">
      <div className="flex flex-col columns-3 gap-3">
        <div className="px-3 py-1 group/item flex flex-row gap-3 items-center w-full rounded-full hover:text-gray-950 hover:bg-gray-200">
          <img className="w-8 rounded-full" src="/images/default-blue.png" alt="" />
          <p className="text-white font-bold text-sm group-hover/item:text-gray-950">{currentUser?.name}</p>
        </div>
        <div className="px-3 py-1 group/item flex flex-row gap-3 items-center w-full rounded-full hover:text-gray-950 hover:bg-gray-200">
          <img className="w-8 rounded-full" src="/images/default-yellow.png" alt="" />
          <p className="text-white font-bold text-sm group-hover/item:text-gray-950">Guest</p>
        </div>
        <div className="px-3 py-1 group/item flex flex-row gap-3 items-center w-full rounded-full hover:text-gray-950 hover:bg-gray-200">
          <img className="w-8 rounded-full" src="/images/default-black.png" alt="" />
          <p className="text-white font-bold text-sm group-hover/item:text-gray-950">Salim Junior</p>
        </div>
        <div className="px-3 py-1 group/item flex flex-row gap-3 items-center w-full rounded-full hover:text-gray-950 hover:bg-gray-200">
          <img className="w-8 rounded-full" src="/images/default-green.png" alt="" />
          <p className="text-white font-bold text-sm group-hover/item:text-gray-950">wanjiru</p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div className="px-3 py-1 ml-6 flex flex-row items-center text-white text-sm font-bold hover:text-gray-950 border border-none rounded-full hover:bg-gray-200">
         <AiFillQuestionCircle className='mr-2' /> help
        </div>
      <div onClick={() => signOut()} className="px-3 py-1 text-center text-white text-sm font-bold hover:text-gray-950 border border-none rounded-full hover:bg-gray-200">
        Sign Out of Showmax
      </div>
    </div>
  )
}

export default AccountMenu;