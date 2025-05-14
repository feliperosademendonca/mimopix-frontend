
import { useState } from "react";
import EventCard, { EventType } from "./EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Sample data for featured events
const featuredEventsData = [
  {
    id: "1",
    title: "Chá de Bebê do Miguel",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&h=300",
    type: "vaquinha" as EventType,
    endDate: new Date(2025, 5, 30),
    goal: 2000,
    progress: 1200
  },
  {
    id: "2",
    title: "Rifa Beneficente para Tratamento da Laura",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&h=300",
    type: "rifa" as EventType,
    endDate: new Date(2025, 6, 15),
    ticketPrice: 15
  },
  {
    id: "3",
    title: "Presente de Casamento - Aspirador Robot",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=300",
    type: "presente" as EventType,
    endDate: new Date(2025, 7, 10),
    giftValue: 1200
  }
];

const FeaturedEvents = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | EventType>("all");
  
  const filteredEvents = activeFilter === "all" 
    ? featuredEventsData 
    : featuredEventsData.filter(event => event.type === activeFilter);

  return (
    <section className="py-16">
      <div className="mimo-container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Eventos em Destaque</h2>
            <p className="text-muted-foreground mt-2">
              Conheça alguns dos eventos que estão acontecendo na plataforma
            </p>
          </div>
          <Link to="/events" className="btn-icon mt-4 md:mt-0 text-primary-foreground bg-secondary py-2 px-4 rounded-full inline-flex items-center hover:bg-secondary/90 transition-colors">
            Ver todos <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
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

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-lg text-muted-foreground">
              Nenhum evento encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedEvents;
