
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Gift,
  Ticket,
  Percent,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Key,
  Upload,
  Info,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const eventTypes = [
  {
    value: "presente",
    label: "Lista de Presentes",
    description: "Crie uma lista de presentes para seu evento",
    icon: Gift,
  },
  {
    value: "rifa",
    label: "Rifa",
    description: "Crie uma rifa com números e sorteie prêmios",
    icon: Ticket,
  },
  {
    value: "vaquinha",
    label: "Vaquinha",
    description: "Arrecade fundos para seu evento ou projeto",
    icon: Percent,
  },
];

const CreateEvent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState("");
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    endDate: "",
    pixKey: "",
    image: "",
    // Fields for gift list
    gifts: [],
    // Fields for raffle
    prizeDescription: "",
    ticketPrice: "",
    totalTickets: "",
    // Fields for crowdfunding
    targetAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // In a real implementation, this would save to a database
    toast({
      title: "Evento criado com sucesso!",
      description: "Seu evento foi criado e já está disponível para compartilhamento.",
    });
    
    // Navigate to the event's theme configuration page
    // In a real app, we'd navigate to the newly created event's ID
    navigate("/dashboard");
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="py-10">
      <div className="mimo-container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Criar novo evento</h1>
          <p className="text-muted-foreground mt-2">
            Configure seu evento em poucos passos e comece a receber contribuições
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <CardTitle>
                  {step === 1 && "Escolha o tipo de evento"}
                  {step === 2 && "Informações básicas"}
                  {step === 3 && "Detalhes específicos"}
                  {step === 4 && "Revisar e criar"}
                </CardTitle>
                <CardDescription className="mt-1">
                  {step === 1 && "Selecione o tipo de evento que deseja criar"}
                  {step === 2 && "Preencha as informações básicas do seu evento"}
                  {step === 3 && "Configure os detalhes específicos do seu evento"}
                  {step === 4 && "Revise todas as informações antes de criar seu evento"}
                </CardDescription>
              </div>
              <div className="md:ml-auto mt-4 md:mt-0">
                <p className="text-sm text-muted-foreground">
                  Etapa {step} de 4
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {eventTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`relative flex flex-col items-center p-6 rounded-lg border-2 transition-all cursor-pointer hover:border-primary ${
                        eventType === type.value
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}
                      onClick={() => setEventType(type.value)}
                    >
                      <div
                        className={`p-3 rounded-full mb-4 ${
                          eventType === type.value
                            ? "bg-primary/20"
                            : "bg-muted"
                        }`}
                      >
                        <type.icon
                          className={`h-6 w-6 ${
                            eventType === type.value
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <h3 className="text-lg font-medium mb-1">
                        {type.label}
                      </h3>
                      <p className="text-sm text-center text-muted-foreground">
                        {type.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Nome do Evento</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Ex: Chá de Bebê da Maria"
                    value={eventData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição do Evento</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Descreva seu evento..."
                    value={eventData.description}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="endDate">Data de Encerramento</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="endDate"
                        name="endDate"
                        type="date"
                        value={eventData.endDate}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="pixKey">Chave Pix</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Chave que receberá os pagamentos</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="pixKey"
                        name="pixKey"
                        placeholder="CPF, e-mail, telefone, etc."
                        value={eventData.pixKey}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Imagem de Capa</Label>
                  <div className="flex items-center justify-center border-2 border-dashed border-border rounded-lg p-6">
                    <div className="flex flex-col items-center space-y-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Arraste uma imagem ou clique para fazer upload
                      </p>
                      <Button variant="outline">Escolher imagem</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                {eventType === "presente" && (
                  <>
                    <h3 className="text-lg font-medium">Lista de Presentes</h3>
                    <div className="space-y-4">
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-medium">Presente #1</h4>
                          </div>
                          <Button variant="ghost" size="sm">Remover</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Nome do Presente</Label>
                            <Input placeholder="Ex: Carrinho de Bebê" />
                          </div>
                          <div className="space-y-2">
                            <Label>Valor Total (R$)</Label>
                            <Input type="number" placeholder="Ex: 500,00" />
                          </div>
                          <div className="space-y-2">
                            <Label>Número de Cotas</Label>
                            <Input type="number" placeholder="Ex: 5" />
                          </div>
                          <div className="space-y-2">
                            <Label>Valor por Cota (R$)</Label>
                            <Input type="number" placeholder="Ex: 100,00" disabled value="100.00" />
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Adicionar Outro Presente
                      </Button>
                    </div>
                  </>
                )}

                {eventType === "rifa" && (
                  <>
                    <h3 className="text-lg font-medium">Detalhes da Rifa</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="prizeDescription">Descrição do Prêmio</Label>
                        <Textarea
                          id="prizeDescription"
                          name="prizeDescription"
                          placeholder="Descreva o prêmio principal da rifa..."
                          value={eventData.prizeDescription}
                          onChange={handleChange}
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ticketPrice">Valor do Bilhete (R$)</Label>
                          <Input
                            id="ticketPrice"
                            name="ticketPrice"
                            type="number"
                            placeholder="Ex: 10,00"
                            value={eventData.ticketPrice}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="totalTickets">Total de Bilhetes</Label>
                          <Input
                            id="totalTickets"
                            name="totalTickets"
                            type="number"
                            placeholder="Ex: 100"
                            value={eventData.totalTickets}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-medium mb-2">Informações de Arrecadação</h4>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">
                            Valor do Bilhete: R$ {eventData.ticketPrice || "0,00"}
                          </p>
                          <p className="text-sm">
                            Total de Bilhetes: {eventData.totalTickets || "0"}
                          </p>
                          <p className="text-sm font-medium">
                            Arrecadação Potencial: R$ {eventData.ticketPrice && eventData.totalTickets ? 
                              (parseFloat(eventData.ticketPrice) * parseFloat(eventData.totalTickets)).toFixed(2) : 
                              "0,00"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {eventType === "vaquinha" && (
                  <>
                    <h3 className="text-lg font-medium">Detalhes da Vaquinha</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="targetAmount">Meta de Arrecadação (R$)</Label>
                        <Input
                          id="targetAmount"
                          name="targetAmount"
                          type="number"
                          placeholder="Ex: 2000,00"
                          value={eventData.targetAmount}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="p-4 bg-muted rounded-md">
                        <h4 className="font-medium mb-2">Sugestão de Contribuição</h4>
                        <div className="space-y-2">
                          <Label>Sugestões de Valores (R$)</Label>
                          <div className="flex flex-wrap gap-2">
                            <div className="border rounded-md px-3 py-2 text-sm">R$ 20,00</div>
                            <div className="border rounded-md px-3 py-2 text-sm">R$ 50,00</div>
                            <div className="border rounded-md px-3 py-2 text-sm">R$ 100,00</div>
                            <div className="border rounded-md px-3 py-2 text-sm">Valor personalizado</div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            Essas sugestões serão mostradas aos contribuintes, mas eles podem escolher qualquer valor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className="p-6 border rounded-lg space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/20">
                      {eventType === "presente" && <Gift className="h-6 w-6 text-primary" />}
                      {eventType === "rifa" && <Ticket className="h-6 w-6 text-primary" />}
                      {eventType === "vaquinha" && <Percent className="h-6 w-6 text-primary" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{eventData.title || "Título do Evento"}</h3>
                      <p className="text-muted-foreground">
                        {eventType === "presente" && "Lista de Presentes"}
                        {eventType === "rifa" && "Rifa"}
                        {eventType === "vaquinha" && "Vaquinha"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Detalhes básicos</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <p className="text-sm text-muted-foreground">Descrição:</p>
                          <p className="text-sm text-right max-w-40 md:max-w-xs truncate">
                            {eventData.description || "Sem descrição"}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-sm text-muted-foreground">Data de encerramento:</p>
                          <p className="text-sm">
                            {eventData.endDate ? new Date(eventData.endDate).toLocaleDateString() : "Não definida"}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-sm text-muted-foreground">Chave Pix:</p>
                          <p className="text-sm">{eventData.pixKey || "Não definida"}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Detalhes específicos</h4>
                      <div className="space-y-2">
                        {eventType === "presente" && (
                          <>
                            <div className="flex justify-between">
                              <p className="text-sm text-muted-foreground">Total de presentes:</p>
                              <p className="text-sm">1</p>
                            </div>
                          </>
                        )}
                        
                        {eventType === "rifa" && (
                          <>
                            <div className="flex justify-between">
                              <p className="text-sm text-muted-foreground">Valor do bilhete:</p>
                              <p className="text-sm">
                                R$ {eventData.ticketPrice || "0,00"}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-sm text-muted-foreground">Total de bilhetes:</p>
                              <p className="text-sm">{eventData.totalTickets || "0"}</p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-sm text-muted-foreground">Arrecadação potencial:</p>
                              <p className="text-sm font-medium">
                                R$ {eventData.ticketPrice && eventData.totalTickets ? 
                                    (parseFloat(eventData.ticketPrice) * parseFloat(eventData.totalTickets)).toFixed(2) : 
                                    "0,00"}
                              </p>
                            </div>
                          </>
                        )}
                        
                        {eventType === "vaquinha" && (
                          <>
                            <div className="flex justify-between">
                              <p className="text-sm text-muted-foreground">Meta de arrecadação:</p>
                              <p className="text-sm">
                                R$ {eventData.targetAmount || "0,00"}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button variant="outline" onClick={prevStep}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
              ) : (
                <div></div>
              )}
              
              {step < 4 ? (
                <Button 
                  onClick={nextStep} 
                  disabled={step === 1 && !eventType}
                >
                  Continuar
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  Criar Evento
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateEvent;
