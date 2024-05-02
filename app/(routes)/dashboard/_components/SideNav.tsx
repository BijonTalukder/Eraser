import Image from "next/image";
import React from "react";
import SideNavTopSection from "./SideNavTopSection";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const SideNav = () => {
  const { user }:any = useKindeBrowserClient();
  return (
    <div className='bg-gray-100 h-screen fixed w-72 border-r '>
      <SideNavTopSection user={user} />
    </div>
  );
};

export default SideNav;
