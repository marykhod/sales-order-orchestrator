
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Star, Mail, Phone, MapPin, Calendar, TrendingUp, Package } from 'lucide-react';

export default function SupplierProfile() {
  const { id } = useParams();

  // Мокданные для поставщика
  const supplier = {
    id: id || "SUP-001",
    name: "Поставщик А",
    category: "Подшипники",
    rating: 4.8,
    orders: 45,
    lastOrder: "2024-06-10",
    contact: "manager@suppliera.ru",
    phone: "+7 (495) 123-45-67",
    address: "г. Москва, ул. Промышленная, д. 25",
    status: "Активный",
    reliability: 95,
    founded: "2015",
    employees: "150-200",
    description: "Ведущий поставщик промышленных подшипников и комплектующих. Работаем с ведущими производителями мира.",
    certifications: ["ISO 9001", "ISO 14001", "ГОСТ Р"],
    paymentTerms: "30 дней",
    deliveryTime: "3-5 дней",
    recentOrders: [
      { id: "ORD-145", date: "2024-06-10", amount: "125,000", status: "Выполнен" },
      { id: "ORD-132", date: "2024-06-05", amount: "89,500", status: "Выполнен" },
      { id: "ORD-118", date: "2024-05-28", amount: "156,000", status: "Выполнен" }
    ],
    products: [
      { name: "Подшипники шариковые", category: "Подшипники", inStock: true },
      { name: "Подшипники роликовые", category: "Подшипники", inStock: true },
      { name: "Уплотнители", category: "Комплектующие", inStock: false }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Активный': return 'bg-green-100 text-green-800';
      case 'Неактивный': return 'bg-gray-100 text-gray-800';
      case 'Заблокирован': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/suppliers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к поставщикам
          </Link>
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{supplier.name}</h2>
          <p className="text-muted-foreground">Профиль поставщика</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Основная информация */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Общая информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">ID поставщика</label>
                  <p className="font-medium">{supplier.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Год основания</label>
                  <p>{supplier.founded}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Количество сотрудников</label>
                  <p>{supplier.employees}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Категория</label>
                  <p>{supplier.category}</p>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Описание</label>
                <p className="mt-1">{supplier.description}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Сертификации</label>
                <div className="flex gap-2 mt-1">
                  {supplier.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline">{cert}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Недавние заказы */}
          <Card>
            <CardHeader>
              <CardTitle>Недавние заказы</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ Заказа</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Сумма</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supplier.recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>₽{order.amount}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          {order.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Продукция */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Продукция
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {supplier.products.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <Badge variant={product.inStock ? "default" : "secondary"}>
                      {product.inStock ? "В наличии" : "Под заказ"}
                    </Badge>
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
              <CardTitle>Рейтинг и статус</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Рейтинг</label>
                <div className="flex items-center gap-2 mt-1">
                  {renderStars(supplier.rating)}
                  <span className="font-medium">{supplier.rating}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Статус</label>
                <div className="mt-1">
                  <Badge className={getStatusColor(supplier.status)}>
                    {supplier.status}
                  </Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Надежность</label>
                <div className="mt-1">
                  <Progress value={supplier.reliability} className="h-2" />
                  <span className="text-sm text-green-600">{supplier.reliability}%</span>
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
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{supplier.contact}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{supplier.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{supplier.address}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Условия работы</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Условия оплаты</label>
                <p className="text-sm">{supplier.paymentTerms}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Время доставки</label>
                <p className="text-sm">{supplier.deliveryTime}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Всего заказов</label>
                <p className="text-sm font-medium">{supplier.orders}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Последний заказ</label>
                <p className="text-sm">{supplier.lastOrder}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Действия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">
                Создать заказ
              </Button>
              <Button variant="outline" className="w-full">
                Отправить запрос
              </Button>
              <Button variant="outline" className="w-full">
                История заказов
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
