
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Gift, Ticket } from "lucide-react";

export type EventType = "vaquinha" | "rifa" | "presente";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  type: EventType;
  endDate: Date;
  goal?: number;
  progress?: number;
  ticketPrice?: number;
  giftValue?: number;
}

const EventCard = ({ 
  id, 
  title, 
  image, 
  type, 
  endDate, 
  goal, 
  progress, 
  ticketPrice,
  giftValue 
}: EventCardProps) => {
  
  // Format date
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'short'
  }).format(endDate);
  
  // Event type badge configuration
  const badgeConfig = {
    vaquinha: {
      icon: <Gift className="h-3 w-3" />,
      color: "bg-accent text-accent-foreground",
      label: "Vaquinha"
    },
    rifa: {
      icon: <Ticket className="h-3 w-3" />,
      color: "bg-secondary text-secondary-foreground",
      label: "Rifa"
    },
    presente: {
      icon: <Gift className="h-3 w-3" />,
      color: "bg-primary text-primary-foreground",
      label: "Presente"
    }
  };

  return (
    <Link to={`/event/${id}`} className="event-card group">
      {/* Card image */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="event-card-image group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`event-card-badge ${badgeConfig[type].color} flex items-center gap-1`}>
          {badgeConfig[type].icon}
          {badgeConfig[type].label}
        </span>
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Calendar className="h-3 w-3 mr-1" />
          <span>Até {formattedDate}</span>
        </div>

        {/* Conditionally render based on event type */}
        {type === "vaquinha" && goal && progress !== undefined && (
          <div className="mt-auto">
            <div className="flex justify-between text-sm mb-1">
              <span>Meta: R$ {goal.toLocaleString('pt-BR')}</span>
              <span className="font-semibold">{Math.round((progress / goal) * 100)}%</span>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar bg-accent" 
                style={{ width: `${Math.min(Math.round((progress / goal) * 100), 100)}%` }}
              />
            </div>
          </div>
        )}

        {type === "rifa" && ticketPrice && (
          <div className="mt-auto">
            <div className="text-sm font-medium">
              <span>Valor do bilhete:</span>
              <span className="ml-1 text-secondary font-semibold">
                R$ {ticketPrice.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>
        )}

        {type === "presente" && giftValue && (
          <div className="mt-auto">
            <div className="text-sm font-medium">
              <span>Valor do presente:</span>
              <span className="ml-1 text-secondary font-semibold">
                R$ {giftValue.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default EventCard;
