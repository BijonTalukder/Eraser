"use client"
import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

export default function dashboard() {
  return (
    <div>
      dashboard
      <Button><LoginLink>Logout</LoginLink></Button>
    </div>
  )
}
