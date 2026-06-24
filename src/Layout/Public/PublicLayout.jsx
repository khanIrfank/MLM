import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InteractiveCanvas from '../../components/InteractiveCanvas';

const PublicLayout = ({ children, view, setView }) => {
  return (
    <div className="relative min-h-screen bg-[#0B1120] text-white selection:bg-[#00D26A]/30 selection:text-[#00D26A] flex flex-col font-sans overflow-x-hidden max-w-full">
      {/* Animated particle canvas background */}
      <InteractiveCanvas />
      
      {/* Global decorative background glows */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[15%] w-[600px] h-[600px] bg-[#00D26A]/5 rounded-full filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-[#2563EB]/5 rounded-full filter blur-[120px] pointer-events-none z-0" />

      {/* Main navigation */}
      <Navbar view={view} setView={setView} />

      {/* Page Content viewport */}
      <main className="flex-grow z-10 pt-[72px]">
        {children}
      </main>

      {/* Global footer */}
      <Footer view={view} setView={setView} />
    </div>
  );
};

export default PublicLayout;