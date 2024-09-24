'use client'
import React, {  } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UserBar = () => {

  return (
    <div>
         <div className="flex justify-between items-center border  rounded-md p-2">
         
        </div>
        <div className="flex items-center space-x-2 cursor-pointer mb-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/logo.svg" alt="Blue." />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="text-sm font-medium">Mark S.</p>
                <p className="text-xs text-muted-foreground">mark@gmail.ai</p>
              </div>
            </div>
    </div>
  )
}

export default UserBar