"use client";

import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import {
  zones,
  calculateCityMetrics
} from "@/lib/city-data";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Target,
  Sparkles,
  BarChart3,
  Activity,
  Leaf,
  Zap,
  Users
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const metrics = calculateCityMetrics(zones);

const historicalData = [
  { month: "Jan", mobility: 62, pollution: 45, energy: 98, services: 72 },
  { month: "Feb", mobility: 64, pollution: 43, energy: 95, services: 74 },
  { month: "Mar", mobility: 65, pollution: 42, energy: 92, services: 76 },
  { month: "Apr", mobility: 68, pollution: 40, energy: 90, services: 78 },
  { month: "May", mobility: 70, pollution: 38, energy: 88, services: 79 },
  { month: "Jun", mobility: metrics.mobilityScore, pollution: metrics.pollutionIndex, energy: metrics.energyLoad, services: metrics.serviceAccessibility },
];

const predictions = [
  { month: "Jul", mobility: 72, pollution: 36, energy: 85, services: 81 },
  { month: "Aug", mobility: 74, pollution: 34, energy: 82, services: 82 },
  { month: "Sep", mobility: 76, pollution: 32, energy: 80, services: 84 },
];

const zonePerformance = zones.map(z => ({
  name: z.name.split(" ")[0],
  score: Math.round((100 - z.pollutionIndex) * 0.4 + z.serviceCoverage * 0.3 + (100 - z.trafficIntensity) * 0.3)
}));

const radarData = [
  { metric: "Mobility", value: metrics.mobilityScore, fullMark: 100 },
  { metric: "Air Quality", value: 100 - metrics.pollutionIndex, fullMark: 100 },
  { metric: "Energy Efficiency", value: Math.round(100 - metrics.energyLoad / 2), fullMark: 100 },
  { metric: "Services", value: metrics.serviceAccessibility, fullMark: 100 },
  { metric: "Sustainability", value: metrics.sustainabilityScore, fullMark: 100 },
];

const riskIndicators = [
  {
    category: "Traffic Congestion",
    level: metrics.trafficAverage > 60 ? "high" : metrics.trafficAverage > 40 ? "medium" : "low",
    value: metrics.trafficAverage,
    trend: "improving"
  },
  {
    category: "Air Pollution",
    level: metrics.pollutionIndex > 50 ? "high" : metrics.pollutionIndex > 30 ? "medium" : "low",
    value: metrics.pollutionIndex,
    trend: "stable"
  },
  {
    category: "Energy Demand",
    level: metrics.energyLoad > 100 ? "high" : metrics.energyLoad > 70 ? "medium" : "low",
    value: metrics.energyLoad,
    trend: "improving"
  },
  {
    category: "Service Coverage",
    level: metrics.serviceAccessibility < 70 ? "high" : metrics.serviceAccessibility < 85 ? "medium" : "low",
    value: metrics.serviceAccessibility,
    trend: "improving"
  }
];

export default function InsightsPage() {
  const allData = [...historicalData, ...predictions];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Analytics</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            City <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trends, predictions, and risk analysis powered by urban intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">City Health Score</h3>
              </div>
              <span className="text-3xl font-bold text-primary">{metrics.sustainabilityScore}</span>
            </div>
            <Progress value={metrics.sustainabilityScore} className="h-3 mb-3" />
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <TrendingUp className="w-4 h-4" />
              <span>+8 from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="font-semibold">AI Prediction</h3>
            </div>
            <p className="text-2xl font-bold mb-2">+12% Improvement</p>
            <p className="text-sm text-muted-foreground">
              Expected sustainability increase by Q3 based on current policy trajectory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-violet-400" />
              <h3 className="font-semibold">Goal Progress</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">2030 Carbon Neutral</span>
                <span className="font-medium">34%</span>
              </div>
              <Progress value={34} className="h-2" />
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-6">Metric Trends & Predictions</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={allData}>
                <defs>
                  <linearGradient id="mobilityGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3d1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22d3d1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="pollutionGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="#888" fontSize={12} />
                <YAxis stroke="#888" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(20,20,30,0.9)", 
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px"
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="mobility" 
                  stroke="#22d3d1" 
                  fill="url(#mobilityGrad)"
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="pollution" 
                  stroke="#f43f5e" 
                  fill="url(#pollutionGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <span className="text-muted-foreground">Mobility Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="text-muted-foreground">Pollution Index</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-6">Performance Radar</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="metric" stroke="#888" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#888" fontSize={10} />
                <Radar
                  name="Current"
                  dataKey="value"
                  stroke="#22d3d1"
                  fill="#22d3d1"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-6">Zone Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={zonePerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" domain={[0, 100]} stroke="#888" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#888" fontSize={11} width={80} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(20,20,30,0.9)", 
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {zonePerformance.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.score > 70 ? "#4ade80" : entry.score > 50 ? "#fbbf24" : "#f43f5e"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-6">Risk Indicators</h3>
            <div className="space-y-4">
              {riskIndicators.map((risk, i) => (
                <div key={risk.category} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    risk.level === "high" ? "bg-rose-500/20" : 
                    risk.level === "medium" ? "bg-amber-500/20" : "bg-emerald-500/20"
                  }`}>
                    {risk.level === "high" ? (
                      <AlertTriangle className="w-5 h-5 text-rose-400" />
                    ) : risk.level === "medium" ? (
                      <AlertTriangle className="w-5 h-5 text-amber-400" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{risk.category}</span>
                      <span className={`text-sm ${
                        risk.level === "high" ? "text-rose-400" : 
                        risk.level === "medium" ? "text-amber-400" : "text-emerald-400"
                      }`}>
                        {risk.value}%
                      </span>
                    </div>
                    <Progress 
                      value={risk.value} 
                      className={`h-2 ${
                        risk.level === "high" ? "[&>div]:bg-rose-400" : 
                        risk.level === "medium" ? "[&>div]:bg-amber-400" : "[&>div]:bg-emerald-400"
                      }`}
                    />
                  </div>
                  {risk.trend === "improving" && <TrendingUp className="w-4 h-4 text-emerald-400" />}
                  {risk.trend === "declining" && <TrendingDown className="w-4 h-4 text-rose-400" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-panel rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold mb-6">AI Recommendations</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <RecommendationCard
              icon={Leaf}
              title="Expand Green Corridors"
              description="Adding 15% more green zones in industrial areas could reduce pollution by 20%."
              impact="High Impact"
              color="emerald"
            />
            <RecommendationCard
              icon={Zap}
              title="Solar Grid Upgrade"
              description="Installing solar panels in commercial districts can offset 30% of peak energy demand."
              impact="Medium Impact"
              color="cyan"
            />
            <RecommendationCard
              icon={Users}
              title="Transit Optimization"
              description="Increasing bus frequency by 25% in residential zones improves mobility score by 12%."
              impact="High Impact"
              color="violet"
            />
          </div>
        </motion.div>
      </main>
    </div>
  );
}

function RecommendationCard({
  icon: Icon,
  title,
  description,
  impact,
  color
}: {
  icon: typeof Leaf;
  title: string;
  description: string;
  impact: string;
  color: "emerald" | "cyan" | "violet";
}) {
  const colors = {
    emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    violet: "bg-violet-500/20 text-violet-400 border-violet-500/30"
  };

  return (
    <div className={`p-4 rounded-xl border ${colors[color]}`}>
      <Icon className="w-6 h-6 mb-3" />
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10">{impact}</span>
    </div>
  );
}
