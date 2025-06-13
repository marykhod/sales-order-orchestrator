
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Filter, Eye, Edit, Mail } from 'lucide-react';

export default function Requests() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const requests = [
    {
      id: "REQ-001",
      date: "2024-06-13",
      client: "ООО Техника",
      description: "Направляющие 500мм - 10шт",
      status: "Новый",
      priority: "Высокий",
      supplier: "-",
      daysOverdue: 0,
    },
    {
      id: "REQ-002",
      date: "2024-06-12",
      client: "ЗАО Строймаш",
      description: "Подшипники SKF - 25шт",
      status: "В обработке",
      priority: "Средний",
      supplier: "Поставщик А",
      daysOverdue: 2,
    },
    {
      id: "REQ-003",
      date: "2024-06-11",
      client: "ИП Иванов",
      description: "Ремни приводные - 5шт",
      status: "Ожидает ответа",
      priority: "Низкий",
      supplier: "Поставщик Б",
      daysOverdue: 3,
    },
    {
      id: "REQ-004",
      date: "2024-06-10",
      client: "ООО Промтех",
      description: "Муфты соединительные - 15шт",
      status: "Готов",
      priority: "Высокий",
      supplier: "Поставщик В",
      daysOverdue: 0,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Новый': return 'bg-gray-100 text-gray-800';
      case 'В обработке': return 'bg-blue-100 text-blue-800';
      case 'Ожидает ответа': return 'bg-yellow-100 text-yellow-800';
      case 'Готов': return 'bg-green-100 text-green-800';
      case 'Просрочен': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Высокий': return 'bg-red-100 text-red-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      case 'Низкий': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Запросы</h2>
          <p className="text-muted-foreground">
            Управление входящими запросами от клиентов
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Новый запрос
        </Button>
      </div>

      {/* Фильтры */}
      <Card>
        <CardHeader>
          <CardTitle>Фильтры и поиск</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по клиенту, описанию или номеру..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="Новый">Новый</SelectItem>
                <SelectItem value="В обработке">В обработке</SelectItem>
                <SelectItem value="Ожидает ответа">Ожидает ответа</SelectItem>
                <SelectItem value="Готов">Готов</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Фильтры
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Таблица запросов */}
      <Card>
        <CardHeader>
          <CardTitle>Список запросов ({filteredRequests.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>№ Запроса</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Описание</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Приоритет</TableHead>
                <TableHead>Поставщик</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id} className={request.daysOverdue > 5 ? 'bg-red-50' : ''}>
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>{request.client}</TableCell>
                  <TableCell>{request.description}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                    {request.daysOverdue > 5 && (
                      <Badge variant="destructive" className="ml-1">
                        Просрочен {request.daysOverdue}д
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(request.priority)}>
                      {request.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.supplier}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Mail className="h-4 w-4" />
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
