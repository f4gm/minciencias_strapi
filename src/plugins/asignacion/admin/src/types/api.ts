import { Feature, MultiPolygon } from "geojson";

export interface ResponseAPI<T> {
  data: T[]
}

export interface RoleAPI {
  id: number;
  name: string;
  code: string;
  description: string;
}

export interface AdminAPI {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export interface LandsPropertiesAPI {
  id: number;
  land: number;
  npn: string;
  property: number;
  recognizer: number;
}

export interface LandsAPI extends LandsPropertiesAPI {
  feature: Feature<MultiPolygon, LandsPropertiesAPI>;
}