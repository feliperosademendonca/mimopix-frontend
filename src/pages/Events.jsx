
import React, { useState } from "react";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample data for events (larger dataset)
const eventsData = [
  {
    id: "1",
    title: "Chá de Bebê do Miguel",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&h=300",
    type: "vaquinha",
    endDate: new Date(2025, 5, 30),
    goal: 2000,
    progress: 1200
  },
  {
    id: "2",
    title: "Rifa Beneficente para Tratamento da Laura",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&h=300",
    type: "rifa",
    endDate: new Date(2025, 6, 15),
    ticketPrice: 15
  },
  {
    id: "3",
    title: "Presente de Casamento - Aspirador Robot",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=300",
    type: "presente",
    endDate: new Date(2025, 7, 10),
    giftValue: 1200
  },
  {
    id: "4",
    title: "Aniversário da Maria - 30 Anos",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=300",
    type: "vaquinha",
    endDate: new Date(2025, 8, 5),
    goal: 1500,
    progress: 800
  },
  {
    id: "5",
    title: "Rifa de Smartphone para Formatura",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=300",
    type: "rifa",
    endDate: new Date(2025, 9, 20),
    ticketPrice: 25
  },
  {
    id: "6",
    title: "Presente Coletivo - Viagem de Lua de Mel",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&h=300",
    type: "presente",
    endDate: new Date(2025, 6, 25),
    giftValue: 5000
  }
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter events based on type and search term
  const filteredEvents = eventsData
    .filter(event => activeFilter === "all" || event.type === activeFilter)
    .filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="py-10">
      <div className="mimo-container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Eventos</h1>
          <p className="text-muted-foreground">
            Explore todos os eventos ativos em nossa plataforma
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar eventos..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              className={activeFilter === "all" ? "bg-secondary text-secondary-foreground" : ""}
              onClick={() => setActiveFilter("all")}
            >
              Todos
            </Button>
            <Button
              variant={activeFilter === "vaquinha" ? "default" : "outline"}
              className={activeFilter === "vaquinha" ? "bg-accent text-accent-foreground" : ""}
              onClick={() => setActiveFilter("vaquinha")}
            >
              Vaquinhas
            </Button>
            <Button
              variant={activeFilter === "rifa" ? "default" : "outline"}
              className={activeFilter === "rifa" ? "bg-secondary text-secondary-foreground" : ""}
              onClick={() => setActiveFilter("rifa")}
            >
              Rifas
            </Button>
            <Button
              variant={activeFilter === "presente" ? "default" : "outline"}
              className={activeFilter === "presente" ? "bg-primary text-primary-foreground" : ""}
              onClick={() => setActiveFilter("presente")}
            >
              Presentes
            </Button>
          </div>
        </div>

        {/* Results counter */}
        <p className="text-sm text-muted-foreground mb-6">
          Mostrando {filteredEvents.length} {filteredEvents.length === 1 ? 'evento' : 'eventos'}
        </p>

        {/* Events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 border border-dashed border-border rounded-lg">
            <h3 className="text-lg font-medium">Nenhum evento encontrado</h3>
            <p className="text-muted-foreground">
              Tente ajustar seus filtros ou realizar uma nova busca
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
