import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

// Lazy load sections for better performance
const SectionAudience = React.lazy(() => import('./components/SectionAudience').then(module => ({ default: module.SectionAudience })));
const SectionServicesOverview = React.lazy(() => import('./components/SectionServicesOverview').then(module => ({ default: module.SectionServicesOverview })));
const ServiceDetails = React.lazy(() => import('./components/ServiceDetails').then(module => ({ default: module.ServiceDetails })));
const SectionAbout = React.lazy(() => import('./components/SectionAbout').then(module => ({ default: module.SectionAbout })));
const SectionClientArea = React.lazy(() => import('./components/SectionClientArea').then(module => ({ default: module.SectionClientArea })));
const SectionContact = React.lazy(() => import('./components/SectionContact').then(module => ({ default: module.SectionContact })));

// Loading fallback
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Conttrole Contabilidade Digital | Inteligência e Segurança</title>
        <meta name="description" content="Elevamos o padrão da contabilidade para empresas e profissionais que buscam inteligência, segurança e crescimento. Atendimento humanizado e tecnologia de ponta." />
        <meta name="keywords" content="contabilidade digital, contabilidade para empresas, MEI, negócios digitais, BPO financeiro, registro de marcas" />
        <meta property="og:title" content="Conttrole Contabilidade Digital" />
        <meta property="og:description" content="Elevamos o padrão da contabilidade para empresas e profissionais que buscam inteligência, segurança e crescimento." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <SectionAudience />
          <SectionServicesOverview />
          <ServiceDetails />
          <SectionAbout />
          <SectionClientArea />
          <SectionContact />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
};

export default App;