
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const topClients = [
  {
    id: 1,
    name: "ООО Техника",
    orders: 15,
    revenue: "₽450,000"
  },
  {
    id: 2,
    name: "ЗАО Строймаш",
    orders: 12,
    revenue: "₽380,000"
  },
  {
    id: 3,
    name: "ИП Иванов",
    orders: 8,
    revenue: "₽280,000"
  },
  {
    id: 4,
    name: "ООО Промтех",
    orders: 6,
    revenue: "₽220,000"
  },
  {
    id: 5,
    name: "ЗАО Машснаб",
    orders: 5,
    revenue: "₽180,000"
  },
];

export function TopClients() {
  const { toast } = useToast();

  const handleClientClick = (clientName: string) => {
    toast({
      title: "Профиль клиента",
      description: `Открывается профиль клиента: ${clientName}`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Топ-клиенты по обороту</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topClients.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
              onClick={() => handleClientClick(client.name)}
            >
              <div className="space-y-1">
                <p className="text-sm font-medium hover:text-primary transition-colors">
                  {client.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {client.orders} заказов
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{client.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
