import FixedContactButton from "@/Components/FixedContactButton";
import Navbar from "@/Components/Navbar";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <FixedContactButton className=""/>
    </div>
  );
}
