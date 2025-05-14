
import HeroSection from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, PiggyBank, Ticket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* How it works section */}
      <section className="py-16 bg-muted">
        <div className="mimo-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Como Funciona</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              O MimoPix torna fácil a criação de vaquinhas, rifas e presentes digitais com pagamento via Pix
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="border-none shadow-md">
              <CardContent className="flex flex-col items-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Crie seu Evento</h3>
                <p className="text-center text-muted-foreground">
                  Escolha entre vaquinha, rifa ou presente digital e personalize com suas informações.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-none shadow-md">
              <CardContent className="flex flex-col items-center p-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="font-bold text-accent-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Compartilhe</h3>
                <p className="text-center text-muted-foreground">
                  Envie o link para amigos e familiares através de redes sociais ou mensagens.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-none shadow-md">
              <CardContent className="flex flex-col items-center p-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="font-bold text-secondary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receba via Pix</h3>
                <p className="text-center text-muted-foreground">
                  As contribuições chegam diretamente na sua chave Pix, sem taxas intermediárias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <FeaturedEvents />

      {/* Event Types Section */}
      <section className="py-16 bg-gradient-to-br from-mimopix-offwhite to-mimopix-peach/20">
        <div className="mimo-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Tipos de Eventos</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Escolha a melhor opção para o seu momento especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vaquinha */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border">
              <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <PiggyBank className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vaquinha</h3>
              <p className="text-muted-foreground mb-4">
                Arrecade fundos para qualquer finalidade: chás de bebê, formaturas, aniversários ou causas pessoais.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-lg">✓</span>
                  <span>Defina uma meta de arrecadação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-lg">✓</span>
                  <span>Acompanhe o progresso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 text-lg">✓</span>
                  <span>Receba diretamente na sua conta</span>
                </li>
              </ul>
              <Link to="/register" className="inline-flex items-center text-accent-foreground hover:underline font-medium">
                Criar vaquinha <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Rifa */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border">
              <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Ticket className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rifa</h3>
              <p className="text-muted-foreground mb-4">
                Organize rifas para sorteios divertidos ou para arrecadar fundos com prêmios especiais.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2 text-lg">✓</span>
                  <span>Defina o prêmio e valor do bilhete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 text-lg">✓</span>
                  <span>Gerencie bilhetes vendidos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 text-lg">✓</span>
                  <span>Registre o sorteio e o ganhador</span>
                </li>
              </ul>
              <Link to="/register" className="inline-flex items-center text-secondary hover:underline font-medium">
                Criar rifa <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Presente Digital */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border">
              <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Gift className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Presente Digital</h3>
              <p className="text-muted-foreground mb-4">
                Crie uma lista com presentes específicos e permita que amigos contribuam com cotas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-foreground mr-2 text-lg">✓</span>
                  <span>Adicione link do produto desejado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-foreground mr-2 text-lg">✓</span>
                  <span>Divida o valor em cotas acessíveis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-foreground mr-2 text-lg">✓</span>
                  <span>Acompanhe quanto falta para realizar</span>
                </li>
              </ul>
              <Link to="/register" className="inline-flex items-center text-primary-foreground hover:underline font-medium">
                Criar presente <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/10">
        <div className="mimo-container">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-border text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para iniciar seu evento?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Crie sua vaquinha, rifa ou presente digital em minutos e compartilhe com quem te quer bem!
            </p>
            <Link to="/register">
              <button className="btn-secondary text-lg px-8 py-3">
                Cadastre-se Gratuitamente
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
