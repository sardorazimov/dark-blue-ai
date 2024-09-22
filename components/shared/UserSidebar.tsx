import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ClipboardCopy, Trash2 } from "lucide-react"

interface ChatItem {
  title: string;
  description: string;
  avatar: string;
  time: string;
  image?: string;
}

const chatItems: ChatItem[] = [
  {
    title: "Xora sense",
    description: "Write code (HTML, CSS and JS) for a...",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "Just now"
  },
  {
    title: "Welcome page with input",
    description: "Write code (HTML, CSS and JS) for a...",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "Just now",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202024-09-22%20164005-3p2q7QhBXEWGFy4RFe19m2mZ4swPmP.png"
  },
  {
    title: "Photo retouch",
    description: "Photography shot of anime Travelers...",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "Just now"
  },
  {
    title: "Auto generate title",
    description: "Write code (HTML, CSS and JS) for a...",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "Just now"
  }
]

export default function UserSideBar() {
  return (
    <div className="w-full flex h-screen bg-[#0f1729] text-white  flex-col">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="bg-green-500 w-2 h-2 rounded-full"></div>
        </div>
        <Button variant="outline" className="text-white border-white hover:bg-[#1a2234]">
          Share
        </Button>
      </div>
      
      <div className="flex justify-between items-center px-4 py-2">
        <span className="text-sm font-medium">Chat history</span>
        <span className="text-xs text-gray-400">28/100</span>
        <Trash2 className="h-4 w-4 text-gray-400" />
      </div>
      
      <ScrollArea className="flex-grow">
        {chatItems.map((item, index) => (
          <div key={index} className="p-4 hover:bg-[#1a2234] cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium">{item.title}</span>
              <ClipboardCopy className="h-4 w-4 text-gray-400" />
            </div>
            <p className="text-sm text-gray-400 mb-2">{item.description}</p>
            {item.image && (
              <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded-md mb-2" />
            )}
            <div className="flex items-center justify-between">
              <Avatar className="h-6 w-6">
                <AvatarImage src={item.avatar} alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
          </div>
        ))}
      </ScrollArea>
      
      <Button className="m-4 bg-[#4f46e5] hover:bg-[#4338ca]">
        + New project
      </Button>
    </div>
  )
}