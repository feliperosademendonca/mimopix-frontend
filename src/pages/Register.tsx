
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp é obrigatório";
    } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Formato inválido. Use (99) 99999-9999";
    }
    
    if (formData.password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Registration data:", formData);
      // In a real implementation, this would make an API call to register the user
    }
  };

  const formatWhatsApp = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    if (digits.length <= 2) {
      return `(${digits}`;
    }
    if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatWhatsApp(e.target.value);
    setFormData(prev => ({ ...prev, whatsapp: formattedValue }));
    
    if (errors.whatsapp) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors.whatsapp;
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Crie sua conta</h1>
          <p className="text-muted-foreground mt-2">
            Comece a criar seus eventos de forma rápida e fácil
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={handleWhatsAppChange}
                placeholder="(99) 99999-9999"
                className={errors.whatsapp ? "border-destructive" : ""}
              />
              {errors.whatsapp && (
                <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={errors.password ? "border-destructive" : ""}
              />
              {errors.password && (
                <p className="text-destructive text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={errors.confirmPassword ? "border-destructive" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <Alert className="bg-muted border-muted">
              <AlertDescription className="text-xs">
                Ao se cadastrar, você concorda com nossos <a href="/terms" className="text-secondary hover:underline">Termos de Uso</a> e <a href="/privacy" className="text-secondary hover:underline">Política de Privacidade</a>.
              </AlertDescription>
            </Alert>

            <Button type="submit" className="w-full btn-secondary">
              Criar Conta
            </Button>
          </form>

          <Separator className="my-6" />

          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Já possui uma conta?
            </p>
            <Link 
              to="/login" 
              className="inline-flex items-center text-secondary hover:underline font-medium mt-2"
            >
              Entrar agora <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
