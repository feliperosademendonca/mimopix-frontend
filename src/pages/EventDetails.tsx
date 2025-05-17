
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Gift, 
  Ticket, 
  Percent, 
  Share2, 
  Key, 
  ArrowRight, 
  CreditCard, 
  Calendar, 
  Clock,
  Check,
  User
} from "lucide-react";
import EventProgressBar from "@/components/EventProgressBar";

// Mock event data for the demo
const mockEvents = {
  "1": {
    id: "1",
    title: "Chá de Bebê da Maria",
    type: "presente",
    date: "2025-06-15",
    description: "Venha celebrar a chegada da nossa pequena Maria com muita alegria e carinho!",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    progress: 45,
    currentValue: 550,
    targetValue: 1200,
    pixKey: "maria@example.com",
    host: "Ana e João",
    customColors: {
      primaryColor: "#FFDAB9",
      secondaryColor: "#CFB53B",
      accentColor: "#98FB98",
      backgroundColor: "#F8F8F8"
    },
    celebrationName: "Maria",
    celebrationType: "Chá de Bebê",
    gifts: [
      {
        name: "Carrinho de Bebê",
        value: 800,
        shares: 8,
        shareValue: 100,
        sharesTaken: 3
      },
      {
        name: "Kit Berço",
        value: 400,
        shares: 4,
        shareValue: 100,
        sharesTaken: 2
      }
    ]
  },
  "2": {
    id: "2",
    title: "Rifa Beneficente",
    type: "rifa",
    date: "2025-07-20",
    description: "Rifa para arrecadação de fundos para a reforma da escola comunitária. O prêmio é um smartphone último modelo!",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    progress: 42,
    currentValue: 42,
    targetValue: 100,
    pixKey: "escola@example.com",
    host: "Associação de Pais",
    customColors: {
      primaryColor: "#E0B4B4",
      secondaryColor: "#5F9EA0",
      accentColor: "#FFDEAD",
      backgroundColor: "#F5F5DC"
    },
    prize: "Smartphone Samsung Galaxy S25",
    ticketPrice: 20
  },
  "3": {
    id: "3",
    title: "Vaquinha Formatura",
    type: "vaquinha",
    date: "2025-08-05",
    description: "Ajude-nos a realizar a festa de formatura da turma de Engenharia 2025!",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    progress: 25,
    currentValue: 500,
    targetValue: 2000,
    pixKey: "formatura@example.com",
    host: "Comissão de Formatura",
    customColors: {
      primaryColor: "#ADD8E6",
      secondaryColor: "#1E90FF",
      accentColor: "#87CEEB",
      backgroundColor: "#F0F8FF"
    },
    suggestedValues: [50, 100, 200, 500]
  }
};

const EventDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [event, setEvent] = useState(null);
  const [contribution, setContribution] = useState({
    name: "",
    email: "",
    value: "",
    ticketCount: "1",
    giftIndex: -1
  });
  const [showPixInfo, setShowPixInfo] = useState(false);

  // Load event data based on ID
  useEffect(() => {
    if (id && mockEvents[id]) {
      setEvent(mockEvents[id]);
      
      // Set default contribution value based on event type
      if (mockEvents[id].type === "rifa") {
        setContribution(prev => ({
          ...prev,
          value: String(mockEvents[id].ticketPrice)
        }));
      } else if (mockEvents[id].type === "vaquinha" && mockEvents[id].suggestedValues?.length > 0) {
        setContribution(prev => ({
          ...prev,
          value: String(mockEvents[id].suggestedValues[0])
        }));
      }
    }
  }, [id]);

  if (!event) {
    return <div className="py-10 mimo-container">Carregando...</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContribution(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGiftSelection = (index) => {
    setContribution(prev => ({
      ...prev,
      giftIndex: index,
      value: String(event.gifts[index].shareValue)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPixInfo(true);
    toast({
      title: "Participação registrada!",
      description: "Utilize o Pix exibido para concluir sua participação.",
    });
  };

  // Get the correct component based on event type
  const getEventTypeIcon = () => {
    switch (event.type) {
      case "presente":
        return <Gift className="h-6 w-6" style={{ color: event.customColors?.secondaryColor }} />;
      case "rifa":
        return <Ticket className="h-6 w-6" style={{ color: event.customColors?.secondaryColor }} />;
      case "vaquinha":
        return <Percent className="h-6 w-6" style={{ color: event.customColors?.secondaryColor }} />;
      default:
        return <Gift className="h-6 w-6" />;
    }
  };

  const getEventTypeLabel = () => {
    switch (event.type) {
      case "presente":
        return "Lista de Presentes";
      case "rifa":
        return "Rifa";
      case "vaquinha":
        return "Vaquinha";
      default:
        return "Evento";
    }
  };

  return (
    <div 
      className="pt-6 pb-16"
      style={{ 
        backgroundColor: event.customColors?.backgroundColor || "var(--background)"
      }}
    >
      <div className="mimo-container">
        {/* Event header */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
          <div className="h-64 w-full relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {getEventTypeIcon()}
                  <span className="text-sm font-medium">
                    {getEventTypeLabel()}
                  </span>
                </div>
                <h1 className="text-3xl font-bold">{event.title}</h1>
                <p className="text-white/80 mt-2">
                  Organizado por {event.host}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Event information */}
            <Card className="mb-8">
              <CardHeader
                className="pb-2"
                style={{ backgroundColor: `${event.customColors?.primaryColor}15` }}
              >
                <CardTitle className="flex items-center">
                  <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${event.customColors?.primaryColor}40` }}>
                    {getEventTypeIcon()}
                  </div>
                  {event.celebrationType ? `${event.celebrationType} de ${event.celebrationName}` : event.title}
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Encerra em: {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <p>{event.description}</p>
                  
                  {/* Progress information */}
                  <div className="mt-6">
                    <EventProgressBar
                      type={event.type}
                      progress={event.progress}
                      currentValue={event.currentValue}
                      targetValue={event.targetValue}
                      endDate={event.date}
                      customColors={event.customColors}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      className="flex items-center"
                      onClick={() => {
                        navigator.share({
                          title: event.title,
                          text: event.description,
                          url: window.location.href
                        }).catch(err => console.log('Error sharing', err));
                      }}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event specific content */}
            {event.type === "presente" && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Lista de Presentes</CardTitle>
                  <CardDescription>
                    Escolha um presente para contribuir
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.gifts.map((gift, index) => (
                      <div 
                        key={index} 
                        className={`border rounded-lg p-4 transition-all ${
                          contribution.giftIndex === index ? 
                            'border-2 border-secondary' : 
                            'hover:border-muted-foreground'
                        }`}
                        onClick={() => handleGiftSelection(index)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{gift.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Valor total: R$ {gift.value.toFixed(2)} • {gift.shares} cotas de R$ {gift.shareValue.toFixed(2)}
                            </p>
                          </div>
                          <div>
                            <Button 
                              variant={contribution.giftIndex === index ? "default" : "outline"} 
                              size="sm"
                              style={contribution.giftIndex === index ? { backgroundColor: event.customColors.secondaryColor } : {}}
                            >
                              {contribution.giftIndex === index ? (
                                <>
                                  <Check className="mr-1 h-4 w-4" />
                                  Selecionado
                                </>
                              ) : (
                                'Selecionar'
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200">
                            <div
                              className="h-full rounded-full"
                              style={{ 
                                width: `${(gift.sharesTaken / gift.shares) * 100}%`,
                                backgroundColor: event.customColors.secondaryColor
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs mt-1">
                            <span>{gift.sharesTaken} de {gift.shares} cotas</span>
                            <span>{((gift.sharesTaken / gift.shares) * 100).toFixed(0)}% completo</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {event.type === "rifa" && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Informações da Rifa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted">
                      <h3 className="font-medium mb-2">Prêmio</h3>
                      <p>{event.prize}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-muted">
                        <h3 className="font-medium">Valor do Bilhete</h3>
                        <p className="text-lg font-semibold">R$ {event.ticketPrice.toFixed(2)}</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-muted">
                        <h3 className="font-medium">Bilhetes Disponíveis</h3>
                        <p className="text-lg font-semibold">
                          {event.targetValue - event.currentValue} de {event.targetValue}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border">
                      <h3 className="font-medium mb-2">Sorteio</h3>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Data: {new Date(event.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {event.type === "vaquinha" && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Sobre esta Vaquinha</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Toda contribuição é importante! Escolha um valor ou defina um personalizado.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {event.suggestedValues.map((value, index) => (
                        <button 
                          key={index}
                          className={`px-4 py-2 rounded-lg border transition-all ${
                            contribution.value === String(value) ? 'bg-secondary text-secondary-foreground' : ''
                          }`}
                          style={contribution.value === String(value) ? { backgroundColor: event.customColors.secondaryColor, color: 'white' } : {}}
                          onClick={() => setContribution(prev => ({ ...prev, value: String(value) }))}
                        >
                          R$ {value.toFixed(2)}
                        </button>
                      ))}
                      <button 
                        className={`px-4 py-2 rounded-lg border transition-all ${
                          !event.suggestedValues.includes(Number(contribution.value)) ? 'bg-secondary text-secondary-foreground' : ''
                        }`}
                        style={!event.suggestedValues.includes(Number(contribution.value)) ? { backgroundColor: event.customColors.secondaryColor, color: 'white' } : {}}
                        onClick={() => setContribution(prev => ({ ...prev, value: '' }))}
                      >
                        Outro valor
                      </button>
                    </div>
                    
                    {!event.suggestedValues.includes(Number(contribution.value)) && (
                      <div className="mt-4">
                        <Label htmlFor="customValue">Valor personalizado</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5">R$</span>
                          <Input
                            id="customValue"
                            name="value"
                            type="number"
                            placeholder="0,00"
                            className="pl-10"
                            value={contribution.value}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Participation form */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <Card>
                <CardHeader
                  style={{ backgroundColor: `${event.customColors?.secondaryColor}20` }}
                >
                  <CardTitle className="text-lg">Participar</CardTitle>
                  <CardDescription>
                    Preencha seus dados para contribuir
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!showPixInfo ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Seu nome</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="name"
                            name="name"
                            placeholder="Nome completo"
                            className="pl-10"
                            value={contribution.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Seu e-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="email@exemplo.com"
                          value={contribution.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      {event.type === "rifa" && (
                        <div className="space-y-2">
                          <Label htmlFor="ticketCount">Quantidade de bilhetes</Label>
                          <div className="flex items-center gap-3">
                            <Input
                              id="ticketCount"
                              name="ticketCount"
                              type="number"
                              min="1"
                              value={contribution.ticketCount}
                              onChange={handleInputChange}
                              required
                            />
                            <div className="text-muted-foreground">
                              x R$ {event.ticketPrice.toFixed(2)}
                            </div>
                          </div>
                          <div className="text-right font-medium">
                            Total: R$ {(Number(contribution.ticketCount) * event.ticketPrice).toFixed(2)}
                          </div>
                        </div>
                      )}
                      
                      {event.type === "presente" && contribution.giftIndex === -1 && (
                        <div className="p-4 bg-muted/50 rounded-lg text-center text-sm">
                          Por favor, selecione um presente da lista acima para continuar.
                        </div>
                      )}
                      
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={event.type === "presente" && contribution.giftIndex === -1}
                        style={{ backgroundColor: event.customColors.secondaryColor }}
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Confirmar Participação
                      </Button>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-muted/50 text-center space-y-2">
                        <Key className="mx-auto h-8 w-8 text-muted-foreground" />
                        <p className="font-medium">Chave Pix</p>
                        <p className="text-sm">{event.pixKey}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="font-medium">Valor a transferir</p>
                        <p className="text-xl mt-1">
                          R$ {event.type === "rifa" 
                            ? (Number(contribution.ticketCount) * event.ticketPrice).toFixed(2) 
                            : Number(contribution.value).toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="p-4 rounded-lg border bg-muted/20 text-sm">
                        <p>
                          <strong>Importante:</strong> Após realizar o pagamento via Pix, o organizador irá confirmar sua participação manualmente.
                        </p>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setShowPixInfo(false)}
                      >
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Voltar
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
