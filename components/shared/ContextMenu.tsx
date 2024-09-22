"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ChevronDown, MessageSquare, Star, Archive, PlusCircle, Sun, Moon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Lock } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { BiCloset } from 'react-icons/bi'

export default function ContextMenu() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [privateContent, setPrivateContent] = useState("This is private content")

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (open) {
      // Simulate fetching private content when popover opens
      setPrivateContent("Newly fetched private content")
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex ">
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <div  className=' flex' >
          <ChevronDown className="mr-2 mt-1 h-4 w-4" />
          {isOpen ? "Close Chat" : "Open Chat"}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <div className="">
        <nav className="space-y-2 flex-grow">
        <ChatItem icon={<MessageSquare size={18} className='text-red-600' />} label="Welcome" count={41} active />
        <ChatItem icon={<MessageSquare size={18}  className='text-green-600'/>} label="Xora Production" count={10}  />
        <ChatItem icon={<Star size={18} className='text-yellow-600' />} label="Favorites"  count={1} />
        <ChatItem icon={<Archive size={18} className='text-fuchsia-700' />} label="Archived" count={128} />
        <ChatItem icon={<PlusCircle size={18} className='text-purple-600' />} label="New list" count={2} />
      </nav>
    
          {/* <Button onClick={() => setIsOpen(false)} className=''>Close</Button> */}
        </div>
      </PopoverContent>
    </Popover>
  </div>
  )
}

function ChatItem({ icon, label, count, active = false }) {
  return (
    <div className={`flex items-center space-x-2 p-2 rounded ${active ? 'bg-secondary' : 'hover:bg-secondary/50'}`}>
      <span className={`${active ? 'text-primary' : 'text-muted-foreground'}`}>{icon}</span>
      <span className="flex-grow">{label}</span>
      {count && (
        <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
          {count}
        </span>
      )}
    </div>
  )
}