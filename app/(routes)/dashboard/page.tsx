"use client"
import { Button } from '@/components/ui/button'
import { api } from "@/convex/_generated/api";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation, useQueries, useQuery } from "convex/react";
import React, { useEffect } from "react";

export default function dashboard() {
  const { user }: any = useKindeBrowserClient();
  const convex = useConvex();
  const getUser = useQuery(api.user.getUser, { email: user?.email });

  const createUser = useMutation(api.user.createUser);
  useEffect(() => {
    if (user) {
      console.log(getUser);

      if (getUser == undefined) {
        createUser({
          name: user.given_name,
          email: user.email,
          image: user.picture,
        }).then((resp) => {
          console.log(resp);
        });
      }
    }
  }, []);

  const checkUsr = async () => {
    const result = await convex.query(api.user.getUser,{email:user?.email});
  };
  return (
    <div>
      dashboard
      <Button>
        <LoginLink>Logout</LoginLink>
      </Button>
    </div>
  );
}
