export interface Cafe {
  id: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image: string;
  description?: string;
}
