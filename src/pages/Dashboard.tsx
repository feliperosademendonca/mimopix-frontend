
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Gift, 
  Ticket, 
  Percent, 
  Plus, 
  Settings, 
  Calendar, 
  BarChart2, 
  User,
  ArrowRight
} from "lucide-react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import EventsList from "@/components/dashboard/EventsList";
import UserProfile from "@/components/dashboard/UserProfile";

// Mock data for demo purposes
const mockEvents = [
  {
    id: "1",
    title: "Chá de Bebê da Maria",
    type: "presente",
    date: "2025-06-15",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    progress: 65,
    totalContributions: 1250.00,
    status: "active"
  },
  {
    id: "2",
    title: "Rifa Beneficente",
    type: "rifa",
    date: "2025-07-20",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    progress: 42,
    totalContributions: 860.00,
    status: "active"
  },
  {
    id: "3",
    title: "Vaquinha Formatura",
    type: "vaquinha",
    date: "2025-08-05",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    progress: 25,
    totalContributions: 500.00,
    status: "active"
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="py-10">
      <div className="mimo-container">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Meu Painel</h1>
            <p className="text-muted-foreground">Gerencie seus eventos e acompanhe seu desempenho</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/create-event">
              <Button className="flex items-center gap-2">
                <Plus size={16} />
                Criar Novo Evento
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-muted/50 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-background">
              <BarChart2 className="h-4 w-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-background">
              <Calendar className="h-4 w-4 mr-2" />
              Meus Eventos
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-background">
              <User className="h-4 w-4 mr-2" />
              Meu Perfil
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <DashboardStats events={mockEvents} />
            
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Eventos Recentes</h2>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab("events")}>
                  Ver todos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockEvents.slice(0, 3).map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <EventsList events={mockEvents} />
          </TabsContent>

          <TabsContent value="profile" className="mt-0">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const EventCard = ({ event }) => {
  const getEventIcon = (type) => {
    switch (type) {
      case "presente":
        return <Gift className="h-5 w-5 text-primary-foreground" />;
      case "rifa":
        return <Ticket className="h-5 w-5 text-primary-foreground" />;
      case "vaquinha":
        return <Percent className="h-5 w-5 text-primary-foreground" />;
      default:
        return <Gift className="h-5 w-5 text-primary-foreground" />;
    }
  };

  return (
    <Card className="event-card">
      <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
        <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
        <div className="absolute top-2 right-2 bg-card p-1 rounded-full">
          {getEventIcon(event.type)}
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg">{event.title}</CardTitle>
        <CardDescription>Encerra em: {new Date(event.date).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full" 
            style={{ width: `${event.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>Progresso: {event.progress}%</span>
          <span>R$ {event.totalContributions.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link to={`/event/${event.id}`}>
          <Button variant="outline" size="sm">Ver Detalhes</Button>
        </Link>
        <Link to={`/event/configure-theme/${event.id}`}>
          <Button size="sm" variant="ghost">
            <Settings className="h-4 w-4 mr-1" />
            Configurar
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Dashboard;
