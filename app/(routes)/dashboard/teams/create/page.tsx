"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const {user} = useKindeBrowserClient()
  const createTeam = useMutation(api?.teams.createTeam)
  const router = useRouter()
  const createNewTeam= ()=>{
    createTeam({
      teamName:teamName,
      createdBy:user?.email
    }).then(resp=>{
      if(resp){
        router.push("/dashboard")
        alert("team created")
      }
    })
  }
  return (
    <div className='p-7'>
      <Image height={200} width={200} alt='' src='/earser.svg' />
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-[40px] py-3'>
          What Should we call your team?
        </h2>
        <h2 className='text-gray-500'>
          you can always change this later from settings
        </h2>
        <div>
          <label>Team Name</label>
          <input onChange={(e) => setTeamName(e.target.value)} />
        </div>
        <Button disabled={!(teamName && teamName.length > 0)}>
          Create Team
        </Button>
      </div>
    </div>
  );
}
