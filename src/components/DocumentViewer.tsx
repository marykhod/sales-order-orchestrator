
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Download, FileText } from 'lucide-react';

interface Document {
  name: string;
  size: string;
  type: string;
}

interface DocumentViewerProps {
  document: Document;
}

export function DocumentViewer({ document }: DocumentViewerProps) {
  const handleView = () => {
    console.log(`Просмотр документа: ${document.name}`);
  };

  const handleDownload = () => {
    console.log(`Скачивание документа: ${document.name}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" onClick={handleView}>
          <Eye className="mr-1 h-3 w-3" />
          Просмотр
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {document.name}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-medium">Предварительный просмотр документа</p>
            <p className="text-sm text-gray-500 mb-4">{document.name} ({document.size})</p>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Скачать документ
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
