
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  BarChart2,
  Calendar,
  Edit,
  Gift,
  MoreVertical,
  Percent,
  Search,
  Settings,
  Ticket,
  Trash2,
} from "lucide-react";

interface EventsListProps {
  events: Array<{
    id: string;
    title: string;
    type: string;
    date: string;
    image: string;
    progress: number;
    totalContributions: number;
    status: string;
  }>;
}

const EventsList = ({ events }: EventsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" || event.type === filter || event.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "presente":
        return <Gift className="h-4 w-4" />;
      case "rifa":
        return <Ticket className="h-4 w-4" />;
      case "vaquinha":
        return <Percent className="h-4 w-4" />;
      default:
        return <Gift className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar eventos..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              Todos
            </Button>
            <Button
              variant={filter === "presente" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("presente")}
              className="flex items-center gap-1"
            >
              <Gift className="h-4 w-4" /> Presentes
            </Button>
            <Button
              variant={filter === "rifa" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("rifa")}
              className="flex items-center gap-1"
            >
              <Ticket className="h-4 w-4" /> Rifas
            </Button>
            <Button
              variant={filter === "vaquinha" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("vaquinha")}
              className="flex items-center gap-1"
            >
              <Percent className="h-4 w-4" /> Vaquinhas
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Evento</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Progresso</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-md overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span>{event.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {getEventTypeIcon(event.type)}
                      <span className="capitalize">
                        {event.type}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(event.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="w-full max-w-24">
                      <Progress value={event.progress} className="h-2" />
                      <span className="text-xs text-muted-foreground mt-1">
                        {event.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    R$ {event.totalContributions.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link 
                            to={`/event/${event.id}`}
                            className="flex items-center w-full"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Ver Evento</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link 
                            to={`/event/configure-theme/${event.id}`}
                            className="flex items-center w-full"
                          >
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Configurar Tema</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Excluir</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventsList;
