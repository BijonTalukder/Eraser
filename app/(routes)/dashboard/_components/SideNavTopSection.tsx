import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
const SideNavTopSection = ({ user }:any) => {
  const menu = [
    {
      id: 1,
      name: "create team",
      path: "teams/create",
    },
    {
      id: 2,
      name: "settings",
      path: "teams/create",
    },
  ];
  //   const
  return (
    <Popover>
      <PopoverTrigger>
        {" "}
        <div className='flex items-center'>
          <Image height={40} width={40} alt='' src={"/"} />
          <h2>Team Name</h2>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          {" "}
          <h2>Team Name</h2>
        </div>

        <div>
          {menu.map((item) => (
            <h2>{item.name}</h2>
          ))}
          <LogoutLink>
            <h2>Logout</h2>
          </LogoutLink>

          <div>
            {user && (
              <Image height={40} width={40} alt='' src={user?.picture} />
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SideNavTopSection;
