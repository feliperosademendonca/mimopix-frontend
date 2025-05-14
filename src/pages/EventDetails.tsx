
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Share, Calendar, PiggyBank, Ticket, Gift, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EventType } from "@/components/EventCard";

// Sample data for events (same as in Events.tsx)
const eventsData = [
  {
    id: "1",
    title: "Chá de Bebê do Miguel",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&h=300",
    type: "vaquinha" as EventType,
    endDate: new Date(2025, 5, 30),
    goal: 2000,
    progress: 1200,
    creator: "Ana Silva",
    description: "Ajude-nos a preparar a chegada do Miguel com todo o carinho que ele merece! Estamos arrecadando fundos para comprar o enxoval e os móveis para o quartinho dele.",
    pixKey: "anasilva@email.com"
  },
  {
    id: "2",
    title: "Rifa Beneficente para Tratamento da Laura",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&h=300",
    type: "rifa" as EventType,
    endDate: new Date(2025, 6, 15),
    ticketPrice: 15,
    creator: "Carlos Oliveira",
    description: "A Laura está precisando de um tratamento especial e estamos rifando um smartphone novinho para ajudar nas despesas. Participe e concorra!",
    pixKey: "carlosoliveira@email.com",
    prize: "Smartphone Samsung Galaxy S23",
    totalTickets: 200,
    availableTickets: 120
  },
  {
    id: "3",
    title: "Presente de Casamento - Aspirador Robot",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=300",
    type: "presente" as EventType,
    endDate: new Date(2025, 7, 10),
    giftValue: 1200,
    creator: "Juliana e Marcos",
    description: "Estamos nos casando e sonhamos com um aspirador robô para nossa nova casa. Ajude-nos a conquiStar esse item da nossa lista de casamento!",
    pixKey: "julianam@email.com",
    giftLink: "https://www.exemplo.com/aspirador-robot",
    totalShares: 12,
    boughtShares: 5
  }
];

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [showPixInfo, setShowPixInfo] = useState(false);
  const [participantInfo, setParticipantInfo] = useState({
    name: "",
    email: "",
    value: "",
    tickets: 1,
    shares: 1
  });

  // Find the event
  const event = eventsData.find(e => e.id === id);

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  if (!event) {
    return (
      <div className="py-16 mimo-container">
        <Alert variant="destructive" className="mb-8">
          <AlertDescription>
            Evento não encontrado. O evento pode ter sido removido ou o link está incorreto.
          </AlertDescription>
        </Alert>
        <Button asChild>
          <a href="/events">Ver todos os eventos</a>
        </Button>
      </div>
    );
  }

  const getEventIcon = (type: EventType) => {
    switch (type) {
      case "vaquinha":
        return <PiggyBank className="h-5 w-5" />;
      case "rifa":
        return <Ticket className="h-5 w-5" />;
      case "presente":
        return <Gift className="h-5 w-5" />;
    }
  };

  const getBadgeColors = (type: EventType) => {
    switch (type) {
      case "vaquinha":
        return "bg-accent text-accent-foreground";
      case "rifa":
        return "bg-secondary text-secondary-foreground";
      case "presente":
        return "bg-primary text-primary-foreground";
    }
  };

  const handleParticipate = () => {
    setShowPixInfo(true);
  };

  return (
    <div className="py-10">
      <div className="mimo-container">
        {/* Event header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <Badge className={`mb-2 ${getBadgeColors(event.type)} flex items-center gap-1 w-fit`}>
              {getEventIcon(event.type)}
              {event.type === "vaquinha" ? "Vaquinha" : event.type === "rifa" ? "Rifa" : "Presente Digital"}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
          </div>

          <Button variant="outline" className="btn-icon w-fit">
            <Share className="mr-2 h-4 w-4" />
            Compartilhar
          </Button>
        </div>

        {/* Event content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - left 2/3 */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden border border-border mb-6">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <User className="h-4 w-4 mr-1" />
              <span>Criado por {event.creator}</span>
              <span className="mx-2">•</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span>Até {formatDate(event.endDate)}</span>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Sobre este evento</h2>
              <p className="text-lg">{event.description}</p>
            </div>

            <Separator className="my-8" />

            {/* Event-specific details */}
            {event.type === "vaquinha" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Detalhes da Vaquinha</h2>
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg">Meta</span>
                    <span className="text-lg font-bold">R$ {event.goal.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-lg">Arrecadado</span>
                    <span className="text-lg font-bold">R$ {event.progress.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="progress-container mb-2">
                    <div 
                      className="progress-bar bg-accent" 
                      style={{ width: `${Math.min(Math.round((event.progress / event.goal) * 100), 100)}%` }}
                    />
                  </div>
                  <div className="text-right text-sm font-medium">
                    {Math.round((event.progress / event.goal) * 100)}% da meta
                  </div>
                </div>
              </div>
            )}

            {event.type === "rifa" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Detalhes da Rifa</h2>
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <div className="flex justify-between mb-3">
                    <span className="text-lg">Prêmio</span>
                    <span className="text-lg font-bold">{event.prize}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-lg">Valor do bilhete</span>
                    <span className="text-lg font-bold">R$ {event.ticketPrice.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-lg">Total de bilhetes</span>
                    <span className="text-lg font-bold">{event.totalTickets}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lg">Bilhetes disponíveis</span>
                    <span className="text-lg font-bold">{event.availableTickets}</span>
                  </div>
                </div>
              </div>
            )}

            {event.type === "presente" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Detalhes do Presente</h2>
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <div className="flex justify-between mb-3">
                    <span className="text-lg">Valor total</span>
                    <span className="text-lg font-bold">R$ {event.giftValue.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-lg">Total de cotas</span>
                    <span className="text-lg font-bold">{event.totalShares}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-lg">Cotas adquiridas</span>
                    <span className="text-lg font-bold">{event.boughtShares} de {event.totalShares}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-lg">Valor por cota</span>
                    <span className="text-lg font-bold">
                      R$ {(event.giftValue / event.totalShares).toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div className="progress-container mb-2">
                    <div 
                      className="progress-bar bg-primary" 
                      style={{ width: `${Math.min(Math.round((event.boughtShares / event.totalShares) * 100), 100)}%` }}
                    />
                  </div>
                  <div className="text-right text-sm font-medium">
                    {Math.round((event.boughtShares / event.totalShares) * 100)}% completo
                  </div>
                </div>
                {event.giftLink && (
                  <div className="mt-4">
                    <a 
                      href={event.giftLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary underline hover:text-secondary/90"
                    >
                      Ver produto em loja online
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar - right 1/3 */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-4">Participar deste evento</h2>
              
              {!showPixInfo ? (
                <>
                  <form className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="name">Nome</Label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome"
                        value={participantInfo.name}
                        onChange={(e) => setParticipantInfo({...participantInfo, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu-email@exemplo.com"
                        value={participantInfo.email}
                        onChange={(e) => setParticipantInfo({...participantInfo, email: e.target.value})}
                      />
                    </div>

                    {event.type === "vaquinha" && (
                      <div>
                        <Label htmlFor="value">Valor da contribuição</Label>
                        <Input 
                          id="value" 
                          type="number" 
                          placeholder="R$ 0,00"
                          min="1"
                          value={participantInfo.value}
                          onChange={(e) => setParticipantInfo({...participantInfo, value: e.target.value})}
                        />
                      </div>
                    )}

                    {event.type === "rifa" && (
                      <div>
                        <Label htmlFor="tickets">Quantidade de bilhetes</Label>
                        <div className="flex items-center">
                          <Input 
                            id="tickets" 
                            type="number" 
                            min="1"
                            max={event.availableTickets}
                            value={participantInfo.tickets}
                            onChange={(e) => setParticipantInfo({...participantInfo, tickets: parseInt(e.target.value)})}
                          />
                          <div className="ml-3">
                            <p className="font-medium">
                              R$ {(event.ticketPrice * participantInfo.tickets).toLocaleString('pt-BR')}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {event.type === "presente" && (
                      <div>
                        <Label htmlFor="shares">Quantidade de cotas</Label>
                        <div className="flex items-center">
                          <Input 
                            id="shares" 
                            type="number" 
                            min="1"
                            max={event.totalShares - event.boughtShares}
                            value={participantInfo.shares}
                            onChange={(e) => setParticipantInfo({...participantInfo, shares: parseInt(e.target.value)})}
                          />
                          <div className="ml-3">
                            <p className="font-medium">
                              R$ {((event.giftValue / event.totalShares) * participantInfo.shares).toLocaleString('pt-BR')}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>

                  <Button 
                    className="w-full btn-secondary" 
                    onClick={handleParticipate}
                  >
                    Participar
                  </Button>
                </>
              ) : (
                <div className="space-y-4">
                  <Alert className="bg-muted border-accent">
                    <AlertDescription>
                      Escaneie o QR Code ou copie a chave Pix abaixo para realizar o pagamento.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="mb-6 bg-white p-4 rounded-lg border border-border text-center">
                    {/* Simulated QR Code */}
                    <div className="mb-4 w-48 h-48 mx-auto bg-gray-200 rounded-md flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">QR Code Pix</span>
                    </div>
                    
                    <div className="text-center mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Chave Pix</p>
                      <p className="font-medium text-sm bg-muted p-2 rounded">{event.pixKey}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Valor</p>
                      <p className="font-bold text-lg">
                        {event.type === "vaquinha" && `R$ ${participantInfo.value}`}
                        {event.type === "rifa" && `R$ ${(event.ticketPrice * participantInfo.tickets).toLocaleString('pt-BR')}`}
                        {event.type === "presente" && `R$ ${((event.giftValue / event.totalShares) * participantInfo.shares).toLocaleString('pt-BR')}`}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Após o pagamento, o criador do evento confirmará manualmente sua participação. Você receberá uma notificação por e-mail.
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setShowPixInfo(false)}
                  >
                    Voltar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
