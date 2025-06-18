import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Plus, Search, AlertTriangle, TrendingDown, ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function Warehouse() {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const inventory = [
    {
      id: "SKU-001",
      name: "Направляющие 500мм",
      category: "Направляющие",
      quantity: 45,
      minStock: 20,
      price: "2,500",
      supplier: "Поставщик А",
      lastUpdate: "2024-06-13",
    },
    {
      id: "SKU-002",
      name: "Подшипники SKF 6205",
      category: "Подшипники",
      quantity: 12,
      minStock: 50,
      price: "850",
      supplier: "Поставщик Б",
      lastUpdate: "2024-06-12",
    },
    {
      id: "SKU-003",
      name: "Ремни приводные А-1250",
      category: "Ремни",
      quantity: 8,
      minStock: 15,
      price: "1,200",
      supplier: "Поставщик В",
      lastUpdate: "2024-06-11",
    },
  ];

  const reservations = [
    {
      id: "RES-001",
      item: "Направляющие 500мм",
      quantity: 10,
      client: "ООО Техника",
      date: "2024-06-15",
      status: "Забронировано",
    },
    {
      id: "RES-002",
      item: "Подшипники SKF 6205",
      quantity: 25,
      client: "ЗАО Строймаш",
      date: "2024-06-18",
      status: "В пути",
    },
  ];

  const lowStockItems = inventory.filter(item => item.quantity <= item.minStock);

  const getStockStatus = (quantity: number, minStock: number) => {
    if (quantity <= minStock * 0.5) return { status: 'Критический', color: 'bg-red-100 text-red-800' };
    if (quantity <= minStock) return { status: 'Низкий', color: 'bg-yellow-100 text-yellow-800' };
    return { status: 'Нормальный', color: 'bg-green-100 text-green-800' };
  };

  const handleAddProduct = () => {
    toast({
      title: "Добавление товара",
      description: "Открывается форма добавления нового товара",
    });
  };

  const handleWarehouseOrder = () => {
    toast({
      title: "Складской заказ",
      description: "Открывается форма создания складского заказа",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Склад</h2>
          <p className="text-muted-foreground">
            Управление складскими запасами и резервированием
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleWarehouseOrder}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Складской заказ
          </Button>
          <Button onClick={handleAddProduct}>
            <Plus className="mr-2 h-4 w-4" />
            Добавить товар
          </Button>
        </div>
      </div>

      {/* Статистика склада */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего товаров</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Позиций на складе</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Низкие остатки</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{lowStockItems.length}</div>
            <p className="text-xs text-muted-foreground">Требуют пополнения</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Забронировано</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">Позиций в резерве</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Стоимость запасов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽5.2M</div>
            <p className="text-xs text-muted-foreground">Общая стоимость</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inventory">Остатки на складе</TabsTrigger>
          <TabsTrigger value="reservations">Резервирование</TabsTrigger>
          <TabsTrigger value="low-stock">Низкие остатки</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Складские остатки</CardTitle>
                <div className="relative w-72">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Поиск товаров..."
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
                    <TableHead>Артикул</TableHead>
                    <TableHead>Наименование</TableHead>
                    <TableHead>Категория</TableHead>
                    <TableHead>Количество</TableHead>
                    <TableHead>Мин. остаток</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Цена</TableHead>
                    <TableHead>Поставщик</TableHead>
                    <TableHead>Обновлено</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventory.map((item) => {
                    const stockStatus = getStockStatus(item.quantity, item.minStock);
                    return (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.minStock}</TableCell>
                        <TableCell>
                          <Badge className={stockStatus.color}>
                            {stockStatus.status}
                          </Badge>
                        </TableCell>
                        <TableCell>₽{item.price}</TableCell>
                        <TableCell>{item.supplier}</TableCell>
                        <TableCell>{item.lastUpdate}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reservations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Резервирование товаров</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ Резерва</TableHead>
                    <TableHead>Товар</TableHead>
                    <TableHead>Количество</TableHead>
                    <TableHead>Клиент</TableHead>
                    <TableHead>Дата резерва</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservations.map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell className="font-medium">{reservation.id}</TableCell>
                      <TableCell>{reservation.item}</TableCell>
                      <TableCell>{reservation.quantity}</TableCell>
                      <TableCell>{reservation.client}</TableCell>
                      <TableCell>{reservation.date}</TableCell>
                      <TableCell>
                        <Badge variant={reservation.status === 'Забронировано' ? 'secondary' : 'default'}>
                          {reservation.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="low-stock" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Товары с низкими остатками
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Артикул</TableHead>
                    <TableHead>Наименование</TableHead>
                    <TableHead>Текущий остаток</TableHead>
                    <TableHead>Мин. остаток</TableHead>
                    <TableHead>Требуется заказать</TableHead>
                    <TableHead>Поставщик</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lowStockItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-red-600">{item.quantity}</TableCell>
                      <TableCell>{item.minStock}</TableCell>
                      <TableCell className="font-medium">{item.minStock * 2 - item.quantity}</TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>
                        <Button size="sm">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Заказать
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
