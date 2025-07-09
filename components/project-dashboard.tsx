import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, CheckCircle, Users, Calendar, MoreHorizontal } from "lucide-react"

export function ProjectDashboard() {
  const stats = [
    {
      title: "Projetos Ativos",
      value: "12",
      change: "+2 este mês",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Tarefas Concluídas",
      value: "89",
      change: "+12 hoje",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Em Andamento",
      value: "34",
      change: "5 atrasadas",
      icon: Clock,
      color: "text-orange-600",
    },
    {
      title: "Membros da Equipe",
      value: "24",
      change: "+3 novos",
      icon: Users,
      color: "text-purple-600",
    },
  ]

  const recentProjects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign completo do site corporativo",
      progress: 75,
      dueDate: "2024-02-15",
      status: "Em andamento",
      team: [
        { name: "Ana", avatar: "/placeholder-user.jpg" },
        { name: "Carlos", avatar: "/placeholder-user.jpg" },
        { name: "Maria", avatar: "/placeholder-user.jpg" },
      ],
      priority: "Alta",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Desenvolvimento do aplicativo mobile",
      progress: 45,
      dueDate: "2024-03-01",
      status: "Em andamento",
      team: [
        { name: "Pedro", avatar: "/placeholder-user.jpg" },
        { name: "Julia", avatar: "/placeholder-user.jpg" },
      ],
      priority: "Média",
    },
    {
      id: 3,
      name: "Marketing Campaign",
      description: "Campanha de marketing digital Q1",
      progress: 90,
      dueDate: "2024-01-30",
      status: "Quase concluído",
      team: [
        { name: "Lucas", avatar: "/placeholder-user.jpg" },
        { name: "Sofia", avatar: "/placeholder-user.jpg" },
        { name: "Bruno", avatar: "/placeholder-user.jpg" },
        { name: "Carla", avatar: "/placeholder-user.jpg" },
      ],
      priority: "Alta",
    },
  ]

  const recentActivity = [
    {
      user: "Ana Silva",
      action: "concluiu a tarefa",
      target: "Design do Header",
      time: "2 min atrás",
      avatar: "/placeholder-user.jpg",
    },
    {
      user: "Carlos Santos",
      action: "comentou em",
      target: "Revisão do Código",
      time: "15 min atrás",
      avatar: "/placeholder-user.jpg",
    },
    {
      user: "Maria Costa",
      action: "criou nova tarefa",
      target: "Testes de Usabilidade",
      time: "1h atrás",
      avatar: "/placeholder-user.jpg",
    },
    {
      user: "Pedro Lima",
      action: "atualizou o status de",
      target: "API Integration",
      time: "2h atrás",
      avatar: "/placeholder-user.jpg",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral dos seus projetos e tarefas</p>
        </div>
        <Button>Novo Projeto</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Projetos Recentes</CardTitle>
              <CardDescription>Acompanhe o progresso dos seus projetos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={project.priority === "Alta" ? "destructive" : "secondary"}>
                        {project.priority}
                      </Badge>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progresso</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.dueDate}</span>
                    </div>
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member, idx) => (
                        <Avatar key={idx} className="h-6 w-6 border-2 border-background">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs">{member.name[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                      {project.team.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                          <span className="text-xs">+{project.team.length - 3}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>Últimas atualizações da equipe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{activity.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
