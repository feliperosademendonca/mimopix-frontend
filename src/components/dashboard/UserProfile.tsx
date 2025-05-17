
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { User, Key, Mail, Phone, Save } from "lucide-react";

const UserProfile = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "João da Silva",
    email: "joao@example.com",
    phone: "(11) 98765-4321",
    pixKey: "joao@example.com"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would save to a database
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Meu Perfil</CardTitle>
        <CardDescription>
          Gerencie suas informações pessoais e preferências de pagamento
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="personal">
              <User className="h-4 w-4 mr-2" />
              Dados Pessoais
            </TabsTrigger>
            <TabsTrigger value="payment">
              <Key className="h-4 w-4 mr-2" />
              Chaves Pix
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-9"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-9"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">WhatsApp</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-9"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Alterações
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="payment">
            <div className="space-y-4">
              <div>
                <Label htmlFor="pixKey">Chave Pix Principal</Label>
                <div className="relative mt-1">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="pixKey"
                    name="pixKey"
                    value={formData.pixKey}
                    onChange={handleChange}
                    className="pl-9"
                    placeholder="CPF, e-mail, telefone ou chave aleatória"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Esta chave será usada como padrão para receber pagamentos em seus eventos
                </p>
              </div>
              <Button onClick={handleSubmit} className="w-full md:w-auto">
                <Save className="mr-2 h-4 w-4" />
                Salvar Chave Pix
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
