
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Plus, Search, Star, Mail, Phone } from 'lucide-react';

export default function Suppliers() {
  const [searchTerm, setSearchTerm] = useState('');

  const suppliers = [
    {
      id: "SUP-001",
      name: "Поставщик А",
      category: "Подшипники",
      rating: 4.8,
      orders: 45,
      lastOrder: "2024-06-10",
      contact: "manager@suppliera.ru",
      phone: "+7 (495) 123-45-67",
      status: "Активный",
      reliability: 95,
    },
    {
      id: "SUP-002",
      name: "Поставщик Б",
      category: "Направляющие",
      rating: 4.2,
      orders: 23,
      lastOrder: "2024-06-08",
      contact: "sales@supplierb.ru",
      phone: "+7 (495) 234-56-78",
      status: "Активный",
      reliability: 87,
    },
    {
      id: "SUP-003",
      name: "Поставщик В",
      category: "Комплектующие",
      rating: 3.9,
      orders: 12,
      lastOrder: "2024-05-28",
      contact: "info@supplierc.ru",
      phone: "+7 (495) 345-67-89",
      status: "Неактивный",
      reliability: 78,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Активный': return 'bg-green-100 text-green-800';
      case 'Неактивный': return 'bg-gray-100 text-gray-800';
      case 'Заблокирован': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReliabilityColor = (reliability: number) => {
    if (reliability >= 90) return 'text-green-600';
    if (reliability >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Поставщики</h2>
          <p className="text-muted-foreground">
            Управление поставщиками и оценка их эффективности
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Добавить поставщика
        </Button>
      </div>

      {/* Статистика поставщиков */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего поставщиков</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">В базе данных</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Активные</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Работающие поставщики</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Средний рейтинг</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.3</div>
            <div className="flex items-center">
              {renderStars(4.3)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Надежность</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">Средняя надежность</p>
          </CardContent>
        </Card>
      </div>

      {/* Поиск */}
      <Card>
        <CardHeader>
          <CardTitle>Поиск поставщиков</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по названию или категории..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </CardContent>
      </Card>

      {/* Таблица поставщиков */}
      <Card>
        <CardHeader>
          <CardTitle>Список поставщиков ({filteredSuppliers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Название</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead>Рейтинг</TableHead>
                <TableHead>Заказов</TableHead>
                <TableHead>Последний заказ</TableHead>
                <TableHead>Контакты</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Надежность</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-medium">{supplier.id}</TableCell>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>{supplier.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {renderStars(supplier.rating)}
                      <span className="ml-1 text-sm">{supplier.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>{supplier.orders}</TableCell>
                  <TableCell>{supplier.lastOrder}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        {supplier.contact}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3" />
                        {supplier.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(supplier.status)}>
                      {supplier.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className={getReliabilityColor(supplier.reliability)}>
                      {supplier.reliability}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        Профиль
                      </Button>
                      <Button size="sm" variant="ghost">
                        Заказы
                      </Button>
                    </div>
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
