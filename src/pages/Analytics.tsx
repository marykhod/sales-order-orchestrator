
import React from 'react';
import { Dashboard } from '@/components/Dashboard';
import { TopClients } from '@/components/TopClients';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Dashboard />
        </div>
        <div>
          <TopClients />
        </div>
      </div>
    </div>
  );
}
