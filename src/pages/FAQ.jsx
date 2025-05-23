
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqItems = [
    {
      question: "O que é o MimoPix?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim."
    },
    {
      question: "Como criar um evento?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim."
    },
    {
      question: "Quais são os tipos de eventos disponíveis?",
      answer: "Temos três tipos de eventos: Vaquinha (para arrecadar fundos para qualquer finalidade), Rifa (para sorteios com prêmios) e Presente Digital (para criar listas de presentes com cotas)."
    },
    {
      question: "Como funciona o pagamento via Pix?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim."
    },
    {
      question: "O MimoPix cobra alguma taxa?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim."
    },
    {
      question: "Posso personalizar a página do meu evento?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim."
    },
    {
      question: "Como compartilho meu evento?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim."
    },
    {
      question: "É possível acompanhar o progresso do evento?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim."
    },
    {
      question: "Como fazer o sorteio de uma rifa?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim."
    },
    {
      question: "Como posso obter ajuda se tiver problemas?",
      answer: "Você pode entrar em contato conosco através da página de Contato ou enviar um e-mail para suporte@mimopix.com."
    }
  ];

  return (
    <div className="mimo-container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Perguntas Frequentes</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-center text-muted-foreground mb-6">
              Encontre respostas para as perguntas mais comuns sobre o MimoPix e como utilizar nossa plataforma.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <p className="text-muted-foreground">
            Não encontrou o que procurava? Entre em contato conosco!
          </p>
          <a href="/contact" className="text-primary hover:underline mt-2 inline-block">
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
