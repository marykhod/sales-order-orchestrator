
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileText, Download, Eye, Mail, Phone, Calendar, User } from 'lucide-react';

export default function RequestDetail() {
  const { id } = useParams();

  // Мокданные для запроса
  const request = {
    id: id || "REQ-001",
    date: "2024-06-13",
    client: "ООО Машстрой",
    description: "Подшипники 6208",
    priority: "Высокий",
    status: "Новый",
    manager: "Иванов И.И.",
    email: "manager@mashstroy.ru",
    phone: "+7 (495) 123-45-67",
    deadline: "2024-06-20",
    details: "Требуются высококачественные подшипники 6208 для промышленного оборудования. Количество: 50 шт. Требования к качеству: соответствие ГОСТ 8338-75.",
    notes: "Клиент готов рассмотреть аналоги от проверенных производителей.",
    documents: [
      { name: "Спецификация.pdf", size: "245 KB", type: "pdf" },
      { name: "Техническое задание.docx", size: "1.2 MB", type: "docx" },
      { name: "Чертеж детали.dwg", size: "890 KB", type: "dwg" }
    ]
  };

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

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/requests">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к запросам
          </Link>
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Запрос {request.id}</h2>
          <p className="text-muted-foreground">Детальная информация по запросу</p>
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
                  <label className="text-sm font-medium text-muted-foreground">Номер запроса</label>
                  <p className="font-medium">{request.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Дата создания</label>
                  <p>{request.date}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Клиент</label>
                  <p className="font-medium">{request.client}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Менеджер</label>
                  <p>{request.manager}</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Описание</label>
                <p className="mt-1">{request.description}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Детальная информация</label>
                <p className="mt-1 text-sm">{request.details}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Примечания</label>
                <p className="mt-1 text-sm">{request.notes}</p>
              </div>
            </CardContent>
          </Card>

          {/* Документы */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Прикрепленные документы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {request.documents.map((doc, index) => (
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
              <CardTitle>Статус и приоритет</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Статус</label>
                <div className="mt-1">
                  <Badge className={getStatusColor(request.status)}>
                    {request.status}
                  </Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Приоритет</label>
                <div className="mt-1">
                  <Badge className={getPriorityColor(request.priority)}>
                    {request.priority}
                  </Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Срок исполнения</label>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{request.deadline}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{request.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{request.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{request.phone}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Действия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">
                Взять в работу
              </Button>
              <Button variant="outline" className="w-full">
                Отправить ответ
              </Button>
              <Button variant="outline" className="w-full">
                Создать заказ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
