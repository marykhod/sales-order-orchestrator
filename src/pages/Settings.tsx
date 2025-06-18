
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings as SettingsIcon, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from "@/components/ThemeProvider";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleSaveChanges = () => {
    toast({
      title: "Настройки сохранены",
      description: "Все изменения успешно сохранены",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <SettingsIcon className="h-8 w-8" />
          Общие настройки
        </h2>
        <p className="text-muted-foreground">
          Управление настройками системы и предпочтениями
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Основные настройки */}
        <Card>
          <CardHeader>
            <CardTitle>Основные настройки</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="company-name">Название компании</Label>
              <Input
                id="company-name"
                defaultValue="ООО Система Закупок"
                placeholder="Введите название компании"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Часовой пояс</Label>
              <Select defaultValue="moscow">
                <SelectTrigger>
                  <SelectValue placeholder="Выберите часовой пояс" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="moscow">Москва (MSK)</SelectItem>
                  <SelectItem value="spb">Санкт-Петербург (MSK)</SelectItem>
                  <SelectItem value="ekb">Екатеринбург (YEKT)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency">Валюта</Label>
              <Select defaultValue="rub">
                <SelectTrigger>
                  <SelectValue placeholder="Выберите валюту" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rub">Российский рубль (₽)</SelectItem>
                  <SelectItem value="usd">Доллар США ($)</SelectItem>
                  <SelectItem value="eur">Евро (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Язык интерфейса</Label>
              <Select defaultValue="ru">
                <SelectTrigger>
                  <SelectValue placeholder="Выберите язык" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ru">Русский</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Настройки интерфейса */}
        <Card>
          <CardHeader>
            <CardTitle>Настройки интерфейса</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Тема оформления</Label>
              <div className="flex gap-2">
                <Button
                  variant={theme === 'light' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('light')}
                  className="flex items-center gap-2"
                >
                  <Sun className="h-4 w-4" />
                  Светлая
                </Button>
                <Button
                  variant={theme === 'dark' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('dark')}
                  className="flex items-center gap-2"
                >
                  <Moon className="h-4 w-4" />
                  Темная
                </Button>
                <Button
                  variant={theme === 'system' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('system')}
                  className="flex items-center gap-2"
                >
                  <Monitor className="h-4 w-4" />
                  Системная
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Автоматическое сохранение</Label>
                <p className="text-sm text-muted-foreground">
                  Автоматически сохранять изменения
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Темная тема</Label>
                <p className="text-sm text-muted-foreground">
                  Использовать темную тему интерфейса
                </p>
              </div>
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Уведомления</Label>
                <p className="text-sm text-muted-foreground">
                  Получать уведомления о важных событиях
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Звуковые уведомления</Label>
                <p className="text-sm text-muted-foreground">
                  Воспроизводить звук при уведомлениях
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Сохранить изменения</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleSaveChanges} className="w-full md:w-auto">
            Сохранить изменения
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
