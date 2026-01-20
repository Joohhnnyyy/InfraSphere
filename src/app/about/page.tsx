"use client";

import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Globe,
  Building2,
  Database,
  Shield,
  Cpu,
  Network,
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  BarChart3,
  Layers,
  Cloud,
  Lock,
  RefreshCcw
} from "lucide-react";

const scalabilityFeatures = [
  {
    icon: Building2,
    title: "Multi-City Deployment",
    description: "Scale from single neighborhoods to entire metropolitan areas with distributed architecture."
  },
  {
    icon: Database,
    title: "Real-Time Data Integration",
    description: "Connect IoT sensors, traffic APIs, and government datasets for live city monitoring."
  },
  {
    icon: Cloud,
    title: "Cloud-Native Infrastructure",
    description: "Elastic scaling handles millions of data points with sub-second latency."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and role-based access control."
  }
];

const techStack = [
  { name: "Next.js 15", category: "Frontend" },
  { name: "Mapbox GL", category: "Mapping" },
  { name: "React 19", category: "UI" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Recharts", category: "Visualization" },
];

const benefits = [
  "Reduce urban planning costs by 40%",
  "Improve citizen engagement and transparency",
  "Data-driven policy decisions",
  "Predictive infrastructure maintenance",
  "Environmental sustainability tracking",
  "Emergency response optimization"
];

const implementationPhases = [
  {
    phase: "Phase 1",
    title: "Data Foundation",
    items: ["GIS data integration", "Zone mapping", "Baseline metrics"],
    duration: "2-4 weeks"
  },
  {
    phase: "Phase 2",
    title: "Infrastructure Layers",
    items: ["Transport networks", "Energy grid", "Water systems"],
    duration: "4-6 weeks"
  },
  {
    phase: "Phase 3",
    title: "Analytics & AI",
    items: ["Predictive models", "Risk analysis", "Optimization engine"],
    duration: "6-8 weeks"
  },
  {
    phase: "Phase 4",
    title: "Public Deployment",
    items: ["Citizen portal", "API access", "Dashboard customization"],
    duration: "2-4 weeks"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">About InfraSphere</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Building <span className="text-primary">Smarter Cities</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            InfraSphere is a digital twin platform that transforms how cities understand, 
            manage, and optimize their infrastructure for sustainable urban development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The Vision
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Urban areas house over 55% of the world&apos;s population, yet city planning 
                often relies on outdated data and fragmented systems. InfraSphere bridges 
                this gap by creating a unified, real-time digital representation of city 
                infrastructure.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our platform enables city planners, governments, and citizens to visualize 
                complex urban systems, simulate policy changes before implementation, and 
                make data-driven decisions that improve quality of life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "347K+ Citizens", sub: "Population tracked" },
                  { icon: BarChart3, label: "98%", sub: "Data accuracy" },
                  { icon: Zap, label: "Real-time", sub: "Updates" },
                  { icon: Layers, label: "3 Layers", sub: "Infrastructure" }
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-secondary/50">
                    <stat.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-lg font-bold">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse-glow">
                    <Globe className="w-32 h-32 text-primary/30" />
                  </div>
                  <Globe className="w-32 h-32 text-primary relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Scalability & <span className="text-primary">Enterprise Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scalabilityFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-panel rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Implementation Roadmap</h3>
            <div className="space-y-4">
              {implementationPhases.map((phase, i) => (
                <div key={phase.phase} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                      {i + 1}
                    </div>
                    {i < implementationPhases.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">{phase.title}</h4>
                      <span className="text-xs text-muted-foreground">{phase.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phase.items.map(item => (
                        <span key={item} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {benefits.map((benefit, i) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {techStack.map(tech => (
                  <div key={tech.name} className="p-3 rounded-lg bg-secondary/50 text-center">
                    <p className="text-sm font-medium">{tech.name}</p>
                    <p className="text-xs text-muted-foreground">{tech.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-panel rounded-3xl p-8 md:p-12 text-center neon-glow"
        >
          <Cpu className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready for Government Integration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            InfraSphere is designed to integrate with existing government systems, 
            open data portals, and smart city infrastructure. Our platform scales 
            from pilot programs to nationwide deployments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/city-twin">
              <Button size="lg" className="h-12 px-8">
                Explore Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/simulation">
              <Button size="lg" variant="outline" className="h-12 px-8">
                Try Simulation
              </Button>
            </Link>
          </div>
        </motion.div>

        <footer className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-semibold">InfraSphere</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Digital City Twin Platform — Empowering Sustainable Urban Development
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
