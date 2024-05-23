import React from "react";
import Sidebar from "@/components/shared/sidebar";
import MobileNav from "@/components/shared/mobile-nav";
import { Toaster } from "@/components/ui/toaster";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      <Toaster />
    </main>
  );
};
export default layout;
