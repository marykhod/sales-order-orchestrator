
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  ShoppingCart,
  Package,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle,
} from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      title: "Активные запросы",
      value: "23",
      change: "+12%",
      icon: FileText,
      color: "blue",
    },
    {
      title: "Заказы в работе",
      value: "67",
      change: "+8%",
      icon: ShoppingCart,
      color: "green",
    },
    {
      title: "Товары на складе",
      value: "1,234",
      change: "-3%",
      icon: Package,
      color: "purple",
    },
    {
      title: "Оборот за месяц",
      value: "₽2.4M",
      change: "+15%",
      icon: DollarSign,
      color: "orange",
    },
  ];

  const recentRequests = [
    { id: "REQ-001", client: "ООО Техника", status: "Новый", priority: "Высокий" },
    { id: "REQ-002", client: "ЗАО Строймаш", status: "В обработке", priority: "Средний" },
    { id: "REQ-003", client: "ИП Иванов", status: "Ожидает ответа", priority: "Низкий" },
    { id: "REQ-004", client: "ООО Промтех", status: "Готов", priority: "Высокий" },
  ];

  const urgentTasks = [
    { task: "Подтверждение заказа №ORD-145", deadline: "Сегодня" },
    { task: "Ответ поставщику по запросу REQ-002", deadline: "Завтра" },
    { task: "Обновление цен в системе", deadline: "До 15:00" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Аналитика</h2>
        <p className="text-muted-foreground">
          Обзор текущего состояния системы
        </p>
      </div>

      {/* Статистические карточки */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                {' '}от прошлого месяца
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Последние запросы */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Последние запросы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{request.id}</p>
                    <p className="text-sm text-muted-foreground">{request.client}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={request.status === 'Готов' ? 'default' : 'secondary'}
                    >
                      {request.status}
                    </Badge>
                    <Badge 
                      variant={request.priority === 'Высокий' ? 'destructive' : 'outline'}
                    >
                      {request.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Срочные задачи */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Срочные задачи
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {urgentTasks.map((task, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-sm font-medium">{task.task}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {task.deadline}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Прогресс выполнения KPI */}
      <Card>
        <CardHeader>
          <CardTitle>KPI за месяц</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Выполнение плана продаж</span>
              <span>78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Своевременность поставок</span>
              <span>92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Обработка запросов в срок</span>
              <span>85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
