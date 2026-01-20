export interface Zone {
  id: string;
  name: string;
  type: 'residential' | 'commercial' | 'industrial' | 'green';
  coordinates: [number, number][];
  center: [number, number];
  population: number;
  trafficIntensity: number;
  pollutionIndex: number;
  serviceCoverage: number;
  energyConsumption: number;
  waterUsage: number;
}

export interface CityMetrics {
  mobilityScore: number;
  pollutionIndex: number;
  energyLoad: number;
  serviceAccessibility: number;
  sustainabilityScore: number;
  populationTotal: number;
  trafficAverage: number;
}

export interface InfrastructureNode {
  id: string;
  type: 'transport' | 'energy' | 'water';
  subtype: string;
  coordinates: [number, number];
  capacity: number;
  load: number;
}

export interface InfrastructureLine {
  id: string;
  type: 'transport' | 'energy' | 'water';
  coordinates: [number, number][];
  flow: number;
}

export const CITY_CENTER: [number, number] = [-73.985, 40.748];
export const CITY_BOUNDS: [[number, number], [number, number]] = [
  [-74.05, 40.68],
  [-73.92, 40.82]
];

export const zones: Zone[] = [
  {
    id: 'residential-north',
    name: 'North Heights',
    type: 'residential',
    coordinates: [
      [-73.99, 40.78], [-73.96, 40.78], [-73.96, 40.75], [-73.99, 40.75]
    ],
    center: [-73.975, 40.765],
    population: 125000,
    trafficIntensity: 45,
    pollutionIndex: 28,
    serviceCoverage: 85,
    energyConsumption: 450,
    waterUsage: 320
  },
  {
    id: 'residential-east',
    name: 'Eastwood District',
    type: 'residential',
    coordinates: [
      [-73.96, 40.75], [-73.93, 40.75], [-73.93, 40.72], [-73.96, 40.72]
    ],
    center: [-73.945, 40.735],
    population: 98000,
    trafficIntensity: 38,
    pollutionIndex: 22,
    serviceCoverage: 78,
    energyConsumption: 380,
    waterUsage: 280
  },
  {
    id: 'commercial-downtown',
    name: 'Central Business District',
    type: 'commercial',
    coordinates: [
      [-74.01, 40.75], [-73.99, 40.75], [-73.99, 40.72], [-74.01, 40.72]
    ],
    center: [-74.0, 40.735],
    population: 45000,
    trafficIntensity: 92,
    pollutionIndex: 65,
    serviceCoverage: 95,
    energyConsumption: 890,
    waterUsage: 450
  },
  {
    id: 'commercial-midtown',
    name: 'Midtown Square',
    type: 'commercial',
    coordinates: [
      [-73.99, 40.75], [-73.96, 40.75], [-73.96, 40.72], [-73.99, 40.72]
    ],
    center: [-73.975, 40.735],
    population: 52000,
    trafficIntensity: 85,
    pollutionIndex: 58,
    serviceCoverage: 92,
    energyConsumption: 820,
    waterUsage: 410
  },
  {
    id: 'industrial-south',
    name: 'Harbor Industrial Zone',
    type: 'industrial',
    coordinates: [
      [-74.02, 40.72], [-73.98, 40.72], [-73.98, 40.69], [-74.02, 40.69]
    ],
    center: [-74.0, 40.705],
    population: 15000,
    trafficIntensity: 72,
    pollutionIndex: 78,
    serviceCoverage: 65,
    energyConsumption: 1200,
    waterUsage: 850
  },
  {
    id: 'industrial-west',
    name: 'Westport Factories',
    type: 'industrial',
    coordinates: [
      [-74.04, 40.75], [-74.01, 40.75], [-74.01, 40.72], [-74.04, 40.72]
    ],
    center: [-74.025, 40.735],
    population: 12000,
    trafficIntensity: 68,
    pollutionIndex: 72,
    serviceCoverage: 58,
    energyConsumption: 1100,
    waterUsage: 780
  },
  {
    id: 'green-central',
    name: 'Central Park',
    type: 'green',
    coordinates: [
      [-73.98, 40.78], [-73.96, 40.78], [-73.96, 40.75], [-73.98, 40.75]
    ],
    center: [-73.97, 40.765],
    population: 0,
    trafficIntensity: 15,
    pollutionIndex: 8,
    serviceCoverage: 72,
    energyConsumption: 45,
    waterUsage: 120
  },
  {
    id: 'green-river',
    name: 'Riverside Gardens',
    type: 'green',
    coordinates: [
      [-74.04, 40.78], [-74.01, 40.78], [-74.01, 40.75], [-74.04, 40.75]
    ],
    center: [-74.025, 40.765],
    population: 0,
    trafficIntensity: 12,
    pollutionIndex: 5,
    serviceCoverage: 68,
    energyConsumption: 35,
    waterUsage: 95
  }
];

export const transportNodes: InfrastructureNode[] = [
  { id: 'metro-1', type: 'transport', subtype: 'metro-station', coordinates: [-73.99, 40.75], capacity: 50000, load: 35000 },
  { id: 'metro-2', type: 'transport', subtype: 'metro-station', coordinates: [-73.97, 40.73], capacity: 45000, load: 38000 },
  { id: 'metro-3', type: 'transport', subtype: 'metro-station', coordinates: [-74.0, 40.72], capacity: 40000, load: 32000 },
  { id: 'bus-hub-1', type: 'transport', subtype: 'bus-hub', coordinates: [-73.96, 40.76], capacity: 15000, load: 11000 },
  { id: 'bus-hub-2', type: 'transport', subtype: 'bus-hub', coordinates: [-74.01, 40.74], capacity: 12000, load: 9500 },
];

