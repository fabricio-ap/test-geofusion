export type TMap = {
  data: TData;
  filter: string;
  balance: number;
};

export type TData = {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  revenue: number;
}[];
