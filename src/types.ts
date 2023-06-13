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

export interface MeasuresState {
  measures: Measure[];
  domain: Domain;
  loading: boolean;
}

export interface MeasuresContextProps {
  state: MeasuresState;
  dispatch: React.Dispatch<MeasuresAction>;
}

export enum MeasuresActionTypes {
  SET_MEASURES = 'SET_MEASURES',
  SET_DOMAIN = 'SET_DOMAIN',
  SET_LOADING = 'SET_LOADING',
}
export type MeasureActionType = MeasuresActionTypes | `${MeasuresActionTypes}`;
export interface SetMeasuresAction {
  type: MeasuresActionTypes.SET_MEASURES;
  payload: Measure[];
}
export interface SetDomainAction {
  type: MeasuresActionTypes.SET_DOMAIN;
  payload: Domain;
}

export interface SetLoadingAction {
  type: MeasuresActionTypes.SET_LOADING;
  payload: boolean;
}

export type MeasuresAction = SetMeasuresAction | SetDomainAction | SetLoadingAction;