export const energyNodes: InfrastructureNode[] = [
  { id: 'power-1', type: 'energy', subtype: 'power-plant', coordinates: [-74.03, 40.7], capacity: 2000, load: 1650 },
  { id: 'substation-1', type: 'energy', subtype: 'substation', coordinates: [-73.98, 40.74], capacity: 500, load: 420 },
  { id: 'substation-2', type: 'energy', subtype: 'substation', coordinates: [-73.95, 40.76], capacity: 450, load: 380 },
  { id: 'solar-1', type: 'energy', subtype: 'solar-farm', coordinates: [-74.02, 40.77], capacity: 300, load: 180 },
  { id: 'wind-1', type: 'energy', subtype: 'wind-farm', coordinates: [-74.04, 40.79], capacity: 250, load: 150 },
];

export const waterNodes: InfrastructureNode[] = [
  { id: 'treatment-1', type: 'water', subtype: 'treatment-plant', coordinates: [-74.03, 40.69], capacity: 100000, load: 78000 },
  { id: 'reservoir-1', type: 'water', subtype: 'reservoir', coordinates: [-73.94, 40.8], capacity: 500000, load: 320000 },
  { id: 'pump-1', type: 'water', subtype: 'pump-station', coordinates: [-73.97, 40.77], capacity: 30000, load: 24000 },
  { id: 'pump-2', type: 'water', subtype: 'pump-station', coordinates: [-74.0, 40.71], capacity: 35000, load: 28000 },
];

export const transportLines: InfrastructureLine[] = [
  { id: 'metro-line-1', type: 'transport', coordinates: [[-74.02, 40.7], [-73.99, 40.75], [-73.96, 40.78]], flow: 85 },
  { id: 'metro-line-2', type: 'transport', coordinates: [[-74.04, 40.74], [-73.97, 40.73], [-73.93, 40.73]], flow: 72 },
  { id: 'bus-route-1', type: 'transport', coordinates: [[-73.96, 40.76], [-73.98, 40.74], [-74.01, 40.74]], flow: 55 },
];

export const energyLines: InfrastructureLine[] = [
  { id: 'grid-main', type: 'energy', coordinates: [[-74.03, 40.7], [-74.0, 40.73], [-73.98, 40.74]], flow: 82 },
  { id: 'grid-north', type: 'energy', coordinates: [[-73.98, 40.74], [-73.97, 40.77], [-73.95, 40.76]], flow: 68 },
  { id: 'renewable-line', type: 'energy', coordinates: [[-74.04, 40.79], [-74.02, 40.77], [-73.98, 40.74]], flow: 45 },
];

export const waterLines: InfrastructureLine[] = [
  { id: 'main-supply', type: 'water', coordinates: [[-73.94, 40.8], [-73.97, 40.77], [-73.98, 40.74]], flow: 78 },
  { id: 'distribution-1', type: 'water', coordinates: [[-73.98, 40.74], [-74.0, 40.71], [-74.03, 40.69]], flow: 65 },
  { id: 'industrial-supply', type: 'water', coordinates: [[-74.0, 40.71], [-74.02, 40.72], [-74.03, 40.7]], flow: 52 },
];

export function calculateCityMetrics(zoneData: Zone[]): CityMetrics {
  const totalPop = zoneData.reduce((sum, z) => sum + z.population, 0);
  const avgTraffic = zoneData.reduce((sum, z) => sum + z.trafficIntensity, 0) / zoneData.length;
  const avgPollution = zoneData.reduce((sum, z) => sum + z.pollutionIndex, 0) / zoneData.length;
  const avgService = zoneData.reduce((sum, z) => sum + z.serviceCoverage, 0) / zoneData.length;
  const totalEnergy = zoneData.reduce((sum, z) => sum + z.energyConsumption, 0);

  return {
    mobilityScore: Math.round(100 - avgTraffic * 0.6),
    pollutionIndex: Math.round(avgPollution),
    energyLoad: Math.round(totalEnergy / 50),
    serviceAccessibility: Math.round(avgService),
    sustainabilityScore: Math.round((100 - avgPollution) * 0.4 + avgService * 0.3 + (100 - avgTraffic) * 0.3),
    populationTotal: totalPop,
    trafficAverage: Math.round(avgTraffic),
  };
}

export interface SimulationParams {
  publicTransportFunding: number;
  greenZoneExpansion: number;
  privateVehicleReduction: number;
  renewableEnergy: number;
}

export function simulateChanges(
  baseZones: Zone[],
  params: SimulationParams
): { zones: Zone[]; metrics: CityMetrics } {
  const modifiedZones = baseZones.map(zone => {
    let trafficMod = zone.trafficIntensity;
    let pollutionMod = zone.pollutionIndex;
    let energyMod = zone.energyConsumption;
    let serviceMod = zone.serviceCoverage;

    trafficMod *= (1 - params.publicTransportFunding * 0.003);
    trafficMod *= (1 - params.privateVehicleReduction * 0.004);

    pollutionMod *= (1 - params.greenZoneExpansion * 0.004);
    pollutionMod *= (1 - params.renewableEnergy * 0.003);
    pollutionMod *= (1 - params.publicTransportFunding * 0.002);

    energyMod *= (1 - params.renewableEnergy * 0.002);

    serviceMod = Math.min(100, serviceMod * (1 + params.publicTransportFunding * 0.002));

    return {
      ...zone,
      trafficIntensity: Math.max(5, Math.round(trafficMod)),
      pollutionIndex: Math.max(2, Math.round(pollutionMod)),
      energyConsumption: Math.max(20, Math.round(energyMod)),
      serviceCoverage: Math.round(serviceMod),
    };
  });

  return {
    zones: modifiedZones,
    metrics: calculateCityMetrics(modifiedZones),
  };
}
