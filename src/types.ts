import { DomainTuple } from 'victory';

export interface Measure {
  time: number;
  value: number;
}

export type Domain = [number, number];

export type AxisDomain = { x: DomainTuple; y: DomainTuple };

export interface InteractiveGraphic {
  domain: Domain;
  data: Measure[];
  handleZoom: (domain: AxisDomain) => void;
}
