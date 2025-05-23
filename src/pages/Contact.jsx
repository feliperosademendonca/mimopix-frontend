
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Check, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // In a real implementation, this would make an API call to send the message
  };
  
  return (
    <div className="mimo-container py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>
        
        {!formSubmitted ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Envie-nos uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="seu-email@exemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      placeholder="Digite sua mensagem aqui..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Informações de Contato</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Endereço</p>
                        <p className="text-muted-foreground">
                          Av. Paulista, 1000 - Bela Vista<br />
                          São Paulo - SP, 01310-100
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="h-6 w-6 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-muted-foreground">(11) 3456-7890</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="h-6 w-6 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">E-mail</p>
                        <p className="text-muted-foreground">contato@mimopix.com</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Horário de Atendimento</h2>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Segunda-Feira - Sexta-Feira:</span>
                      <span>9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábado:</span>
                      <span>10:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingo e Feriados:</span>
                      <span>Fechado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                {/* Placeholder for a map - in a real application, use Google Maps or similar */}
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=400" 
                  alt="Localização no mapa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Mensagem Enviada!</h2>
              <Alert>
                <AlertDescription>
                  Obrigado por entrar em contato conosco! Recebemos sua mensagem e responderemos o mais rápido possível.
                </AlertDescription>
              </Alert>
              <Button 
                onClick={() => setFormSubmitted(false)} 
                className="mt-4"
                variant="outline"
              >
                Enviar outra mensagem
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Contact;
