"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import {
  zones,
  calculateCityMetrics,
  simulateChanges,
  SimulationParams,
  CityMetrics
} from "@/lib/city-data";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Train,
  TreePine,
  Car,
  Sun,
  RefreshCcw,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Activity,
  Wind,
  Zap,
  Gauge
} from "lucide-react";

const baseMetrics = calculateCityMetrics(zones);

export default function SimulationPage() {
  const [params, setParams] = useState<SimulationParams>({
    publicTransportFunding: 0,
    greenZoneExpansion: 0,
    privateVehicleReduction: 0,
    renewableEnergy: 0
  });
  const [simulatedMetrics, setSimulatedMetrics] = useState<CityMetrics>(baseMetrics);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    const result = simulateChanges(zones, params);
    setSimulatedMetrics(result.metrics);
  }, [params]);

  const handleReset = () => {
    setParams({
      publicTransportFunding: 0,
      greenZoneExpansion: 0,
      privateVehicleReduction: 0,
      renewableEnergy: 0
    });
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 1500);
  };

  const getChangeIndicator = (before: number, after: number, inverse = false) => {
    const diff = after - before;
    const improved = inverse ? diff < 0 : diff > 0;
    if (Math.abs(diff) < 1) return { icon: Minus, color: "text-muted-foreground", text: "0" };
    return {
      icon: improved ? TrendingUp : TrendingDown,
      color: improved ? "text-emerald-400" : "text-rose-400",
      text: `${diff > 0 ? "+" : ""}${diff.toFixed(0)}`
    };
  };

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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Policy Simulation Engine</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Design Your <span className="text-primary">City&apos;s Future</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adjust policy parameters and watch how they impact city-wide metrics in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Policy Controls</h2>

            <div className="space-y-8">
              <PolicySlider
                icon={Train}
                label="Public Transport Funding"
                description="Increase metro & bus coverage"
                value={params.publicTransportFunding}
                onChange={(v) => setParams(prev => ({ ...prev, publicTransportFunding: v }))}
                color="text-yellow-400"
                bgColor="bg-yellow-500/20"
              />

              <PolicySlider
                icon={TreePine}
                label="Green Zone Expansion"
                description="Add parks & green corridors"
                value={params.greenZoneExpansion}
                onChange={(v) => setParams(prev => ({ ...prev, greenZoneExpansion: v }))}
                color="text-emerald-400"
                bgColor="bg-emerald-500/20"
              />

              <PolicySlider
                icon={Car}
                label="Private Vehicle Reduction"
                description="Incentivize car-free zones"
                value={params.privateVehicleReduction}
                onChange={(v) => setParams(prev => ({ ...prev, privateVehicleReduction: v }))}
                color="text-rose-400"
                bgColor="bg-rose-500/20"
              />

              <PolicySlider
                icon={Sun}
                label="Renewable Energy"
                description="Solar & wind power adoption"
                value={params.renewableEnergy}
                onChange={(v) => setParams(prev => ({ ...prev, renewableEnergy: v }))}
                color="text-cyan-400"
                bgColor="bg-cyan-500/20"
              />
            </div>

            <div className="flex gap-3 mt-8">
              <Button
                variant="outline"
                onClick={handleReset}
                className="flex-1"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button
                onClick={handleSimulate}
                className="flex-1 neon-glow"
                disabled={isSimulating}
              >
                {isSimulating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Simulating...
                  </>
                ) : (
                  <>
                    Run Simulation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">Impact Analysis</h2>

              <div className="grid grid-cols-2 gap-4">
                <MetricComparison
                  icon={Activity}
                  label="Mobility Score"
                  before={baseMetrics.mobilityScore}
                  after={simulatedMetrics.mobilityScore}
                  unit="%"
                  color="text-primary"
                />
                <MetricComparison
                  icon={Wind}
                  label="Air Quality"
                  before={100 - baseMetrics.pollutionIndex}
                  after={100 - simulatedMetrics.pollutionIndex}
                  unit="%"
                  color="text-emerald-400"
                />
                <MetricComparison
                  icon={Zap}
                  label="Energy Load"
                  before={baseMetrics.energyLoad}
                  after={simulatedMetrics.energyLoad}
                  unit="MW"
                  color="text-cyan-400"
                  inverse
                />
                <MetricComparison
                  icon={Gauge}
                  label="Service Access"
                  before={baseMetrics.serviceAccessibility}
                  after={simulatedMetrics.serviceAccessibility}
                  unit="%"
                  color="text-violet-400"
                />
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Sustainability Score</h3>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-sm">{baseMetrics.sustainabilityScore}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <motion.span
                    key={simulatedMetrics.sustainabilityScore}
                    initial={{ scale: 1.2, color: "var(--primary)" }}
                    animate={{ scale: 1, color: "var(--foreground)" }}
                    className="text-2xl font-bold"
                  >
                    {simulatedMetrics.sustainabilityScore}
                  </motion.span>
                </div>
              </div>
              <Progress 
                value={simulatedMetrics.sustainabilityScore} 
                className="h-4" 
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Critical (0-30)</span>
                <span>Moderate (30-60)</span>
                <span>Sustainable (60-100)</span>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Simulation Insights</h3>
              <div className="space-y-3">
                {params.publicTransportFunding > 30 && (
                  <InsightItem
                    type="positive"
                    text="Increased public transport funding significantly reduces traffic congestion and improves mobility."
                  />
                )}
                {params.greenZoneExpansion > 40 && (
                  <InsightItem
                    type="positive"
                    text="Green zone expansion shows strong correlation with improved air quality metrics."
                  />
                )}
                {params.renewableEnergy > 50 && (
                  <InsightItem
                    type="positive"
                    text="Renewable energy adoption reduces energy load and contributes to sustainability goals."
                  />
                )}
                {params.privateVehicleReduction > 25 && (
                  <InsightItem
                    type="info"
                    text="Vehicle reduction policies work best when combined with public transport improvements."
                  />
                )}
                {Object.values(params).every(v => v === 0) && (
                  <InsightItem
                    type="info"
                    text="Adjust the policy sliders to see how changes impact city metrics."
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function PolicySlider({
  icon: Icon,
  label,
  description,
  value,
  onChange,
  color,
  bgColor
}: {
  icon: typeof Train;
  label: string;
  description: string;
  value: number;
  onChange: (v: number) => void;
  color: string;
  bgColor: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
          <div>
            <p className="font-medium">{label}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
        <span className="text-lg font-semibold tabular-nums">{value}%</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        max={100}
        step={5}
        className="cursor-pointer"
      />
    </div>
  );
}

function MetricComparison({
  icon: Icon,
  label,
  before,
  after,
  unit,
  color,
  inverse = false
}: {
  icon: typeof Activity;
  label: string;
  before: number;
  after: number;
  unit: string;
  color: string;
  inverse?: boolean;
}) {
  const diff = after - before;
  const improved = inverse ? diff < 0 : diff > 0;
  const TrendIcon = Math.abs(diff) < 1 ? Minus : improved ? TrendingUp : TrendingDown;
  const trendColor = Math.abs(diff) < 1 ? "text-muted-foreground" : improved ? "text-emerald-400" : "text-rose-400";

  return (
    <div className="p-4 rounded-xl bg-secondary/50">
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-5 h-5 ${color}`} />
        <TrendIcon className={`w-4 h-4 ${trendColor}`} />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <motion.p
            key={after}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold"
          >
            {after}{unit}
          </motion.p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
        <span className={`text-sm font-medium ${trendColor}`}>
          {diff > 0 ? "+" : ""}{diff.toFixed(0)}{unit}
        </span>
      </div>
    </div>
  );
}

function InsightItem({ type, text }: { type: "positive" | "negative" | "info"; text: string }) {
  const colors = {
    positive: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    negative: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    info: "bg-primary/10 border-primary/30 text-primary"
  };

  return (
    <div className={`p-3 rounded-lg border ${colors[type]}`}>
      <p className="text-sm">{text}</p>
    </div>
  );
}
