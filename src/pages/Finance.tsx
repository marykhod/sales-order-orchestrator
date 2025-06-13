
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { DollarSign, CreditCard, AlertTriangle, TrendingUp } from 'lucide-react';

export default function Finance() {
  const payments = [
    {
      id: "PAY-001",
      order: "ORD-001",
      client: "ООО Техника",
      amount: "150,000",
      type: "Предоплата 30%",
      status: "Ожидает",
      dueDate: "2024-06-15",
      invoiceNumber: "INV-2024-001",
    },
    {
      id: "PAY-002",
      order: "ORD-002",
      client: "ЗАО Строймаш",
      amount: "196,350",
      type: "Предоплата 70%",
      status: "Оплачено",
      dueDate: "2024-06-14",
      invoiceNumber: "INV-2024-002",
    },
    {
      id: "PAY-003",
      order: "ORD-003",
      client: "ИП Иванов",
      amount: "75,200",
      type: "Полная оплата",
      status: "Оплачено",
      dueDate: "2024-06-13",
      invoiceNumber: "INV-2024-003",
    },
  ];

  const expenses = [
    {
      id: "EXP-001",
      supplier: "Поставщик А",
      amount: "280,500",
      description: "Закупка материалов",
      status: "К оплате",
      dueDate: "2024-06-18",
    },
    {
      id: "EXP-002",
      supplier: "Поставщик Б",
      amount: "125,000",
      description: "Комплектующие",
      status: "Оплачено",
      dueDate: "2024-06-12",
    },
  ];

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Оплачено': return 'bg-green-100 text-green-800';
      case 'Ожидает': return 'bg-yellow-100 text-yellow-800';
      case 'Просрочено': return 'bg-red-100 text-red-800';
      case 'К оплате': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Финансы</h2>
        <p className="text-muted-foreground">
          Управление платежами и финансовой отчетностью
        </p>
      </div>

      {/* Финансовая статистика */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Выручка за месяц</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽2,450,000</div>
            <p className="text-xs text-muted-foreground">+15% от прошлого месяца</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">К получению</CardTitle>
            <CreditCard className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽850,000</div>
            <p className="text-xs text-muted-foreground">23 счета на оплату</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">К оплате</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽620,000</div>
            <p className="text-xs text-muted-foreground">15 счетов к оплате</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Маржа</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23.5%</div>
            <p className="text-xs text-muted-foreground">Средняя маржа</p>
          </CardContent>
        </Card>
      </div>

      {/* Входящие платежи */}
      <Card>
        <CardHeader>
          <CardTitle>Входящие платежи</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>№ Платежа</TableHead>
                <TableHead>Заказ</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Тип платежа</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Срок оплаты</TableHead>
                <TableHead>Инвойс</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.order}</TableCell>
                  <TableCell>{payment.client}</TableCell>
                  <TableCell>₽{payment.amount}</TableCell>
                  <TableCell>{payment.type}</TableCell>
                  <TableCell>
                    <Badge className={getPaymentStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{payment.dueDate}</TableCell>
                  <TableCell>{payment.invoiceNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Исходящие платежи */}
      <Card>
        <CardHeader>
          <CardTitle>Исходящие платежи</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>№ Расхода</TableHead>
                <TableHead>Поставщик</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Описание</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Срок оплаты</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell className="font-medium">{expense.id}</TableCell>
                  <TableCell>{expense.supplier}</TableCell>
                  <TableCell>₽{expense.amount}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>
                    <Badge className={getPaymentStatusColor(expense.status)}>
                      {expense.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{expense.dueDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Финансовые показатели */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Выполнение финансового плана</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Выручка</span>
                <span>₽2.45M / ₽3.0M</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Прибыль</span>
                <span>₽580K / ₽720K</span>
              </div>
              <Progress value={81} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Маржинальность</span>
                <span>23.5% / 25.0%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Задолженность по клиентам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">ООО Техника</span>
                <span className="font-medium">₽150,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ЗАО Промышленность</span>
                <span className="font-medium">₽280,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ИП Сидоров</span>
                <span className="font-medium">₽45,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ООО Машстрой</span>
                <span className="font-medium">₽125,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
