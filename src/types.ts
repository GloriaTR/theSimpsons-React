export interface SimpsonStructure {
  id: string;
  name: string;
  background: string;
  image: string;
  gender: string;
  status: string;
  occupation: string;
}

export interface SimpsonsContextStructure {
  simpsons: SimpsonStructure[];
  totalSimpsons: number;
  loadSimpsons: (params: { skip: number; limit: number }) => Promise<void>;
}

export interface SimpsonApi extends Omit<SimpsonStructure, "id"> {
  _id: string;
}

export interface SimpsonsApi {
  simpsons: SimpsonApi[];
}
