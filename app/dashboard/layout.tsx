import React from 'react';
// import SideBar from '../components/ui/SideBar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
