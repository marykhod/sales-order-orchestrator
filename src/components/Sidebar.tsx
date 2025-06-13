
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  Home,
  FileText,
  ShoppingCart,
  Warehouse,
  Settings,
  BarChart3,
  Users,
  Factory,
  DollarSign,
} from 'lucide-react';

const menuItems = [
  {
    title: "Главная",
    url: "/",
    icon: Home,
  },
  {
    title: "Запросы",
    url: "/requests",
    icon: FileText,
  },
  {
    title: "Заказы",
    url: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Склад",
    url: "/warehouse",
    icon: Warehouse,
  },
  {
    title: "Производство",
    url: "/production",
    icon: Factory,
  },
  {
    title: "Финансы",
    url: "/finance",
    icon: DollarSign,
  },
  {
    title: "Поставщики",
    url: "/suppliers",
    icon: Users,
  },
  {
    title: "Аналитика",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Настройки",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <img 
            src="https://www.ladogaspb.ru/upload/iblock/f1b/f1b67860b56ebb11f4c9bf4f165c204a.jpg" 
            alt="Логотип компании" 
            className="h-10 w-10 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-lg font-bold">Ладога СПб</h2>
            <p className="text-sm text-muted-foreground">Система управления</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Основные разделы</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
