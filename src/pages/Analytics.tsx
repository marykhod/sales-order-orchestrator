
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Package } from 'lucide-react';

export default function Analytics() {
  const salesData = [
    { month: 'Янв', sales: 2400, orders: 45 },
    { month: 'Фев', sales: 1398, orders: 32 },
    { month: 'Мар', sales: 9800, orders: 87 },
    { month: 'Апр', sales: 3908, orders: 64 },
    { month: 'Май', sales: 4800, orders: 72 },
    { month: 'Июн', sales: 3800, orders: 58 },
  ];

  const categoryData = [
    { name: 'Направляющие', value: 35, color: '#8884d8' },
    { name: 'Подшипники', value: 25, color: '#82ca9d' },
    { name: 'Ремни', value: 20, color: '#ffc658' },
    { name: 'Муфты', value: 15, color: '#ff7300' },
    { name: 'Прочее', value: 5, color: '#00ff00' },
  ];

  const marginData = [
    { supplier: 'Поставщик А', margin: 23.5 },
    { supplier: 'Поставщик Б', margin: 18.2 },
    { supplier: 'Поставщик В', margin: 31.8 },
    { supplier: 'Поставщик Г', margin: 15.4 },
    { supplier: 'Поставщик Д', margin: 27.9 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Аналитика</h2>
        <p className="text-muted-foreground">
          Анализ эффективности и ключевые показатели деятельности
        </p>
      </div>

      {/* KPI карточки */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Оборот за месяц</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽2.45M</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +15.2% от прошлого месяца
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Количество заказов</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +8.1% от прошлого месяца
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Средний чек</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₽19,291</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +6.5% от прошлого месяца
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Конверсия</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73.2%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              -2.1% от прошлого месяца
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* График продаж */}
        <Card>
          <CardHeader>
            <CardTitle>Динамика продаж</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Распределение по категориям */}
        <Card>
          <CardHeader>
            <CardTitle>Продажи по категориям</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Маржинальность по поставщикам */}
      <Card>
        <CardHeader>
          <CardTitle>Маржинальность по поставщикам</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marginData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="supplier" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="margin" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Таблица топ-клиентов */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Топ-клиенты по обороту</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'ООО Техника', amount: '₽450,000', orders: 15 },
                { name: 'ЗАО Строймаш', amount: '₽380,000', orders: 12 },
                { name: 'ИП Иванов', amount: '₽280,000', orders: 8 },
                { name: 'ООО Промтех', amount: '₽220,000', orders: 6 },
                { name: 'ЗАО Машснаб', amount: '₽180,000', orders: 5 },
              ].map((client, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.orders} заказов</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{client.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Топ-товары по продажам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Направляющие 500мм', sold: 145, revenue: '₽362,500' },
                { name: 'Подшипники SKF 6205', sold: 89, revenue: '₽75,650' },
                { name: 'Ремни приводные А-1250', sold: 67, revenue: '₽80,400' },
                { name: 'Муфты соединительные', sold: 45, revenue: '₽135,000' },
                { name: 'Втулки бронзовые', sold: 34, revenue: '₽68,000' },
              ].map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sold} шт</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
