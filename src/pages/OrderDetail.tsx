
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Package, FileText, Calendar, DollarSign, Truck } from 'lucide-react';
import { DocumentViewer } from "@/components/DocumentViewer";

export default function OrderDetail() {
  const { id } = useParams();

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
    description: "Заказ промышленных подшипников и комплектующих",
    manager: "Иванов И.И.",
    items: [
      { name: "Подшипник 6208", quantity: 10, price: "2,500", total: "25,000" },
      { name: "Подшипник 6209", quantity: 15, price: "3,200", total: "48,000" },
      { name: "Сальник 25x35x7", quantity: 20, price: "850", total: "17,000" },
    ],
    documents: [
      { name: "Договор поставки.pdf", size: "1.1 MB", type: "pdf" },
      { name: "Спецификация.xlsx", size: "425 KB", type: "xlsx" },
      { name: "Счет на оплату.pdf", size: "290 KB", type: "pdf" },
    ],
    timeline: [
      { date: "2024-06-13", event: "Заказ создан", status: "completed" },
      { date: "2024-06-14", event: "Отправлен поставщику", status: "completed" },
      { date: "2024-06-15", event: "Подтверждение поставщика", status: "pending" },
      { date: "2024-06-20", event: "Планируемая доставка", status: "upcoming" },
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Размещено': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Подтверждено': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'В пути': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Выполнен': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Ожидает оплаты': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'Частично оплачено': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Оплачено': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
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
          <p className="text-muted-foreground">Детальная информация о заказе</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Основная информация */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Основная информация
              </CardTitle>
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
                  <p>{order.client}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Поставщик</label>
                  <p>{order.supplier}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Менеджер</label>
                  <p>{order.manager}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Дата доставки</label>
                  <p>{order.deliveryDate}</p>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Описание</label>
                <p className="mt-1">{order.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Состав заказа */}
          <Card>
            <CardHeader>
              <CardTitle>Состав заказа</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Наименование</TableHead>
                    <TableHead>Количество</TableHead>
                    <TableHead>Цена за ед.</TableHead>
                    <TableHead>Сумма</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>₽{item.price}</TableCell>
                      <TableCell>₽{item.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 text-right">
                <p className="text-lg font-bold">Итого: ₽{order.amount}</p>
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
                {order.documents.map((document, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-blue-500" />
                      <div>
                        <p className="font-medium">{document.name}</p>
                        <p className="text-sm text-muted-foreground">{document.size}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <DocumentViewer document={document} />
                      <Button variant="outline" size="sm">
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
          {/* Статус */}
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
                  <span className="text-sm text-muted-foreground">{order.progress}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Финансы */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Финансовая информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Сумма заказа:</span>
                <span className="font-medium">₽{order.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">НДС (20%):</span>
                <span className="font-medium">₽{(parseInt(order.amount.replace(',', '')) * 0.2).toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Всего к оплате:</span>
                <span className="font-bold">₽{(parseInt(order.amount.replace(',', '')) * 1.2).toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* Действия */}
          <Card>
            <CardHeader>
              <CardTitle>Действия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">
                Редактировать заказ
              </Button>
              <Button variant="outline" className="w-full">
                Отменить заказ
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
