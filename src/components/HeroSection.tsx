
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mimo-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Hero content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
              <Gift className="h-4 w-4 mr-2" /> 
              <span>Presentes, Vaquinhas e Rifas em um só lugar</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Comemore seus momentos
              <span className="bg-gradient-to-r from-primary-foreground to-secondary bg-clip-text text-transparent block">
                especiais juntos
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Crie vaquinhas, rifas e listas de presentes digitais para seus eventos pessoais com pagamentos via Pix.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="btn-primary btn-icon">
                  Criar um evento <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="btn-ghost">
                  Ver todos os eventos
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-background to-muted p-6 rounded-2xl shadow-lg border border-border">
              <div className="grid grid-cols-2 gap-4">
                {/* Sample event cards */}
                <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm">
                  <div className="h-32 rounded bg-primary/30 mb-3 flex items-center justify-center">
                    <Gift className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="h-4 bg-muted rounded-full w-3/4" />
                  <div className="h-3 bg-muted rounded-full w-1/2 mt-2" />
                  <div className="mt-3 bg-secondary/20 h-2 rounded-full">
                    <div className="bg-secondary h-full rounded-full w-3/4" />
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="h-20 rounded bg-accent/30 mb-2 flex items-center justify-center">
                    <Ticket className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="h-3 bg-muted rounded-full" />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="h-20 rounded bg-primary/20 mb-2 flex items-center justify-center">
                    <Gift className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="h-3 bg-muted rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
