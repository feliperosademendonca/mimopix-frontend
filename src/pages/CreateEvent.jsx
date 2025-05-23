
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  ArrowRight, 
  Calendar, 
  Gift, 
  Percent, 
  Plus, 
  Ticket, 
  UploadCloud 
} from "lucide-react";
import { toast } from "@/components/ui/sonner";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    endDate: "",
    image: null,
    goal: "",
    pixKey: "",
    ticketPrice: "",
    ticketCount: "",
    giftValue: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleNext = () => {
    if (step === 1 && (!formData.title || !formData.type)) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos obrigatórios para continuar.",
        variant: "destructive"
      });
      return;
    }

    if (step === 2 && !formData.endDate) {
      toast({
        title: "Campos obrigatórios",
        description: "Selecione uma data de término para o evento.",
        variant: "destructive"
      });
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Mock successful submission
    toast({
      title: "Evento criado com sucesso!",
      description: "Você será redirecionado para configurar o tema do seu evento."
    });
    
    // In a real implementation, this would make an API call to create the event
    // and then redirect to the theme configuration page with the new event ID
    setTimeout(() => {
      navigate(`/event/configure-theme/new-event-123`);
    }, 1500);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Nome do Evento *</Label>
              <Input
                id="title"
                name="title"
                placeholder="Ex: Chá de Bebê da Maria"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Conte um pouco sobre o seu evento..."
                value={formData.description}
                onChange={handleChange}
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Evento *</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => handleSelectChange("type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de evento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vaquinha">
                    <div className="flex items-center">
                      <Percent className="mr-2 h-4 w-4" />
                      <span>Vaquinha</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="rifa">
                    <div className="flex items-center">
                      <Ticket className="mr-2 h-4 w-4" />
                      <span>Rifa</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="presente">
                    <div className="flex items-center">
                      <Gift className="mr-2 h-4 w-4" />
                      <span>Lista de Presentes</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="endDate">Data de Encerramento *</Label>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Esta é a data em que seu evento será encerrado
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Imagem de Capa</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label 
                  htmlFor="image" 
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <UploadCloud className="h-10 w-10 text-muted-foreground mb-2" />
                  <span className="text-muted-foreground font-medium">
                    {formData.image ? formData.image.name : "Clique para fazer upload"}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    PNG, JPG ou WEBP (max. 5MB)
                  </span>
                </label>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pixKey">Chave PIX para recebimento</Label>
              <Input
                id="pixKey"
                name="pixKey"
                placeholder="CPF, E-mail, Telefone ou Chave Aleatória"
                value={formData.pixKey}
                onChange={handleChange}
              />
              <p className="text-xs text-muted-foreground">
                Esta chave PIX será usada para receber os valores das contribuições
              </p>
            </div>
            {formData.type === "vaquinha" && (
              <div className="space-y-2">
                <Label htmlFor="goal">Meta da Vaquinha (R$)</Label>
                <Input
                  id="goal"
                  name="goal"
                  type="number"
                  placeholder="Ex: 1000"
                  value={formData.goal}
                  onChange={handleChange}
                />
              </div>
            )}
            {formData.type === "rifa" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="ticketPrice">Valor do Bilhete (R$)</Label>
                  <Input
                    id="ticketPrice"
                    name="ticketPrice"
                    type="number"
                    placeholder="Ex: 10"
                    value={formData.ticketPrice}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ticketCount">Quantidade de Bilhetes</Label>
                  <Input
                    id="ticketCount"
                    name="ticketCount"
                    type="number"
                    placeholder="Ex: 100"
                    value={formData.ticketCount}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {formData.type === "presente" && (
              <div className="space-y-2">
                <Label htmlFor="giftValue">Valor Total do Presente (R$)</Label>
                <Input
                  id="giftValue"
                  name="giftValue"
                  type="number"
                  placeholder="Ex: 500"
                  value={formData.giftValue}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resumo do Evento</h3>
            <div className="grid gap-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Tipo de evento:</span>
                <span className="font-medium">
                  {formData.type === "vaquinha" && "Vaquinha"}
                  {formData.type === "rifa" && "Rifa"}
                  {formData.type === "presente" && "Lista de Presentes"}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Nome:</span>
                <span className="font-medium">{formData.title}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Data de encerramento:</span>
                <span className="font-medium">{formData.endDate}</span>
              </div>
              {formData.type === "vaquinha" && (
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Meta:</span>
                  <span className="font-medium">R$ {formData.goal}</span>
                </div>
              )}
              {formData.type === "rifa" && (
                <>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Valor do bilhete:</span>
                    <span className="font-medium">R$ {formData.ticketPrice}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Quantidade:</span>
                    <span className="font-medium">{formData.ticketCount} bilhetes</span>
                  </div>
                </>
              )}
              {formData.type === "presente" && (
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Valor do presente:</span>
                  <span className="font-medium">R$ {formData.giftValue}</span>
                </div>
              )}
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Chave PIX:</span>
                <span className="font-medium">{formData.pixKey || "Não informada"}</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-10">
      <div className="mimo-container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Criar Novo Evento</h1>
          <p className="text-muted-foreground mb-6">
            Preencha os dados abaixo para criar seu evento. Os campos marcados com * são obrigatórios.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Passo {step} de 4</CardTitle>
              <CardDescription>
                {step === 1 && "Informações básicas do evento"}
                {step === 2 && "Data e imagem do evento"}
                {step === 3 && "Configurações de pagamento"}
                {step === 4 && "Revisão e conclusão"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderStepContent()}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleBack}
                disabled={step === 1}
              >
                Voltar
              </Button>
              <Button onClick={handleNext}>
                {step < 4 ? "Avançar" : "Criar Evento"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
