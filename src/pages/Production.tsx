
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Factory, Plus, Search, Settings, Clock, CheckCircle } from 'lucide-react';

export default function Production() {
  const [searchTerm, setSearchTerm] = useState('');

  const productionOrders = [
    {
      id: "PROD-001",
      date: "2024-06-13",
      client: "ООО Техника",
      item: "Направляющие 500мм",
      quantity: 10,
      length: 500,
      material: "Сталь 45",
      status: "В очереди",
      progress: 0,
      estimatedTime: "2 часа",
      operator: "-",
    },
    {
      id: "PROD-002",
      date: "2024-06-12",
      client: "ЗАО Строймаш",
      item: "Направляющие 750мм",
      quantity: 15,
      length: 750,
      material: "Сталь 45",
      status: "В работе",
      progress: 65,
      estimatedTime: "3 часа",
      operator: "Иванов И.И.",
    },
    {
      id: "PROD-003",
      date: "2024-06-11",
      client: "ИП Петров",
      item: "Направляющие 1000мм",
      quantity: 5,
      length: 1000,
      material: "Нержавейка",
      status: "Выполнено",
      progress: 100,
      estimatedTime: "1.5 часа",
      operator: "Сидоров С.С.",
    },
  ];

  const materials = [
    {
      id: "MAT-001",
      name: "Хлыст стальной 6м",
      material: "Сталь 45",
      length: 6000,
      available: 2350,
      reserved: 150,
      location: "Стеллаж А-1",
    },
    {
      id: "MAT-002",
      name: "Хлыст нержавеющий 6м",
      material: "Нержавейка",
      length: 6000,
      available: 1200,
      reserved: 0,
      location: "Стеллаж Б-2",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'В очереди': return 'bg-gray-100 text-gray-800';
      case 'В работе': return 'bg-blue-100 text-blue-800';
      case 'Выполнено': return 'bg-green-100 text-green-800';
      case 'Приостановлено': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Производство</h2>
          <p className="text-muted-foreground">
            Управление производственными заказами и резкой направляющих
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Новый заказ на резку
        </Button>
      </div>

      {/* Статистика производства */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Заказов в очереди</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Ожидают обработки</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">В работе</CardTitle>
            <Factory className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Активных заказов</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Выполнено сегодня</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Заказов завершено</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Загрузка оборудования</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">Средняя загрузка</p>
          </CardContent>
        </Card>
      </div>

      {/* Производственные заказы */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Производственные заказы</CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск заказов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>№ Заказа</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Изделие</TableHead>
                <TableHead>Количество</TableHead>
                <TableHead>Длина</TableHead>
                <TableHead>Материал</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Прогресс</TableHead>
                <TableHead>Время</TableHead>
                <TableHead>Оператор</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productionOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{order.item}</TableCell>
                  <TableCell>{order.quantity} шт</TableCell>
                  <TableCell>{order.length} мм</TableCell>
                  <TableCell>{order.material}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="w-20">
                      <Progress value={order.progress} className="h-2" />
                      <span className="text-xs text-muted-foreground">{order.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{order.estimatedTime}</TableCell>
                  <TableCell>{order.operator}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Материалы и заготовки */}
      <Card>
        <CardHeader>
          <CardTitle>Материалы и заготовки</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Артикул</TableHead>
                <TableHead>Наименование</TableHead>
                <TableHead>Материал</TableHead>
                <TableHead>Длина</TableHead>
                <TableHead>Доступно</TableHead>
                <TableHead>Зарезервировано</TableHead>
                <TableHead>Расположение</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.id}</TableCell>
                  <TableCell>{material.name}</TableCell>
                  <TableCell>{material.material}</TableCell>
                  <TableCell>{material.length} мм</TableCell>
                  <TableCell>{material.available} мм</TableCell>
                  <TableCell>{material.reserved} мм</TableCell>
                  <TableCell>{material.location}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      Использовать
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
