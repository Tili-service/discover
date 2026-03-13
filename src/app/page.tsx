"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ShoppingCart, CheckCircle, Smartphone, CreditCard, PieChart, Users, Clock } from "lucide-react";
import Features from "@/components/Features";


const tiliMockup = "tili-mockup.png";
const tiliLogo = "tiliLogo.png";

export const CONTACT_EMAIL = "tili.gestion@gmail.com";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
    {/* Topbar Bêta utilisant la nouvelle palette de couleurs */}
    <div className="bg-[#B0413E] text-[#FFFFC7] text-center text-xs sm:text-sm py-2.5 px-4 shadow-md font-display">
      <span className="font-medium animate-pulse inline-block mr-1">🚀</span>
      <span className="font-medium">Tili Bêta arrive très prochainement !</span>
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
        className="sm:ml-2 mt-1 sm:mt-0 font-bold underline hover:text-[#FCAA67] transition-colors inline-block"
      >
        Réservez votre place en avant-première.
      </button>
    </div>
    
    {/* Navigation */}
    <nav className="bg-background/80 backdrop-blur-md border-b w-full">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={tiliLogo} alt="Tili" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 font-display text-sm font-medium">
          <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">Fonctionnalités</a>
          <a href="#detailed-features" className="text-foreground/70 hover:text-foreground transition-colors">En détail</a>
        </div>
        <Button variant="hero" size="default" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Nous contacter
        </Button>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="pt-32 pb-20 gradient-hero overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-display text-sm font-bold border border-primary/20">
            <span className="flex w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Bêta à venir 🚀
          </span>
          <span className="text-sm font-medium text-muted-foreground hidden sm:inline-block">
            Lancement très prochainement !
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
          Gérez votre boutique avec{" "}
          <span className="text-primary">simplicité</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
          Tili est le logiciel de caisse pensé pour les petits commerces.
          Simple, rapide et fiable. Encaissez, gérez vos stocks et suivez vos ventes en un clin d'œil.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button variant="hero" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="w-5 h-5" />
            Nous contacter
          </Button>
          <Button variant="outline" size="xl" onClick={() => document.getElementById('detailed-features')?.scrollIntoView({ behavior: 'smooth' })}>
            Découvrir l'application
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="animate-float">
          <img
            src={tiliMockup}
            alt="Tili - Interface"
            className="w-full rounded-2xl shadow-warm"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const detailedFeaturesData = [
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Gestion des stocks intelligente",
    desc: "Suivez vos stocks en temps réel. Recevez une alerte lorsqu’un produit est en petite quantité et verrouillez automatiquement la vente d'un produit en rupture.",
  },
  {
    icon: <Users className="w-6 h-6 text-secondary" />,
    title: "Multi-session vendeur",
    desc: "Gérez plusieurs sessions en même temps sur la même tablette ! Si un vendeur prend une longue commande, un autre peut ouvrir sa session en parallèle. Gain de temps et d'argent.",
  },
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: "Promotions limitées",
    desc: "Programmez et gérez facilement vos promotions et réductions à durée limitée, en quelques clics.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Multi-plateforme & Vue Admin web",
    desc: "L'application Tili est utilisable sur tablette et smartphone. De plus, une vue Administrateur sur le Web vous permet de monitorer votre commerce d'où que vous soyez.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-secondary" />,
    title: "Intégration TPE",
    desc: "Connexion directe avec votre terminal de paiement. L'envoi automatique du montant de la transaction au TPE limite les erreurs de saisie.",
  },
  {
    icon: <PieChart className="w-6 h-6 text-accent" />,
    title: "Rapports & Rapprochements",
    desc: "Création de rapports journaliers automatiques. Vérification automatique entre les ventes inscrites en carte sur Tili et la télécollecte de votre TPE connecté.",
  },
];

const DetailedFeatures = () => (
  <section id="detailed-features" className="py-24 bg-card/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold font-display mb-4">
          Aller plus loin avec Tili
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Découvrez les fonctionnalités puissantes qui vous feront gagner un temps précieux chaque jour.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {detailedFeaturesData.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 shadow-sm">
              {feat.icon}
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{feat.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold font-display mb-6">
          Rejoignez la liste d'attente pour notre Bêta !
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Notre version Bêta sera très prochainement disponible. Sécurisez votre place en nous contactant dès maintenant pour faire partie des premiers testeurs privilégiés de Tili.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}?subject=Inscription%20Liste%20d'attente%20Bêta%20Tili`}>
          <Button variant="hero" size="xl">
            <Mail className="w-5 h-5 mr-2" />
            Réserver ma place
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-foreground text-background">
    <div className="container text-center">
      <img src={tiliLogo} alt="Tili" className="h-12 w-auto mx-auto mb-2 brightness-0 invert" />
      <p className="text-background/60 text-sm">
        © 2026 Tili. Le logiciel de caisse pour les petits commerces.
      </p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DetailedFeatures />
      <Contact />
      <Footer />
    </div>
  );
}
