import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Mail, Phone, MapPin, Calendar, TrendingUp, Clock, CheckCircle, Plus } from "lucide-react"

export function TeamView() {
  const teamMembers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "UI/UX Designer",
      email: "ana@company.com",
      phone: "+55 11 99999-9999",
      location: "São Paulo, SP",
      avatar: "/placeholder-user.jpg",
      status: "online",
      tasksCompleted: 23,
      tasksInProgress: 5,
      productivity: 92,
      joinDate: "Jan 2023",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Frontend Developer",
      email: "carlos@company.com",
      phone: "+55 11 88888-8888",
      location: "Rio de Janeiro, RJ",
      avatar: "/placeholder-user.jpg",
      status: "online",
      tasksCompleted: 31,
      tasksInProgress: 3,
      productivity: 88,
      joinDate: "Mar 2023",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      id: 3,
      name: "Maria Costa",
      role: "Product Manager",
      email: "maria@company.com",
      phone: "+55 11 77777-7777",
      location: "Belo Horizonte, MG",
      avatar: "/placeholder-user.jpg",
      status: "away",
      tasksCompleted: 18,
      tasksInProgress: 7,
      productivity: 85,
      joinDate: "Feb 2023",
      skills: ["Scrum", "Jira", "Analytics", "Strategy"],
    },
    {
      id: 4,
      name: "Pedro Lima",
      role: "Backend Developer",
      email: "pedro@company.com",
      phone: "+55 11 66666-6666",
      location: "Porto Alegre, RS",
      avatar: "/placeholder-user.jpg",
      status: "offline",
      tasksCompleted: 28,
      tasksInProgress: 4,
      productivity: 90,
      joinDate: "Apr 2023",
      skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
    },
    {
      id: 5,
      name: "Julia Oliveira",
      role: "QA Engineer",
      email: "julia@company.com",
      phone: "+55 11 55555-5555",
      location: "Curitiba, PR",
      avatar: "/placeholder-user.jpg",
      status: "online",
      tasksCompleted: 15,
      tasksInProgress: 6,
      productivity: 87,
      joinDate: "May 2023",
      skills: ["Selenium", "Jest", "Cypress", "Manual Testing"],
    },
    {
      id: 6,
      name: "Lucas Ferreira",
      role: "DevOps Engineer",
      email: "lucas@company.com",
      phone: "+55 11 44444-4444",
      location: "Brasília, DF",
      avatar: "/placeholder-user.jpg",
      status: "online",
      tasksCompleted: 12,
      tasksInProgress: 2,
      productivity: 94,
      joinDate: "Jun 2023",
      skills: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "offline":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online"
      case "away":
        return "Ausente"
      case "offline":
        return "Offline"
      default:
        return "Desconhecido"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Equipe</h1>
          <p className="text-muted-foreground">Gerencie e acompanhe sua equipe</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Convidar Membro
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Membros</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamMembers.length}</div>
            <p className="text-xs text-muted-foreground">+2 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Online Agora</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamMembers.filter((m) => m.status === "online").length}</div>
            <p className="text-xs text-muted-foreground">Membros ativos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tarefas Concluídas</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {teamMembers.reduce((acc, member) => acc + member.tasksCompleted, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtividade Média</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(teamMembers.reduce((acc, member) => acc + member.productivity, 0) / teamMembers.length)}%
            </div>
            <p className="text-xs text-muted-foreground">+5% vs mês anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`}
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {getStatusText(member.status)}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Desde {member.joinDate}</span>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Tarefas Concluídas</span>
                  <span className="font-medium">{member.tasksCompleted}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Em Progresso</span>
                  <span className="font-medium">{member.tasksInProgress}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Produtividade</span>
                    <span className="font-medium">{member.productivity}%</span>
                  </div>
                  <Progress value={member.productivity} className="h-2" />
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Habilidades</h4>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
