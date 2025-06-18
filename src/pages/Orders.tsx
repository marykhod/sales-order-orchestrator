
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Plus, Search, Eye, Edit, FileText, DollarSign, Filter, Calendar, User, Package } from 'lucide-react';

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [supplierFilter, setSupplierFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const orders = [
    {
      id: "ORD-001",
      date: "2024-06-13",
      client: "ООО Техника",
      supplier: "Поставщик А",
      amount: "150,000",
      status: "Размещено",
      paymentStatus: "Ожидает оплаты",
      deliveryDate: "2024-06-20",
      progress: 25,
    },
    {
      id: "ORD-002",
      date: "2024-06-12",
      client: "ЗАО Строймаш",
      supplier: "Поставщик Б",
      amount: "280,500",
      status: "Подтверждено",
      paymentStatus: "Частично оплачено",
      deliveryDate: "2024-06-18",
      progress: 60,
    },
    {
      id: "ORD-003",
      date: "2024-06-11",
      client: "ИП Иванов",
      supplier: "Поставщик В",
      amount: "75,200",
      status: "В пути",
      paymentStatus: "Оплачено",
      deliveryDate: "2024-06-16",
      progress: 85,
    },
    {
      id: "ORD-004",
      date: "2024-06-10",
      client: "ООО Промтех",
      supplier: "Поставщик А",
      amount: "320,000",
      status: "Выполнен",
      paymentStatus: "Оплачено",
      deliveryDate: "2024-06-15",
      progress: 100,
    },
  ];

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

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesPayment = paymentFilter === 'all' || order.paymentStatus === paymentFilter;
    const matchesSupplier = supplierFilter === 'all' || order.supplier === supplierFilter;
    
    return matchesSearch && matchesStatus && matchesPayment && matchesSupplier;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setPaymentFilter('all');
    setSupplierFilter('all');
    setDateFilter('all');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Заказы</h2>
          <p className="text-muted-foreground">
            Управление заказами и контроль их выполнения
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Новый заказ
        </Button>
      </div>

      {/* Статистика заказов */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего заказов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-muted-foreground">+8% от прошлого месяца</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">В работе</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Активных заказов</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Сумма заказов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽2.4M</div>
            <p className="text-xs text-muted-foreground">За текущий месяц</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Просрочено</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-muted-foreground">Требуют внимания</p>
          </CardContent>
        </Card>
      </div>

      {/* Улучшенная фильтрация */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Фильтры и поиск
            </CardTitle>
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Сбросить фильтры
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Поиск */}
            <div className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по клиенту, поставщику или номеру заказа..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Фильтры по пунктам */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Статус заказа */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Статус заказа
                </label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите статус" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все статусы</SelectItem>
                    <SelectItem value="Размещено">Размещено</SelectItem>
                    <SelectItem value="Подтверждено">Подтверждено</SelectItem>
                    <SelectItem value="В пути">В пути</SelectItem>
                    <SelectItem value="Выполнен">Выполнен</SelectItem>
                    <SelectItem value="Отменен">Отменен</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Статус оплаты */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Статус оплаты
                </label>
                <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите статус оплаты" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все статусы</SelectItem>
                    <SelectItem value="Ожидает оплаты">Ожидает оплаты</SelectItem>
                    <SelectItem value="Частично оплачено">Частично оплачено</SelectItem>
                    <SelectItem value="Оплачено">Оплачено</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Поставщик */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Поставщик
                </label>
                <Select value={supplierFilter} onValueChange={setSupplierFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите поставщика" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все поставщики</SelectItem>
                    <SelectItem value="Поставщик А">Поставщик А</SelectItem>
                    <SelectItem value="Поставщик Б">Поставщик Б</SelectItem>
                    <SelectItem value="Поставщик В">Поставщик В</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Период */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Период
                </label>
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите период" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все периоды</SelectItem>
                    <SelectItem value="today">Сегодня</SelectItem>
                    <SelectItem value="week">Эта неделя</SelectItem>
                    <SelectItem value="month">Этот месяц</SelectItem>
                    <SelectItem value="quarter">Этот квартал</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Таблица заказов */}
      <Card>
        <CardHeader>
          <CardTitle>Список заказов ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>№ Заказа</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Поставщик</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Оплата</TableHead>
                <TableHead>Дата поставки</TableHead>
                <TableHead>Прогресс</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{order.supplier}</TableCell>
                  <TableCell>₽{order.amount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPaymentStatusColor(order.paymentStatus)}>
                      {order.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.deliveryDate}</TableCell>
                  <TableCell>
                    <div className="w-20">
                      <Progress value={order.progress} className="h-2" />
                      <span className="text-xs text-muted-foreground">{order.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" asChild>
                        <Link to={`/orders/${order.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <DollarSign className="h-4 w-4" />
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
