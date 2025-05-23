
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="mimo-container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nós</h1>
        
        <div className="mb-10 text-center">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200"
            alt="Equipe MimoPix"
            className="rounded-lg shadow-lg mx-auto mb-6"
          />
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
            </p>
            <p className="mb-4">
              Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Morbi mollis tellus ac sapien.
            </p>
            <p>
              Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
            </p>
            <p>
              Fusce fermentum odio nec arcu. Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-32 h-32 bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200"
                    alt="Membro da Equipe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Maria Silva</h3>
                <p className="text-muted-foreground">CEO & Fundadora</p>
              </div>
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-32 h-32 bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200"
                    alt="Membro da Equipe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">João Santos</h3>
                <p className="text-muted-foreground">CTO</p>
              </div>
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-32 h-32 bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200"
                    alt="Membro da Equipe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Ana Costa</h3>
                <p className="text-muted-foreground">Desenvolvedora</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
