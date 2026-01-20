"use client";

import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  zones, 
  Zone,
  transportNodes,
  energyNodes,
  waterNodes,
  transportLines,
  energyLines,
  waterLines,
  calculateCityMetrics,
} from "@/lib/city-data";
import { 
  Train, 
  Zap, 
  Droplets, 
  X, 
  Users, 
  Wind, 
  Gauge,
  Building2,
  Leaf,
  Factory,
  Store,
  TrendingUp,
  TrendingDown,
  Activity,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const zoneColors: Record<string, string> = {
  residential: "#c084fc",
  commercial: "#22d3d1",
  industrial: "#fbbf24",
  green: "#4ade80"
};

const zoneIcons: Record<string, typeof Building2> = {
  residential: Building2,
  commercial: Store,
  industrial: Factory,
  green: Leaf
};

const MAP_WIDTH = 800;
const MAP_HEIGHT = 600;
const PADDING = 40;

function lngLatToXY(lng: number, lat: number): [number, number] {
  const minLng = -74.05;
  const maxLng = -73.92;
  const minLat = 40.68;
  const maxLat = 40.82;
  
  const x = PADDING + ((lng - minLng) / (maxLng - minLng)) * (MAP_WIDTH - 2 * PADDING);
  const y = PADDING + ((maxLat - lat) / (maxLat - minLat)) * (MAP_HEIGHT - 2 * PADDING);
  
  return [x, y];
}

function coordsToPath(coords: [number, number][]): string {
  return coords.map((c, i) => {
    const [x, y] = lngLatToXY(c[0], c[1]);
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ') + ' Z';
}

function lineToPath(coords: [number, number][]): string {
  return coords.map((c, i) => {
    const [x, y] = lngLatToXY(c[0], c[1]);
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ');
}

export default function CityTwinPage() {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [layers, setLayers] = useState({
    transport: true,
    energy: false,
    water: false
  });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  
  const metrics = calculateCityMetrics(zones);

  const gridLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i <= 10; i++) {
      const x = PADDING + (i / 10) * (MAP_WIDTH - 2 * PADDING);
      const y = PADDING + (i / 10) * (MAP_HEIGHT - 2 * PADDING);
      lines.push(
        <line key={`v-${i}`} x1={x} y1={PADDING} x2={x} y2={MAP_HEIGHT - PADDING} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />,
        <line key={`h-${i}`} x1={PADDING} y1={y} x2={MAP_WIDTH - PADDING} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      );
    }
    return lines;
  }, []);

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 2));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.2, 0.5));
  const handleReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 h-screen flex">
        <div className="w-72 glass-panel border-r border-border p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="mb-2">
            <h2 className="text-lg font-semibold mb-1">Infrastructure Layers</h2>
            <p className="text-xs text-muted-foreground">Toggle visibility of city systems</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <Train className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Transport</p>
                  <p className="text-xs text-muted-foreground">Metro & bus routes</p>
                </div>
              </div>
              <Switch 
                checked={layers.transport}
                onCheckedChange={(checked) => setLayers(prev => ({ ...prev, transport: checked }))}
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Energy</p>
                  <p className="text-xs text-muted-foreground">Power grid network</p>
                </div>
              </div>
              <Switch 
                checked={layers.energy}
                onCheckedChange={(checked) => setLayers(prev => ({ ...prev, energy: checked }))}
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Water</p>
                  <p className="text-xs text-muted-foreground">Supply pipelines</p>
                </div>
              </div>
              <Switch 
                checked={layers.water}
                onCheckedChange={(checked) => setLayers(prev => ({ ...prev, water: checked }))}
              />
            </div>
          </div>

          <div className="mt-4 border-t border-border pt-4">
            <h3 className="text-sm font-semibold mb-3">Zone Legend</h3>
            <div className="space-y-2">
              {Object.entries(zoneColors).map(([type, color]) => {
                const Icon = zoneIcons[type];
                return (
                  <div key={type} className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded" 
                      style={{ backgroundColor: color, opacity: 0.6 }}
                    />
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm capitalize text-muted-foreground">{type}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 border-t border-border pt-4">
            <h3 className="text-sm font-semibold mb-3">Map Controls</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleZoomIn} className="flex-1">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleZoomOut} className="flex-1">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset} className="flex-1">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">Zoom: {Math.round(zoom * 100)}%</p>
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden bg-[#0a0a0f]">
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <svg 
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} 
              className="w-full h-full max-w-4xl max-h-full"
              style={{ filter: 'drop-shadow(0 0 40px rgba(34, 211, 209, 0.1))' }}
            >
              <defs>
                <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f0f1a" />
                  <stop offset="100%" stopColor="#0a0a12" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <rect x="0" y="0" width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#mapBg)" />
              
              {gridLines}

              <rect 
                x={PADDING} 
                y={PADDING} 
                width={MAP_WIDTH - 2 * PADDING} 
                height={MAP_HEIGHT - 2 * PADDING} 
                fill="none" 
                stroke="rgba(34, 211, 209, 0.2)" 
                strokeWidth="2"
                rx="8"
              />

              {zones.map(zone => (
                <motion.path
                  key={zone.id}
                  d={coordsToPath(zone.coordinates)}
                  fill={zoneColors[zone.type]}
                  fillOpacity={hoveredZone === zone.id ? 0.6 : 0.35}
                  stroke={zoneColors[zone.type]}
                  strokeWidth={selectedZone?.id === zone.id ? 3 : 2}
                  strokeOpacity={hoveredZone === zone.id ? 1 : 0.7}
                  style={{ cursor: 'pointer' }}
                  filter={hoveredZone === zone.id ? 'url(#glow)' : undefined}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: zones.indexOf(zone) * 0.1 }}
                  onClick={() => setSelectedZone(zone)}
                  onMouseEnter={() => setHoveredZone(zone.id)}
                  onMouseLeave={() => setHoveredZone(null)}
                />
              ))}

              {zones.map(zone => {
                const [cx, cy] = lngLatToXY(zone.center[0], zone.center[1]);
                return (
                  <motion.text
                    key={`label-${zone.id}`}
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="500"
                    opacity={0.9}
                    style={{ pointerEvents: 'none', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 0.8 }}
                  >
                    {zone.name.split(' ')[0]}
                  </motion.text>
                );
              })}

              {layers.transport && (
                <g>
                  {transportLines.map((line, i) => (
                    <motion.path
                      key={line.id}
                      d={lineToPath(line.coordinates)}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="4"
                      strokeOpacity="0.8"
                      strokeDasharray="8 4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  ))}
                  {transportNodes.map((node, i) => {
                    const [x, y] = lngLatToXY(node.coordinates[0], node.coordinates[1]);
                    return (
                      <motion.g key={node.id} filter="url(#nodeGlow)">
                        <motion.circle
                          cx={x}
                          cy={y}
                          r={8}
                          fill="#fbbf24"
                          stroke="white"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        />
                        <motion.circle
                          cx={x}
                          cy={y}
                          r={12}
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="1"
                          strokeOpacity="0.5"
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 2, repeat: Infinity }}
                        />
                      </motion.g>
                    );
                  })}
                </g>
              )}

              {layers.energy && (
                <g>
                  {energyLines.map((line, i) => (
                    <motion.path
                      key={line.id}
                      d={lineToPath(line.coordinates)}
                      fill="none"
                      stroke="#22d3d1"
                      strokeWidth="3"
                      strokeOpacity="0.8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  ))}
                  {energyNodes.map((node, i) => {
                    const [x, y] = lngLatToXY(node.coordinates[0], node.coordinates[1]);
                    return (
                      <motion.g key={node.id} filter="url(#nodeGlow)">
                        <motion.circle
                          cx={x}
                          cy={y}
                          r={7}
                          fill="#22d3d1"
                          stroke="white"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        />
                        <motion.circle
                          cx={x}
                          cy={y}
                          r={11}
                          fill="none"
                          stroke="#22d3d1"
                          strokeWidth="2"
                          strokeOpacity="0.4"
                          initial={{ scale: 0, opacity: 1 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 1.5, repeat: Infinity }}
                        />
                      </motion.g>
                    );
                  })}
                </g>
              )}

              {layers.water && (
                <g>
                  {waterLines.map((line, i) => (
                    <motion.path
                      key={line.id}
                      d={lineToPath(line.coordinates)}
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="3"
                      strokeOpacity="0.8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  ))}
                  {waterNodes.map((node, i) => {
                    const [x, y] = lngLatToXY(node.coordinates[0], node.coordinates[1]);
                    return (
                      <motion.g key={node.id} filter="url(#nodeGlow)">
                        <motion.circle
                          cx={x}
                          cy={y}
                          r={7}
                          fill="#60a5fa"
                          stroke="white"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        />
                      </motion.g>
                    );
                  })}
                </g>
              )}

              <text x={MAP_WIDTH / 2} y={25} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="14" fontWeight="600">
                INFRASPHERE CITY DIGITAL TWIN
              </text>

              <g transform={`translate(${MAP_WIDTH - 100}, ${MAP_HEIGHT - 30})`}>
                <rect x="0" y="0" width="60" height="6" fill="rgba(255,255,255,0.2)" rx="2" />
                <text x="70" y="5" fill="rgba(255,255,255,0.5)" fontSize="10">1 km</text>
              </g>
            </svg>
          </div>

          <div className="absolute top-4 right-4 glass-panel rounded-lg p-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-3 h-3" />
              <span>Click zones to inspect</span>
            </div>
          </div>
        </div>

        <div className="w-80 glass-panel border-l border-border p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="mb-2">
            <h2 className="text-lg font-semibold mb-1">City Metrics</h2>
            <p className="text-xs text-muted-foreground">Real-time urban indicators</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MetricCard 
              icon={Activity}
              label="Mobility"
              value={metrics.mobilityScore}
              unit="%"
              trend="up"
              color="text-primary"
            />
            <MetricCard 
              icon={Wind}
              label="Air Quality"
              value={100 - metrics.pollutionIndex}
              unit="%"
              trend="down"
              color="text-emerald-400"
            />
            <MetricCard 
              icon={Zap}
              label="Energy Load"
              value={metrics.energyLoad}
              unit="MW"
              trend="neutral"
              color="text-cyan-400"
            />
            <MetricCard 
              icon={Gauge}
              label="Services"
              value={metrics.serviceAccessibility}
              unit="%"
              trend="up"
              color="text-violet-400"
            />
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Sustainability Score</span>
              <span className="text-2xl font-bold text-primary">{metrics.sustainabilityScore}</span>
            </div>
            <Progress value={metrics.sustainabilityScore} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Based on pollution, services & mobility
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Population Overview</h3>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Total Population</span>
                </div>
                <span className="font-semibold">{metrics.populationTotal.toLocaleString()}</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg Traffic Intensity</span>
                <span className="font-semibold">{metrics.trafficAverage}%</span>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-border pt-4">
            <h3 className="text-sm font-semibold mb-3">Active Layers</h3>
            <div className="flex flex-wrap gap-2">
              {layers.transport && (
                <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">Transport</span>
              )}
              {layers.energy && (
                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs">Energy</span>
              )}
              {layers.water && (
                <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">Water</span>
              )}
              {!layers.transport && !layers.energy && !layers.water && (
                <span className="text-xs text-muted-foreground">No layers active</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedZone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-panel rounded-2xl p-6 w-[500px] max-w-[90vw] z-50"
          >
            <button
              onClick={() => setSelectedZone(null)}
              className="absolute top-4 right-4 p-1 rounded-lg hover:bg-secondary"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${zoneColors[selectedZone.type]}33` }}
              >
                {(() => {
                  const Icon = zoneIcons[selectedZone.type];
                  return <Icon className="w-6 h-6" style={{ color: zoneColors[selectedZone.type] }} />;
                })()}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{selectedZone.name}</h3>
                <p className="text-sm text-muted-foreground capitalize">{selectedZone.type} Zone</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <p className="text-2xl font-bold">{selectedZone.population.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Population</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <p className="text-2xl font-bold">{selectedZone.trafficIntensity}%</p>
                <p className="text-xs text-muted-foreground">Traffic</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <p className="text-2xl font-bold">{selectedZone.pollutionIndex}</p>
                <p className="text-xs text-muted-foreground">Pollution</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="flex items-center justify-between p-2 rounded bg-secondary/30">
                <span className="text-xs text-muted-foreground">Service Coverage</span>
                <span className="text-sm font-medium">{selectedZone.serviceCoverage}%</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-secondary/30">
                <span className="text-xs text-muted-foreground">Energy Use</span>
                <span className="text-sm font-medium">{selectedZone.energyConsumption} MW</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MetricCard({ 
  icon: Icon, 
  label, 
  value, 
  unit, 
  trend, 
  color 
}: { 
  icon: typeof Activity;
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'neutral';
  color: string;
}) {
  return (
    <div className="p-3 rounded-xl bg-secondary/50">
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-4 h-4 ${color}`} />
        {trend === 'up' && <TrendingUp className="w-3 h-3 text-emerald-400" />}
        {trend === 'down' && <TrendingDown className="w-3 h-3 text-rose-400" />}
      </div>
      <p className="text-xl font-bold">{value}<span className="text-sm text-muted-foreground">{unit}</span></p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
