import { Label } from "flowbite-react";
import React from "react";

interface NavbaiItemProps {
  label: string;
}

const NavbaiItem: React.FC<NavbaiItemProps> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer text-center block border border-none rounded-full hover:text-gray-950 hover:bg-gray-200 py-2 px-4 transition">
      {label}
    </div>
  );
};

export default NavbaiItem;
