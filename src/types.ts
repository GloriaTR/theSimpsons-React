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
}
