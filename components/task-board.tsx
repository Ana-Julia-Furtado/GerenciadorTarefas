"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, Calendar, MessageSquare, Paperclip, MoreHorizontal } from "lucide-react"

interface TaskBoardProps {
  projectId?: string
}

export function TaskBoard({ projectId }: TaskBoardProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const columns = [
    {
      id: "todo",
      title: "A Fazer",
      color: "bg-gray-100",
      tasks: [
        {
          id: 1,
          title: "Criar wireframes da homepage",
          description: "Desenvolver wireframes detalhados para a nova homepage",
          priority: "Alta",
          assignee: { name: "Ana", avatar: "/placeholder-user.jpg" },
          dueDate: "2024-01-25",
          comments: 3,
          attachments: 2,
          tags: ["Design", "UX"],
        },
        {
          id: 2,
          title: "Pesquisa de mercado",
          description: "Analisar concorrentes e tendências do mercado",
          priority: "Média",
          assignee: { name: "Carlos", avatar: "/placeholder-user.jpg" },
          dueDate: "2024-01-28",
          comments: 1,
          attachments: 0,
          tags: ["Pesquisa"],
        },
      ],
    },
    {
      id: "progress",
      title: "Em Progresso",
      color: "bg-blue-100",
      tasks: [
        {
          id: 3,
          title: "Desenvolvimento da API",
          description: "Implementar endpoints da API REST",
          priority: "Alta",
          assignee: { name: "Pedro", avatar: "/placeholder-user.jpg" },
          dueDate: "2024-01-30",
          comments: 5,
          attachments: 1,
          tags: ["Backend", "API"],
        },
        {
          id: 4,
          title: "Testes de usabilidade",
          description: "Conduzir testes com usuários reais",
          priority: "Média",
          assignee: { name: "Maria", avatar: "/placeholder-user.jpg" },
          dueDate: "2024-02-02",
          comments: 2,
          attachments: 3,
          tags: ["UX", "Testes"],
        },
      ],
    },
    {
      id: "review",
      title: "Em Revisão",
      color: "bg-yellow-100",
      tasks: [
        {
          id: 5,
          title: "Revisão do código frontend",
          description: "Code review dos componentes React",
          priority: "Alta",
          assignee: { name: "Julia", avatar: "/placeholder-user.jpg" },
          dueDate: "2024-01-26",
          comments: 8,
          attachments: 0,
          tags: ["Frontend", "Review"],
        },
      ],
    },
    {
      id: "done",
      title: "Concluído",
      color: "bg-green-100",
      tasks: [
        {
          id: 6,
          title: "Setup do ambiente de desenvolvimento",
          description: "Configurar Docker e ambiente local",
          priority: "Baixa",
          assignee: { name: "Lucas", avatar: "/placeholder-user.jpg" },
          dueDate: "2024-01-20",
          comments: 2,
          attachments: 1,
          tags: ["DevOps"],
        },
        {
          id: 7,
          title: "Documentação da arquitetura",
          description: "Documentar a arquitetura do sistema",
          priority: "Média",
          assignee: { name: "Sofia", avatar: "/placeholder-user.jpg" },
          dueDate: "2024-01-22",
          comments: 4,
          attachments: 2,
          tags: ["Documentação"],
        },
      ],
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "destructive"
      case "Média":
        return "default"
      case "Baixa":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Quadro de Tarefas</h1>
          <p className="text-muted-foreground">Gerencie suas tarefas com metodologia Kanban</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar tarefas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-64"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Tarefa
          </Button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto">
        <div className="flex space-x-6 h-full min-w-max">
          {columns.map((column) => (
            <div key={column.id} className="flex-shrink-0 w-80">
              <div className={`rounded-lg p-4 ${column.color} mb-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{column.title}</h3>
                  <Badge variant="secondary">{column.tasks.length}</Badge>
                </div>
              </div>

              <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                {column.tasks.map((task) => (
                  <Card key={task.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-sm font-medium leading-tight">{task.title}</CardTitle>
                        <Button size="icon" variant="ghost" className="h-6 w-6">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                      {task.description && <p className="text-xs text-muted-foreground mt-1">{task.description}</p>}
                    </CardHeader>

                    <CardContent className="pt-0 space-y-3">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {task.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Priority */}
                      <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                        {task.priority}
                      </Badge>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{task.dueDate}</span>
                          </div>
                          {task.comments > 0 && (
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="h-3 w-3" />
                              <span>{task.comments}</span>
                            </div>
                          )}
                          {task.attachments > 0 && (
                            <div className="flex items-center space-x-1">
                              <Paperclip className="h-3 w-3" />
                              <span>{task.attachments}</span>
                            </div>
                          )}
                        </div>

                        <Avatar className="h-6 w-6">
                          <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs">{task.assignee.name[0]}</AvatarFallback>
                        </Avatar>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Add Task Button */}
                <Button variant="ghost" className="w-full border-2 border-dashed border-muted-foreground/25 h-12">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Tarefa
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
