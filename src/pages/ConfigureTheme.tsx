
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Palette, 
  Image as ImageIcon, 
  Save, 
  Gift, 
  Ticket, 
  Percent, 
  Check,
  Calendar,
  Eye,
  Upload
} from "lucide-react";

// Mock event data for the demo
const mockEvent = {
  id: "1",
  title: "Chá de Bebê da Maria",
  type: "presente",
  date: "2025-06-15",
  description: "Venha celebrar a chegada da nossa pequena Maria com muita alegria e carinho!",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  progress: 45,
  totalContributions: 550,
  targetAmount: 1200,
  host: "Ana e João"
};

const defaultColors = {
  primary: "#FFDAB9", // Primary color (pêssego)
  secondary: "#CFB53B", // Secondary color (dourado)
  accent: "#98FB98", // Accent color (verde menta)
  background: "#F8F8F8" // Background color (off-white)
};

const ConfigureTheme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [colors, setColors] = useState(defaultColors);
  const [eventInfo, setEventInfo] = useState({
    title: mockEvent.title,
    celebrationName: "Maria", // Nome do bebê, noivos, aniversariante, etc.
    celebrationType: "Chá de Bebê",
    hostName: mockEvent.host,
    image: mockEvent.image
  });
  
  const handleColorChange = (colorName, value) => {
    setColors(prevColors => ({
      ...prevColors,
      [colorName]: value
    }));
  };
  
  const handleEventInfoChange = (e) => {
    const { name, value } = e.target;
    setEventInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    toast({
      title: "Tema salvo com sucesso",
      description: "As configurações de tema foram aplicadas ao evento."
    });
    navigate(`/event/${id}`);
  };
  
  const handlePreview = () => {
    window.open(`/event/${id}`, '_blank');
  };

  return (
    <div className="py-10">
      <div className="mimo-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Configuração de Tema</h1>
          <p className="text-muted-foreground mt-2">
            Personalize a aparência do seu evento com cores e informações customizadas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Configuration controls */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="colors">
              <TabsList className="mb-6">
                <TabsTrigger value="colors">
                  <Palette className="mr-2 h-4 w-4" />
                  Cores
                </TabsTrigger>
                <TabsTrigger value="information">
                  <Gift className="mr-2 h-4 w-4" />
                  Informações
                </TabsTrigger>
                <TabsTrigger value="images">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Imagens
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="colors">
                <Card>
                  <CardHeader>
                    <CardTitle>Paleta de cores</CardTitle>
                    <CardDescription>
                      Escolha as cores que serão utilizadas no seu evento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="primaryColor">Cor Principal</Label>
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full border"
                            style={{ backgroundColor: colors.primary }}
                          />
                          <Input
                            id="primaryColor"
                            type="color"
                            value={colors.primary}
                            onChange={(e) => handleColorChange('primary', e.target.value)}
                            className="w-full h-10"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Cor principal para cabeçalhos e destaques
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="secondaryColor">Cor Secundária</Label>
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full border"
                            style={{ backgroundColor: colors.secondary }}
                          />
                          <Input
                            id="secondaryColor"
                            type="color"
                            value={colors.secondary}
                            onChange={(e) => handleColorChange('secondary', e.target.value)}
                            className="w-full h-10"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Cor para botões e elementos interativos
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="accentColor">Cor de Destaque</Label>
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full border"
                            style={{ backgroundColor: colors.accent }}
                          />
                          <Input
                            id="accentColor"
                            type="color"
                            value={colors.accent}
                            onChange={(e) => handleColorChange('accent', e.target.value)}
                            className="w-full h-10"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Cor para elementos de destaque e ícones
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="backgroundColor">Cor de Fundo</Label>
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full border"
                            style={{ backgroundColor: colors.background }}
                          />
                          <Input
                            id="backgroundColor"
                            type="color"
                            value={colors.background}
                            onChange={(e) => handleColorChange('background', e.target.value)}
                            className="w-full h-10"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Cor para o fundo da página
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-4">Temas pré-definidos</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div 
                          className="p-4 rounded-lg border cursor-pointer hover:border-primary"
                          onClick={() => setColors(defaultColors)}
                        >
                          <div className="flex flex-row gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#FFDAB9" }} />
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#CFB53B" }} />
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#98FB98" }} />
                          </div>
                          <p className="text-sm font-medium">Chá de Bebê</p>
                        </div>
                        
                        <div 
                          className="p-4 rounded-lg border cursor-pointer hover:border-primary"
                          onClick={() => setColors({
                            primary: "#E0B4B4",
                            secondary: "#5F9EA0",
                            accent: "#FFDEAD",
                            background: "#F5F5DC"
                          })}
                        >
                          <div className="flex flex-row gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#E0B4B4" }} />
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#5F9EA0" }} />
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#FFDEAD" }} />
                          </div>
                          <p className="text-sm font-medium">Casamento</p>
                        </div>
                        
                        <div 
                          className="p-4 rounded-lg border cursor-pointer hover:border-primary"
                          onClick={() => setColors({
                            primary: "#FFB6C1",
                            secondary: "#FF69B4",
                            accent: "#FFC0CB",
                            background: "#FFF0F5"
                          })}
                        >
                          <div className="flex flex-row gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#FFB6C1" }} />
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#FF69B4" }} />
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#FFC0CB" }} />
                          </div>
                          <p className="text-sm font-medium">Aniversário</p>
                        </div>
                        
                        <div 
                          className="p-4 rounded-lg border cursor-pointer hover:border-primary"
                          onClick={() => setColors({
                            primary: "#ADD8E6",
                            secondary: "#1E90FF",
                            accent: "#87CEEB",
                            background: "#F0F8FF"
                          })}
                        >
                          <div className="flex flex-row gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#ADD8E6" }} />
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#1E90FF" }} />
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#87CEEB" }} />
                          </div>
                          <p className="text-sm font-medium">Formatura</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="information">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações do Evento</CardTitle>
                    <CardDescription>
                      Personalize as informações exibidas na página do evento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Título do Evento</Label>
                        <Input
                          id="title"
                          name="title"
                          value={eventInfo.title}
                          onChange={handleEventInfoChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="celebrationType">Tipo de Celebração</Label>
                        <Input
                          id="celebrationType"
                          name="celebrationType"
                          value={eventInfo.celebrationType}
                          onChange={handleEventInfoChange}
                          placeholder="Ex: Chá de Bebê, Casamento, Aniversário"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="celebrationName">Nome do Celebrado</Label>
                        <Input
                          id="celebrationName"
                          name="celebrationName"
                          value={eventInfo.celebrationName}
                          onChange={handleEventInfoChange}
                          placeholder="Ex: Nome do bebê, noivos ou aniversariante"
                        />
                        <p className="text-xs text-muted-foreground">
                          Nome da pessoa que está sendo celebrada no evento
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hostName">Nome dos Anfitriões</Label>
                        <Input
                          id="hostName"
                          name="hostName"
                          value={eventInfo.hostName}
                          onChange={handleEventInfoChange}
                          placeholder="Ex: Maria e João"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="images">
                <Card>
                  <CardHeader>
                    <CardTitle>Imagens do Evento</CardTitle>
                    <CardDescription>
                      Faça upload de imagens para personalizar a página do evento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Imagem de Capa</Label>
                        <div className="rounded-lg border overflow-hidden">
                          <img
                            src={eventInfo.image}
                            alt="Imagem de capa"
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              <Upload className="mr-2 h-4 w-4" />
                              Alterar Imagem
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Galeria de Imagens</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="aspect-square border rounded-lg flex items-center justify-center bg-muted cursor-pointer">
                            <Upload className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div className="aspect-square border rounded-lg flex items-center justify-center bg-muted cursor-pointer">
                            <Upload className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div className="aspect-square border rounded-lg flex items-center justify-center bg-muted cursor-pointer">
                            <Upload className="h-8 w-8 text-muted-foreground" />
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Adicione mais imagens para mostrar na página do evento (opcional)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={() => navigate(`/dashboard`)}>
                Voltar ao Painel
              </Button>
              <div className="space-x-2">
                <Button variant="outline" onClick={handlePreview}>
                  <Eye className="mr-2 h-4 w-4" />
                  Pré-visualizar
                </Button>
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </div>

          {/* Live preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader className="bg-muted/50">
                  <CardTitle className="text-base">Pré-visualização</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div 
                    className="overflow-hidden"
                    style={{ backgroundColor: colors.background }}
                  >
                    {/* Event image */}
                    <div className="relative h-40">
                      <img
                        src={eventInfo.image}
                        alt={eventInfo.title}
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center"
                      >
                        <h3 
                          className="text-white text-xl font-bold text-center px-4"
                          style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}
                        >
                          {eventInfo.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Event info */}
                    <div className="p-4">
                      <div
                        className="mb-4 p-3 rounded-lg"
                        style={{ backgroundColor: `${colors.primary}40` }}
                      >
                        <p 
                          className="text-center font-semibold"
                          style={{ color: colors.primary }}
                        >
                          {eventInfo.celebrationType} de {eventInfo.celebrationName}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2" style={{ color: colors.secondary }} />
                          <span>15 de Junho de 2025</span>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Progresso</p>
                          <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200">
                            <div
                              className="h-full rounded-full"
                              style={{ 
                                width: '45%',
                                backgroundColor: colors.secondary
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>R$ 550,00 arrecadados</span>
                            <span>Meta: R$ 1.200,00</span>
                          </div>
                        </div>
                        
                        <button 
                          className="w-full py-2 text-white rounded-md font-medium"
                          style={{ backgroundColor: colors.secondary }}
                        >
                          <Check className="h-4 w-4 inline mr-2" />
                          Participar
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureTheme;
