"use client";

import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Eye, 
  Zap, 
  BarChart3,
  Layers,
  Sparkles,
  Globe,
  Users,
  Building,
  GraduationCap,
  Shield,
  TrendingUp,
  CheckCircle2,
  Target,
  Lightbulb,
  Network,
  Activity,
  Leaf,
  Scale,
  Workflow,
  Brain,
  LineChart,
  MapPin,
  Cpu,
  FileCheck,
  Award,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Eye,
    title: "Real-Time Visualization",
    description: "See your city's heartbeat through interactive maps showing zones, traffic, and infrastructure.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Layers,
    title: "Infrastructure Layers",
    description: "Toggle between transport, energy, and water systems to understand city networks.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Simulation Engine",
    description: "Test policies before implementation. See how changes ripple through the entire system.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Track sustainability scores, pollution indices, and service accessibility in real-time.",
    color: "from-emerald-500 to-green-500"
  }
];

const stats = [
  { value: "347K+", label: "Population Tracked" },
  { value: "8", label: "City Zones" },
  { value: "3", label: "Infrastructure Layers" },
  { value: "98%", label: "Data Accuracy" }
];

const whyNowReasons = [
  {
    icon: Building,
    title: "Urban Population Surge",
    description: "68% of world population will live in cities by 2050. Infrastructure must evolve now."
  },
  {
    icon: Activity,
    title: "Data Availability",
    description: "IoT sensors, GIS data, and open datasets make real-time city modeling finally possible."
  },
  {
    icon: TrendingUp,
    title: "Policy Complexity",
    description: "Interconnected urban systems require holistic visualization to avoid unintended consequences."
  },
  {
    icon: Leaf,
    title: "Climate Imperative",
    description: "Cities produce 70% of emissions. Simulation-driven planning accelerates sustainability."
  }
];

const userPersonas = [
  {
    icon: Building,
    role: "City Officials",
    description: "Strategic oversight, budget allocation, and policy approval with data-driven confidence.",
    access: "Full dashboard, simulation approvals, citywide metrics"
  },
  {
    icon: MapPin,
    role: "Urban Planners",
    description: "Deep dive into infrastructure layers, run detailed simulations, design interventions.",
    access: "All layers, simulation engine, zone-level analytics"
  },
  {
    icon: Users,
    role: "Citizens",
    description: "Transparent view of city health, understand how policies affect neighborhoods.",
    access: "Public metrics, simplified simulations, feedback portal"
  },
  {
    icon: GraduationCap,
    role: "Students & Educators",
    description: "Learn urban systems through interactive exploration and guided scenarios.",
    access: "Education mode, sandbox simulations, learning modules"
  },
  {
    icon: Shield,
    role: "Emergency Teams",
    description: "Real-time crisis monitoring, resource allocation, evacuation planning.",
    access: "Crisis dashboard, resource maps, alert systems"
  }
];

const simulationFlow = [
  { step: "01", title: "Select Parameters", description: "Choose policy levers: transport funding, green zones, energy sources, regulations" },
  { step: "02", title: "Set Intensity", description: "Adjust investment levels, coverage targets, and implementation timelines" },
  { step: "03", title: "Run Simulation", description: "Rule-based engine calculates cascading effects across all urban systems" },
  { step: "04", title: "Compare Results", description: "Before/after visualization with clear impact metrics and trade-off analysis" },
  { step: "05", title: "Understand Why", description: "Explainability layer shows causal chains: why metric X changed due to policy Y" }
];

const govTechAlignment = [
  {
    icon: Lightbulb,
    criterion: "Originality",
    description: "First platform to combine infrastructure visualization, policy simulation, and citizen transparency in one unified digital twin."
  },
  {
    icon: Users,
    criterion: "Usability",
    description: "Role-based interfaces ensure city officials, planners, citizens, and students each get tailored, intuitive experiences."
  },
  {
    icon: Target,
    criterion: "Impact",
    description: "Measurable outcomes: reduced policy failures, improved resource allocation, increased public trust in governance."
  },
  {
    icon: Network,
    criterion: "Scalability",
    description: "Modular architecture scales from pilot neighborhoods to cities, regions, and national infrastructure networks."
  },
  {
    icon: Leaf,
    criterion: "Sustainability",
    description: "Built-in climate metrics, renewable energy tracking, and long-term environmental impact forecasting."
  }
];

