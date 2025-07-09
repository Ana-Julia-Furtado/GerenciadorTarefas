"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LayoutDashboard, FolderOpen, CheckSquare, Users, Settings, Search, Plus, Bell } from "lucide-react"

interface SidebarProps {
  activeView: string
  onViewChange: (view: string) => void
  selectedProject: any
}

export function Sidebar({ activeView, onViewChange, selectedProject }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "projects", label: "Projetos", icon: FolderOpen },
    { id: "tasks", label: "Tarefas", icon: CheckSquare },
    { id: "team", label: "Equipe", icon: Users },
  ]

  const recentProjects = [
    { id: 1, name: "Website Redesign", color: "bg-blue-500", tasks: 12 },
    { id: 2, name: "Mobile App", color: "bg-green-500", tasks: 8 },
    { id: 3, name: "Marketing Campaign", color: "bg-purple-500", tasks: 15 },
  ]

  return (
    <div className="w-64 bg-card border-r flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">TaskFlow</h1>
          <Button size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeView === item.id ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onViewChange(item.id)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Projetos Recentes</h3>
          <Button size="icon" variant="ghost" className="h-6 w-6">
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        <div className="space-y-2">
          {recentProjects.map((project) => (
            <div key={project.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
              <div className={`w-3 h-3 rounded-full ${project.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{project.name}</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                {project.tasks}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">João Silva</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
