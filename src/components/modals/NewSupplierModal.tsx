
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Plus } from 'lucide-react';

interface NewSupplierModalProps {
  children?: React.ReactNode;
}

export default function NewSupplierModal({ children }: NewSupplierModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Поставщик добавлен",
      description: "Новый поставщик успешно добавлен в систему",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Добавить поставщика
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Добавить поставщика</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Название компании</Label>
            <Input id="name" placeholder="ООО Поставщик" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="manager@supplier.ru" required />
          </div>
          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" placeholder="+7 (495) 123-45-67" required />
          </div>
          <div>
            <Label htmlFor="category">Категория товаров</Label>
            <Input id="category" placeholder="Подшипники, Направляющие..." required />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Отмена
            </Button>
            <Button type="submit">Добавить</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
