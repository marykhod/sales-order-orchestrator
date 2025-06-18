
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Search, Eye, Edit, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import NewRequestModal from "@/components/modals/NewRequestModal";
import FiltersModal from "@/components/modals/FiltersModal";

export default function Requests() {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const requests = [
    {
      id: "REQ-001",
      date: "2024-06-13",
      client: "ООО Машстрой",
      description: "Подшипники 6208",
      priority: "Высокий",
      status: "Новый",
      manager: "Иванов И.И.",
    },
    {
      id: "REQ-002", 
      date: "2024-06-12",
      client: "АО Промтех",
      description: "Направляющие 25мм",
      priority: "Средний",
      status: "В обработке",
      manager: "Петров П.П.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Новый': return 'bg-blue-100 text-blue-800';
      case 'В обработке': return 'bg-yellow-100 text-yellow-800';
      case 'Завершен': return 'bg-green-100 text-green-800';
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

  const handleEdit = (id: string) => {
    toast({
      title: "Редактирование",
      description: `Редактирование запроса ${id}`,
    });
  };

  const handleSendEmail = (id: string) => {
    toast({
      title: "Письмо отправлено",
      description: `Письмо по запросу ${id} отправлено поставщикам`,
    });
  };

  const filteredRequests = requests.filter(request =>
    request.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Запросы</h2>
          <p className="text-muted-foreground">
            Управление запросами от клиентов
          </p>
        </div>
        <div className="flex gap-2">
          <FiltersModal />
          <NewRequestModal />
        </div>
      </div>

      {/* Статистика запросов */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего запросов</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">За текущий месяц</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Новые запросы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Не обработано</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">В обработке</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64</div>
            <p className="text-xs text-muted-foreground">В работе у менеджеров</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Завершено</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
            <p className="text-xs text-muted-foreground">Успешно обработано</p>
          </CardContent>
        </Card>
      </div>

      {/* Поиск */}
      <Card>
        <CardHeader>
          <CardTitle>Поиск запросов</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по клиенту или описанию..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
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
                <TableHead>ID</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Описание</TableHead>
                <TableHead>Приоритет</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Менеджер</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>{request.client}</TableCell>
                  <TableCell>{request.description}</TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(request.priority)}>
                      {request.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.manager}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" asChild>
                        <Link to={`/requests/${request.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleEdit(request.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleSendEmail(request.id)}
                      >
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
