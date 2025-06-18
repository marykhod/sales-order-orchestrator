
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileText, Download, Eye, Truck, Package, DollarSign, Calendar } from 'lucide-react';

export default function OrderDetail() {
  const { id } = useParams();

  // Мокданные для заказа
  const order = {
    id: id || "ORD-001",
    date: "2024-06-13",
    client: "ООО Техника",
    supplier: "Поставщик А",
    amount: "150,000",
    status: "Размещено",
    paymentStatus: "Ожидает оплаты",
    deliveryDate: "2024-06-20",
    progress: 25,
    description: "Подшипники и комплектующие для промышленного оборудования",
    deliveryAddress: "г. Санкт-Петербург, ул. Промышленная, д. 15",
    items: [
      { name: "Подшипник 6208", quantity: 50, price: "2,500", total: "125,000" },
      { name: "Уплотнитель резиновый", quantity: 20, price: "1,250", total: "25,000" }
    ],
    documents: [
      { name: "Договор поставки.pdf", size: "1.1 MB", type: "pdf" },
      { name: "Спецификация.xlsx", size: "425 KB", type: "xlsx" },
      { name: "Счет на оплату.pdf", size: "290 KB", type: "pdf" }
    ],
    timeline: [
      { date: "2024-06-13", event: "Заказ размещен", status: "completed" },
      { date: "2024-06-14", event: "Подтверждение от поставщика", status: "completed" },
      { date: "2024-06-16", event: "Оплата счета", status: "pending" },
      { date: "2024-06-18", event: "Отгрузка товара", status: "pending" },
      { date: "2024-06-20", event: "Доставка", status: "pending" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Размещено': return 'bg-blue-100 text-blue-800';
      case 'Подтверждено': return 'bg-yellow-100 text-yellow-800';
      case 'В пути': return 'bg-purple-100 text-purple-800';
      case 'Выполнен': return 'bg-green-100 text-green-800';
      case 'Отменен': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Ожидает оплаты': return 'bg-red-100 text-red-800';
      case 'Частично оплачено': return 'bg-yellow-100 text-yellow-800';
      case 'Оплачено': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/orders">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к заказам
          </Link>
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Заказ {order.id}</h2>
          <p className="text-muted-foreground">Детальная информация по заказу</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Основная информация */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Основная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Номер заказа</label>
                  <p className="font-medium">{order.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Дата создания</label>
                  <p>{order.date}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Клиент</label>
                  <p className="font-medium">{order.client}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Поставщик</label>
                  <p>{order.supplier}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Сумма заказа</label>
                  <p className="font-medium text-lg">₽{order.amount}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Дата поставки</label>
                  <p>{order.deliveryDate}</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Описание</label>
                <p className="mt-1">{order.description}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Адрес доставки</label>
                <p className="mt-1">{order.deliveryAddress}</p>
              </div>
            </CardContent>
          </Card>

          {/* Состав заказа */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Состав заказа
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.quantity} шт. × ₽{item.price}</p>
                    </div>
                    <p className="font-medium">₽{item.total}</p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>Итого:</span>
                  <span>₽{order.amount}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Документы */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Документы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {order.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">{doc.size}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        Просмотр
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Скачать
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Боковая панель */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Статус заказа</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Статус</label>
                <div className="mt-1">
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Статус оплаты</label>
                <div className="mt-1">
                  <Badge className={getPaymentStatusColor(order.paymentStatus)}>
                    {order.paymentStatus}
                  </Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Прогресс выполнения</label>
                <div className="mt-1">
                  <Progress value={order.progress} className="h-2" />
                  <span className="text-xs text-muted-foreground">{order.progress}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Временная шкала</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.timeline.map((event, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full mt-1 ${
                      event.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.event}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Действия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">
                <DollarSign className="mr-2 h-4 w-4" />
                Оплатить
              </Button>
              <Button variant="outline" className="w-full">
                <Truck className="mr-2 h-4 w-4" />
                Отследить доставку
              </Button>
              <Button variant="outline" className="w-full">
                Связаться с поставщиком
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
