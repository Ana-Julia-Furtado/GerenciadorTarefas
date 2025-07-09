"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus, MoreHorizontal, Star } from "lucide-react"

interface ProjectListProps {
  onSelectProject: (project: any) => void
}

export function ProjectList({ onSelectProject }: ProjectListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign completo do site corporativo com nova identidade visual e melhor experiência do usuário",
      status: "Em andamento",
      priority: "Alta",
      progress: 75,
      startDate: "2024-01-01",
      dueDate: "2024-02-15",
      budget: "R$ 50.000",
      team: [
        { name: "Ana", avatar: "/placeholder-user.jpg" },
        { name: "Carlos", avatar: "/placeholder-user.jpg" },
        { name: "Maria", avatar: "/placeholder-user.jpg" },
        { name: "Pedro", avatar: "/placeholder-user.jpg" },
      ],
      tasks: { total: 24, completed: 18, inProgress: 4, todo: 2 },
      client: "Empresa ABC",
      tags: ["Design", "Frontend", "UX"],
      starred: true,
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Desenvolvimento de aplicativo mobile para iOS e Android com funcionalidades de e-commerce",
      status: "Em andamento",
      priority: "Alta",
      progress: 45,
      startDate: "2024-01-15",
      dueDate: "2024-03-01",
      budget: "R$ 80.000",
      team: [
        { name: "Pedro", avatar: "/placeholder-user.jpg" },
        { name: "Julia", avatar: "/placeholder-user.jpg" },
        { name: "Lucas", avatar: "/placeholder-user.jpg" },
      ],
      tasks: { total: 32, completed: 14, inProgress: 8, todo: 10 },
      client: "StartupXYZ",
      tags: ["Mobile", "React Native", "E-commerce"],
      starred: false,
    },
    {
      id: 3,
      name: "Marketing Campaign Q1",
      description: "Campanha de marketing digital para o primeiro trimestre com foco em redes sociais e SEO",
      status: "Quase concluído",
      priority: "Média",
      progress: 90,
      startDate: "2023-12-01",
      dueDate: "2024-01-30",
      budget: "R$ 25.000",
      team: [
        { name: "Sofia", avatar: "/placeholder-user.jpg" },
        { name: "Bruno", avatar: "/placeholder-user.jpg" },
        { name: "Carla", avatar: "/placeholder-user.jpg" },
      ],
      tasks: { total: 16, completed: 14, inProgress: 2, todo: 0 },
      client: "Marketing Pro",
      tags: ["Marketing", "SEO", "Social Media"],
      starred: true,
    },
    {
      id: 4,
      name: "API Integration Project",
      description: "Integração de APIs de terceiros para sistema de pagamentos e logística",
      status: "Planejamento",
      priority: "Média",
      progress: 15,
      startDate: "2024-02-01",
      dueDate: "2024-04-15",
      budget: "R$ 35.000",
      team: [
        { name: "Pedro", avatar: "/placeholder-user.jpg" },
        { name: "Lucas", avatar: "/placeholder-user.jpg" },
      ],
      tasks: { total: 20, completed: 3, inProgress: 2, todo: 15 },
      client: "TechCorp",
      tags: ["Backend", "API", "Integration"],
      starred: false,
    },
    {
      id: 5,
      name: "Data Analytics Dashboard",
      description: "Dashboard para análise de dados com visualizações interativas e relatórios automatizados",
      status: "Concluído",
      priority: "Baixa",
      progress: 100,
      startDate: "2023-11-01",
      dueDate: "2023-12-31",
      budget: "R$ 40.000",
      team: [
        { name: "Maria", avatar: "/placeholder-user.jpg" },
        { name: "Ana", avatar: "/placeholder-user.jpg" },
        { name: "Carlos", avatar: "/placeholder-user.jpg" },
      ],
      tasks: { total: 18, completed: 18, inProgress: 0, todo: 0 },
      client: "DataCorp",
      tags: ["Analytics", "Dashboard", "Data Viz"],
      starred: false,
    },
    {
      id: 6,
      name: "Security Audit",
      description: "Auditoria completa de segurança dos sistemas e implementação de melhorias",
      status: "Em pausa",
      priority: "Alta",
      progress: 30,
      startDate: "2024-01-10",
      dueDate: "2024-02-28",
      budget: "R$ 60.000",
      team: [
        { name: "Lucas", avatar: "/placeholder-user.jpg" },
        { name: "Julia", avatar: "/placeholder-user.jpg" },
      ],
      tasks: { total: 25, completed: 7, inProgress: 1, todo: 17 },
      client: "SecureTech",
      tags: ["Security", "Audit", "Infrastructure"],
      starred: true,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "default"
      case "Em andamento":
        return "default"
      case "Quase concluído":
        return "secondary"
      case "Planejamento":
        return "outline"
      case "Em pausa":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "destructive"
      case "Média":
        return "default"
      case "Baixa":
        return "secondary"
      default:
        return "outline"
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filterStatus === "all" || project.status === filterStatus

    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projetos</h1>
          <p className="text-muted-foreground">Gerencie todos os seus projetos em um só lugar</p>
        </div>
        <Button onClick={() => {}}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Projeto
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar projetos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{projects.length}</div>
            <p className="text-sm text-muted-foreground">Total de Projetos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">
              {projects.filter((p) => p.status === "Em andamento").length}
            </div>
            <p className="text-sm text-muted-foreground">Em Andamento</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {projects.filter((p) => p.status === "Concluído").length}
            </div>
            <p className="text-sm text-muted-foreground">Concluídos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">
              {projects.filter((p) => p.status === "Em pausa").length}
            </div>
            <p className="text-sm text-muted-foreground">Em Pausa</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    {project.starred && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                  </div>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getStatusColor(project.status)}>{project.status}</Badge>
                    <Badge variant={getPriorityColor(project.priority)}>{project.priority}</Badge>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Cliente</p>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Orçamento</p>
                  <p className="font-medium">{project.budget}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Início</p>
                  <p className="font-medium">{project.startDate}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Prazo</p>
                  <p className="font-medium">{project.dueDate}</p>
                </div>
              </div>

              {/* Tasks Summary */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="text-green-600">✓ {project.tasks.completed}</span>
                  <span className="text-blue-600">⟳ {project.tasks.inProgress}</span>
                  <span className="text-gray-600">○ {project.tasks.todo}</span>
                </div>
                <span className="text-muted-foreground">{project.tasks.total} tarefas</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Team */}
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 4).map((member, idx) => (
                    <Avatar key={idx} className="h-6 w-6 border-2 border-background">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs">{member.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                  {project.team.length > 4 && (
                    <div className="h-6 w-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                      <span className="text-xs">+{project.team.length - 4}</span>
                    </div>
                  )}
                </div>
                <Button variant="outline" size="sm" onClick={() => onSelectProject(project)}>
                  Ver Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
