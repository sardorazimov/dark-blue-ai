'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UserBar = () => {
    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
         <div className="flex justify-between items-center border  rounded-md p-2">
            <div className='border rounded-lg items-center'>
            <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('light')}
            aria-label="Light mode"
          >
            <Sun size={20} />
          </Button>
          <span className="text-sm font-medium">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('dark')}
            aria-label="Dark mode"
          >
            <Moon size={20} />
           </Button>
            </div>
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