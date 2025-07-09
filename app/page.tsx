"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ProjectDashboard } from "@/components/project-dashboard"
import { TaskBoard } from "@/components/task-board"
import { TeamView } from "@/components/team-view"
import { ProjectList } from "@/components/project-list"

export default function HomePage() {
  const [activeView, setActiveView] = useState("dashboard")
  const [selectedProject, setSelectedProject] = useState(null)

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <ProjectDashboard />
      case "projects":
        return <ProjectList onSelectProject={setSelectedProject} />
      case "tasks":
        return <TaskBoard projectId={selectedProject?.id} />
      case "team":
        return <TeamView />
      default:
        return <ProjectDashboard />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeView={activeView} onViewChange={setActiveView} selectedProject={selectedProject} />
      <main className="flex-1 overflow-hidden">{renderContent()}</main>
    </div>
  )
}