const implementationPhases = [
  {
    phase: "Phase 1",
    title: "Pilot City",
    duration: "3-6 months",
    items: ["Single district deployment", "Core infrastructure layers", "Basic simulation engine", "Government training"]
  },
  {
    phase: "Phase 2", 
    title: "City-Wide Scale",
    duration: "6-12 months",
    items: ["Full city integration", "Citizen portal launch", "Advanced analytics", "API ecosystem"]
  },
  {
    phase: "Phase 3",
    title: "Regional Network",
    duration: "12-18 months",
    items: ["Multi-city dashboard", "Cross-jurisdiction data", "National reporting", "Best practice sharing"]
  },
  {
    phase: "Phase 4",
    title: "AI Evolution",
    duration: "18-24 months",
    items: ["Predictive modeling", "Autonomous recommendations", "Real-time optimization", "Global benchmarking"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <main className="relative">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">World Governments Summit Innovation</span>
              </motion.div>

              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
                <span className="text-foreground">A Living</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                  Digital Twin
                </span>
                <br />
                <span className="text-foreground">of the City</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                InfraSphere enables governments, planners, and citizens to visualize urban infrastructure, 
                simulate policy decisions, and build sustainable, transparent cities. 
                Shift governance from reactive to predictive.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/city-twin">
                  <Button size="lg" className="group h-14 px-8 text-lg neon-glow">
                    Explore City Twin
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/simulation">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/30 hover:bg-primary/10">
                    Try Simulation
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-20 relative"
            >
              <div className="aspect-video max-w-5xl mx-auto rounded-2xl glass-panel overflow-hidden neon-glow relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <div className="w-full h-full p-6 md:p-10">
                  <div className="relative w-full h-full flex items-center">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-64 aspect-square">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6, duration: 1, type: "spring" }}
                        className="w-full h-full rounded-full border-2 border-primary/30 flex items-center justify-center relative"
                      >
                        <div className="absolute inset-4 rounded-full border border-cyan-400/20 animate-pulse" />
                        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20" />
                        <Globe className="w-16 md:w-20 h-16 md:h-20 text-primary relative z-10" />
                        
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                          <motion.div
                            key={deg}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="absolute w-3 h-3 rounded-full bg-primary"
                            style={{
                              top: `${(50 - 45 * Math.cos((deg * Math.PI) / 180)).toFixed(4)}%`,
                              left: `${(50 + 45 * Math.sin((deg * Math.PI) / 180)).toFixed(4)}%`,
                              transform: "translate(-50%, -50%)"
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>

                    <div className="ml-auto w-[55%] md:w-[60%] space-y-3">
                      {[
                        { label: "Mobility Score", value: 72, color: "from-cyan-500 to-teal-400", icon: Network },
                        { label: "Air Quality Index", value: 85, color: "from-emerald-500 to-green-400", icon: Leaf },
                        { label: "Energy Efficiency", value: 68, color: "from-amber-500 to-orange-400", icon: Zap },
                        { label: "Service Coverage", value: 91, color: "from-violet-500 to-purple-400", icon: MapPin }
                      ].map((metric, i) => {
                        const Icon = metric.icon;
                        return (
                          <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.15, type: "spring", stiffness: 100 }}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                          >
                            <Icon className="w-5 h-5 text-muted-foreground" />
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs md:text-sm text-muted-foreground truncate">{metric.label}</span>
                                <span className="text-sm md:text-base font-bold">{metric.value}%</span>
                              </div>
                              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${metric.value}%` }}
                                  transition={{ delay: 1.2 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                                  className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                                />
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 500 280">
                      <motion.path
                        d="M130,140 C180,140 200,80 280,80"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                      />
                      <motion.path
                        d="M130,140 C180,140 200,130 280,130"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.6, duration: 1 }}
                      />
                      <motion.path
                        d="M130,140 C180,140 200,180 280,180"
                        fill="none"
                        stroke="url(#gradient3)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.7, duration: 1 }}
                      />
                      <motion.path
                        d="M130,140 C180,140 200,230 280,230"
                        fill="none"
                        stroke="url(#gradient4)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.8, duration: 1 }}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#22d3d1" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                What is a <span className="text-primary">Digital Twin?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A digital twin is a virtual replica of physical city infrastructure that mirrors real-world conditions in real-time. 
                Unlike static dashboards or maps, it captures the dynamic relationships between urban systems.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="glass-panel rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-rose-400" />
                    </div>
                    Traditional Dashboards
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-1">-</span>
                      <span>Show isolated metrics without connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-1">-</span>
                      <span>Historical data with delayed updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-1">-</span>
                      <span>No simulation or what-if analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 mt-1">-</span>
                      <span>Require technical expertise to interpret</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-panel rounded-2xl p-6 border-primary/30">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    InfraSphere Digital Twin
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Visualizes cause-effect relationships across systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Real-time data integration from IoT and city systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Simulate policies before real-world implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Accessible to officials, planners, and citizens alike</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-6">How Cause and Effect Works</h3>
                <div className="space-y-4">
                  {[
                    { cause: "Increase public transport funding", effect: "Reduced traffic, lower emissions, better mobility score", arrow: "from-cyan-500 to-emerald-500" },
                    { cause: "Add green zones in industrial area", effect: "Lower pollution index, improved air quality, health benefits", arrow: "from-emerald-500 to-green-500" },
                    { cause: "Deploy renewable energy grid", effect: "Reduced energy load, sustainability score increase", arrow: "from-amber-500 to-orange-500" }
                  ].map((item, i) => (
                    <motion.div
                      key={item.cause}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-1 p-3 rounded-lg bg-secondary/50 text-sm">
                          <span className="text-muted-foreground">Policy:</span>
                          <p className="font-medium">{item.cause}</p>
                        </div>
                        <div className={`w-8 h-0.5 bg-gradient-to-r ${item.arrow}`} />
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <div className="flex-1 p-3 rounded-lg bg-primary/10 text-sm border border-primary/20">
                          <span className="text-muted-foreground">Impact:</span>
                          <p className="font-medium text-primary">{item.effect}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Why <span className="text-primary">Governments Need This Now</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The convergence of urbanization, data availability, and climate urgency makes digital twins essential for modern governance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyNowReasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-panel rounded-2xl p-6 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Powerful <span className="text-primary">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to understand, analyze, and optimize urban infrastructure.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group glass-panel rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                <span className="text-primary">Simulation Engine</span> Logic
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Test policies before implementation. Understand exactly how and why changes affect your city.
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
              
              <div className="grid lg:grid-cols-5 gap-6">
                {simulationFlow.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="glass-panel rounded-2xl p-6 h-full">
                      <div className="text-4xl font-bold text-primary/30 mb-3">{step.step}</div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 glass-panel rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Trade-Off Visualization Example</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <h4 className="font-medium text-emerald-400 mb-2">Positive Impact</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Traffic congestion: -25%</li>
                    <li>Air quality: +18%</li>
                    <li>Citizen satisfaction: +12%</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <h4 className="font-medium text-amber-400 mb-2">Trade-Offs</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Initial budget: +$2.5M</li>
                    <li>Implementation time: 8 months</li>
                    <li>Short-term disruption: Moderate</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <h4 className="font-medium text-primary mb-2">Long-Term Outcome</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>ROI timeline: 3 years</li>
                    <li>Sustainability score: +22%</li>
                    <li>Healthcare savings: $1.2M/year</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Users & <span className="text-primary">Role-Based Access</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored experiences for every stakeholder in the urban ecosystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPersonas.map((persona, i) => {
                const Icon = persona.icon;
                return (
                  <motion.div
                    key={persona.role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-panel rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">{persona.role}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{persona.description}</p>
                    <div className="p-3 rounded-lg bg-secondary/50">
                      <span className="text-xs text-muted-foreground">Access Level:</span>
                      <p className="text-sm font-medium">{persona.access}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Implementation <span className="text-primary">Roadmap</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From pilot deployment to national scale. A realistic, phased approach to digital transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementationPhases.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">{phase.phase}</span>
                    <span className="text-xs text-muted-foreground">{phase.duration}</span>
                  </div>
                  <h3 className="font-semibold mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">GovTech Excellence Criteria</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Built for <span className="text-primary">Global Recognition</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                InfraSphere is designed to meet and exceed the evaluation criteria for world-class GovTech solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {govTechAlignment.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.criterion}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-panel rounded-2xl p-6 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{item.criterion}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-12 text-center neon-glow"
            >
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your City?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Start exploring the digital twin and discover insights that drive sustainable urban development. 
                Join the future of predictive, participatory governance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/city-twin">
                  <Button size="lg" className="h-14 px-10 text-lg">
                    Launch City Twin
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-primary/30 hover:bg-primary/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-semibold">InfraSphere</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Digital City Twin Platform — Visualize. Simulate. Optimize.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
