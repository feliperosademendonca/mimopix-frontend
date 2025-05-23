
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart2, 
  Calendar, 
  Gift, 
  Percent, 
  Ticket, 
  Users 
} from "lucide-react";

const DashboardStats = ({ events }) => {
  // Calculate stats from events
  const totalEvents = events.length;
  const totalContributions = events.reduce((sum, event) => sum + event.totalContributions, 0);
  const activeEvents = events.filter(event => event.status === "active").length;
  
  const stats = [
    {
      title: "Total de Eventos",
      value: totalEvents,
      icon: Calendar,
      description: "Criados por você"
    },
    {
      title: "Eventos Ativos",
      value: activeEvents,
      icon: BarChart2,
      description: "Em andamento"
    },
    {
      title: "Total Arrecadado",
      value: `R$ ${totalContributions.toFixed(2)}`,
      icon: Users,
      description: "Em todos os seus eventos"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
