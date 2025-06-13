
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, Users, Database, Bell, Shield } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Настройки</h2>
        <p className="text-muted-foreground">
          Управление системными настройками и конфигурацией
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">Общие</TabsTrigger>
          <TabsTrigger value="users">Пользователи</TabsTrigger>
          <TabsTrigger value="integrations">Интеграции</TabsTrigger>
          <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          <TabsTrigger value="security">Безопасность</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="h-5 w-5" />
                Общие настройки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Название компании</Label>
                  <Input id="company-name" defaultValue="ООО Система Закупок" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Валюта</Label>
                  <Select defaultValue="rub">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rub">Российский рубль (₽)</SelectItem>
                      <SelectItem value="usd">Доллар США ($)</SelectItem>
                      <SelectItem value="eur">Евро (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Часовой пояс</Label>
                  <Select defaultValue="msk">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="msk">Москва (MSK)</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург (MSK)</SelectItem>
                      <SelectItem value="nsk">Новосибирск (NOVT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Язык интерфейса</Label>
                  <Select defaultValue="ru">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="auto-save" defaultChecked />
                <Label htmlFor="auto-save">Автоматическое сохранение</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode">Темная тема</Label>
              </div>
              <Button>Сохранить изменения</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Управление пользователями
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Активные пользователи</h3>
                  <Button>Добавить пользователя</Button>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Иванов И.И.', role: 'Администратор', email: 'ivanov@company.com', status: 'Активен' },
                    { name: 'Петров П.П.', role: 'Менеджер по продажам', email: 'petrov@company.com', status: 'Активен' },
                    { name: 'Сидоров С.С.', role: 'Менеджер по закупкам', email: 'sidorov@company.com', status: 'Активен' },
                  ].map((user, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{user.role}</p>
                        <p className="text-sm text-green-600">{user.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Интеграции
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">1С:Предприятие</h3>
                    <p className="text-sm text-muted-foreground">Синхронизация данных с 1С</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Button variant="outline" size="sm">Настроить</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Bitrix24</h3>
                    <p className="text-sm text-muted-foreground">CRM интеграция</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Button variant="outline" size="sm">Настроить</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Email рассылка</h3>
                    <p className="text-sm text-muted-foreground">Автоматические уведомления</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <Button variant="outline" size="sm">Настроить</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Настройки уведомлений
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Новые запросы</p>
                    <p className="text-sm text-muted-foreground">Уведомления о новых запросах от клиентов</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Просрочки</p>
                    <p className="text-sm text-muted-foreground">Уведомления о просроченных задачах</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Низкие остатки</p>
                    <p className="text-sm text-muted-foreground">Уведомления о товарах с низкими остатками</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Платежи</p>
                    <p className="text-sm text-muted-foreground">Уведомления о поступлении платежей</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Безопасность
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Время сессии (минуты)</Label>
                  <Input id="session-timeout" type="number" defaultValue="60" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="two-factor" />
                  <Label htmlFor="two-factor">Двухфакторная аутентификация</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="login-logging" defaultChecked />
                  <Label htmlFor="login-logging">Логирование входов</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="password-policy" defaultChecked />
                  <Label htmlFor="password-policy">Строгая политика паролей</Label>
                </div>
                <Button>Применить настройки</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
