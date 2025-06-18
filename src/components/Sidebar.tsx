
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
  FileText,
  ShoppingCart,
  Warehouse,
  Settings,
  BarChart3,
  Users,
} from 'lucide-react';

const menuItems = [
  {
    title: "Аналитика",
    url: "/",
    icon: BarChart3,
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
    title: "Поставщики",
    url: "/suppliers",
    icon: Users,
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
      <SidebarHeader className="p-4 pb-2">
        <div className="flex flex-col items-center gap-2">
          <img 
            src="/lovable-uploads/10bc8dcf-ca34-4ca3-a7d3-86be2f7ba3bd.png" 
            alt="Логотип LADOGA" 
            className="h-16 w-auto object-contain"
          />
          <div className="text-center">
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
