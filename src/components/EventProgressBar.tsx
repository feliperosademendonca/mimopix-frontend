
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Calendar, Clock } from "lucide-react";

interface EventProgressBarProps {
  type: "presente" | "rifa" | "vaquinha";
  progress: number;
  currentValue: number;
  targetValue: number;
  endDate: string;
  customColors?: {
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
  };
}

const EventProgressBar = ({
  type,
  progress,
  currentValue,
  targetValue,
  endDate,
  customColors
}: EventProgressBarProps) => {
  // Calculate days remaining
  const now = new Date();
  const end = new Date(endDate);
  const daysRemaining = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  // Format values based on type
  const formatValue = (value: number) => {
    if (type === "rifa") {
      return value; // Just the number for raffle tickets
    } else {
      return new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
      }).format(value);
    }
  };

  // Get label based on type
  const getProgressLabel = () => {
    switch (type) {
      case "presente":
        return "Cotas Adquiridas";
      case "rifa":
        return "Bilhetes Vendidos";
      case "vaquinha":
        return "Arrecadado";
      default:
        return "Progresso";
    }
  };

  // Get target label based on type
  const getTargetLabel = () => {
    switch (type) {
      case "presente":
        return "Valor Total";
      case "rifa":
        return "Total de Bilhetes";
      case "vaquinha":
        return "Meta";
      default:
        return "Total";
    }
  };

  // Use custom colors or defaults
  const primaryColor = customColors?.primaryColor || "hsl(var(--primary))";
  const secondaryColor = customColors?.secondaryColor || "hsl(var(--secondary))";

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="space-y-4">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BarChart2 className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />
                <span className="text-sm font-medium">Progresso</span>
              </div>
              <span className="text-sm font-bold">{progress}%</span>
            </div>
            <Progress 
              value={progress} 
              className="h-2"
              style={{
                backgroundColor: `${primaryColor}30`,
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{getProgressLabel()}: {formatValue(currentValue)}</span>
              <span>{getTargetLabel()}: {formatValue(targetValue)}</span>
            </div>
          </div>
          
          {/* Date information */}
          <div className="flex justify-between items-center border-t pt-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />
              <span className="text-xs">Encerra em: {new Date(endDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />
              <span className="text-xs font-semibold">
                {daysRemaining} {daysRemaining === 1 ? 'dia restante' : 'dias restantes'}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventProgressBar;
