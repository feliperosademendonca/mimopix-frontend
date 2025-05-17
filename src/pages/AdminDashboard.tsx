
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Settings, 
  BarChart2, 
  Calendar,
  Gift, 
  Percent, 
  Ticket,
  User,
  ArrowRight,
  Bell,
  Save
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock data for demo purposes
const mockUsers = [
  {
    id: "1",
    name: "João da Silva",
    email: "joao@example.com",
    eventsCreated: 5,
    joinDate: "2025-01-15",
    status: "active"
  },
  {
    id: "2",
    name: "Maria Oliveira",
    email: "maria@example.com",
    eventsCreated: 3,
    joinDate: "2025-02-20",
    status: "active"
  },
  {
    id: "3",
    name: "Pedro Santos",
    email: "pedro@example.com",
    eventsCreated: 7,
    joinDate: "2025-01-05",
    status: "active"
  },
  {
    id: "4",
    name: "Ana Costa",
    email: "ana@example.com",
    eventsCreated: 2,
    joinDate: "2025-03-10",
    status: "inactive"
  }
];

const mockEvents = [
  {
    id: "1",
    title: "Chá de Bebê da Maria",
    creator: "João da Silva",
    type: "presente",
    date: "2025-06-15",
    progress: 65,
    totalContributions: 1250.00,
    status: "active"
  },
  {
    id: "2",
    title: "Rifa Beneficente",
    creator: "Maria Oliveira",
    type: "rifa",
    date: "2025-07-20",
    progress: 42,
    totalContributions: 860.00,
    status: "active"
  },
  {
    id: "3",
    title: "Vaquinha Formatura",
    creator: "Pedro Santos",
    type: "vaquinha",
    date: "2025-08-05",
    progress: 25,
    totalContributions: 500.00,
    status: "active"
  }
];

const AdminDashboard = () => {
  // Platform stats
  const totalUsers = mockUsers.length;
  const activeUsers = mockUsers.filter(user => user.status === "active").length;
  const totalEvents = mockEvents.length;
  const totalTransactions = 156; // Mock value
  const totalContributions = mockEvents.reduce((sum, event) => sum + event.totalContributions, 0);

  return (
    <div className="py-10">
      <div className="mimo-container">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Painel Administrativo</h1>
            <p className="text-muted-foreground">Gerencie a plataforma MimoPix</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="mr-2">
              <Bell className="mr-2 h-4 w-4" />
              Notificações
            </Button>
            <Button>
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6 bg-muted/50 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-background">
              <BarChart2 className="h-4 w-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-background">
              <Users className="h-4 w-4 mr-2" />
              Usuários
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-background">
              <Calendar className="h-4 w-4 mr-2" />
              Eventos
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-background">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalUsers}</div>
                  <p className="text-xs text-muted-foreground">{activeUsers} ativos</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total de Eventos</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalEvents}</div>
                  <p className="text-xs text-muted-foreground">Todos os tipos</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Transações</CardTitle>
                  <BarChart2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalTransactions}</div>
                  <p className="text-xs text-muted-foreground">Este mês</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Arrecadado</CardTitle>
                  <Percent className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ {totalContributions.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">Em todos os eventos</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tipos de Eventos</CardTitle>
                  <CardDescription>Distribuição por categoria</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Gift className="mr-2 h-4 w-4 text-primary-foreground" />
                        <span className="text-sm font-medium">Presentes</span>
                        <span className="ml-auto">35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Ticket className="mr-2 h-4 w-4 text-primary-foreground" />
                        <span className="text-sm font-medium">Rifas</span>
                        <span className="ml-auto">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Percent className="mr-2 h-4 w-4 text-primary-foreground" />
                        <span className="text-sm font-medium">Vaquinhas</span>
                        <span className="ml-auto">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Novos Usuários</CardTitle>
                  <CardDescription>Últimos cadastros</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockUsers.slice(0, 3).map(user => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 rounded-full bg-primary/20 items-center justify-center">
                            <User className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(user.joinDate).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                    
                    <Button variant="ghost" size="sm" className="w-full mt-2">
                      Ver todos os usuários
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciamento de Usuários</CardTitle>
                <CardDescription>Liste e gerencie todos os usuários da plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Nome</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Data de Cadastro</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Eventos</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-right align-middle font-medium">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {mockUsers.map(user => (
                        <tr key={user.id} className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-4 align-middle">{user.name}</td>
                          <td className="p-4 align-middle">{user.email}</td>
                          <td className="p-4 align-middle">{new Date(user.joinDate).toLocaleDateString()}</td>
                          <td className="p-4 align-middle">{user.eventsCreated}</td>
                          <td className="p-4 align-middle">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {user.status === 'active' ? 'Ativo' : 'Inativo'}
                            </span>
                          </td>
                          <td className="p-4 align-middle text-right">
                            <Button variant="ghost" size="sm">Editar</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Todos os Eventos</CardTitle>
                <CardDescription>Monitore os eventos ativos na plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Título</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Criador</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Tipo</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Data</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Progresso</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Total</th>
                        <th className="h-12 px-4 text-right align-middle font-medium">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {mockEvents.map(event => (
                        <tr key={event.id} className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-4 align-middle font-medium">{event.title}</td>
                          <td className="p-4 align-middle">{event.creator}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center">
                              {event.type === 'presente' && <Gift className="mr-2 h-4 w-4" />}
                              {event.type === 'rifa' && <Ticket className="mr-2 h-4 w-4" />}
                              {event.type === 'vaquinha' && <Percent className="mr-2 h-4 w-4" />}
                              <span className="capitalize">{event.type}</span>
                            </div>
                          </td>
                          <td className="p-4 align-middle">{new Date(event.date).toLocaleDateString()}</td>
                          <td className="p-4 align-middle">
                            <div className="w-full max-w-24">
                              <Progress value={event.progress} className="h-2" />
                              <span className="text-xs text-muted-foreground">{event.progress}%</span>
                            </div>
                          </td>
                          <td className="p-4 align-middle">R$ {event.totalContributions.toFixed(2)}</td>
                          <td className="p-4 align-middle text-right">
                            <Button variant="ghost" size="sm">Detalhes</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Configurações da Plataforma</CardTitle>
                <CardDescription>Gerencie as configurações gerais do MimoPix</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Configurações Gerais</h3>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Nome da Plataforma</label>
                      <input 
                        type="text" 
                        value="MimoPix" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">URL do Site</label>
                      <input 
                        type="text" 
                        value="https://mimopix.com.br" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">E-mail de Suporte</label>
                      <input 
                        type="email" 
                        value="suporte@mimopix.com.br" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Configurações de Eventos</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Aprovação de Eventos</p>
                        <p className="text-sm text-muted-foreground">Exigir aprovação manual para novos eventos</p>
                      </div>
                      <div className="ml-auto">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Eventos Privados</p>
                        <p className="text-sm text-muted-foreground">Permitir que usuários criem eventos privados</p>
                      </div>
                      <div className="ml-auto">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-6">
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Configurações
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
