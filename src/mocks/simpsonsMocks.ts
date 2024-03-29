import { SimpsonApi, SimpsonStructure, SimpsonsApi } from "../types";

export const simpsonIdMock: string = "56fb9f23c733a4fut2810d7r";

export const simpsonsMock: SimpsonStructure[] = [
  {
    id: "56fb9f23c733a4fut2810d7r",
    name: "Marge Simpson",
    background:
      "Marjorie Marge B. Simpson ,  (de soltera Bouvier ; nacida el 19 de marzo  ), es la feliz ama de casa y madre de tiempo completo de la familia Simpson . Con su esposo Homer , tiene tres hijos: Bart , Lisa y Maggie Simpson . Marge es la fuerza moralista en su familia y, a menudo, proporciona una voz fundamental en medio de las payasadas de su familia al tratar de mantener el orden en la casa de los Simpson. Aparte de sus deberes en el hogar, Marge coqueteó brevemente con una serie de carreras que van desde oficial de policía hasta activista contra la violencia.",
    image:
      "https://res.cloudinary.com/dglqojivj/image/upload/v1682559694/simpsons/250px-Marge_Simpson_ivadwr.png",
    gender: "Femenino",
    status: "Vivo",
    occupation: "Ama de casa",
  },
  {
    id: "56fb9f23c733a4fut2810d7s",
    name: "Herb Powell",
    background:
      "Herbert Powell es el medio hermano mayor de Homer Simpson . Nacido ilegítimamente de Abe Simpson y Gaby , fue criado por la familia Powell y creó una inmensa riqueza gracias a su compañía de automóviles.",
    image:
      "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Herbert_Powell_xsndsz.png",
    gender: "Masculino",
    status: "Vivo",
    occupation: "Empresario CEO y presidente de Powell Motor Company",
  },
];

export const simpsonMock: SimpsonStructure = {
  id: "56fb9f23c733a4fut2810d7r",
  name: "Marge Simpson",
  background:
    "Marjorie Marge B. Simpson ,  (de soltera Bouvier ; nacida el 19 de marzo  ), es la feliz ama de casa y madre de tiempo completo de la familia Simpson . Con su esposo Homer , tiene tres hijos: Bart , Lisa y Maggie Simpson . Marge es la fuerza moralista en su familia y, a menudo, proporciona una voz fundamental en medio de las payasadas de su familia al tratar de mantener el orden en la casa de los Simpson. Aparte de sus deberes en el hogar, Marge coqueteó brevemente con una serie de carreras que van desde oficial de policía hasta activista contra la violencia.",
  image:
    "https://res.cloudinary.com/dglqojivj/image/upload/v1682559694/simpsons/250px-Marge_Simpson_ivadwr.png",
  gender: "Femenino",
  status: "Vivo",
  occupation: "Ama de casa",
};

export const simpsonsApiMock: SimpsonsApi = {
  simpsons: [
    {
      _id: "56fb9f23c733a4fut2810d7r",
      name: "Marge Simpson",
      background:
        "Marjorie Marge B. Simpson ,  (de soltera Bouvier ; nacida el 19 de marzo  ), es la feliz ama de casa y madre de tiempo completo de la familia Simpson . Con su esposo Homer , tiene tres hijos: Bart , Lisa y Maggie Simpson . Marge es la fuerza moralista en su familia y, a menudo, proporciona una voz fundamental en medio de las payasadas de su familia al tratar de mantener el orden en la casa de los Simpson. Aparte de sus deberes en el hogar, Marge coqueteó brevemente con una serie de carreras que van desde oficial de policía hasta activista contra la violencia.",
      image:
        "https://res.cloudinary.com/dglqojivj/image/upload/v1682559694/simpsons/250px-Marge_Simpson_ivadwr.png",
      gender: "Femenino",
      status: "Vivo",
      occupation: "Ama de casa",
    },
    {
      _id: "56fb9f23c733a4fut2810d7s",
      name: "Herb Powell",
      background:
        "Herbert Powell es el medio hermano mayor de Homer Simpson . Nacido ilegítimamente de Abe Simpson y Gaby , fue criado por la familia Powell y creó una inmensa riqueza gracias a su compañía de automóviles.",
      image:
        "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Herbert_Powell_xsndsz.png",
      gender: "Masculino",
      status: "Vivo",
      occupation: "Empresario CEO y presidente de Powell Motor Company",
    },
  ],
  totalSimpsons: simpsonsMock.length,
};

export const simpsonApiMock: SimpsonApi = {
  _id: "56fb9f23c733a4fut2810d7r",
  name: "Marge Simpson",
  background:
    "Marjorie Marge B. Simpson ,  (de soltera Bouvier ; nacida el 19 de marzo  ), es la feliz ama de casa y madre de tiempo completo de la familia Simpson . Con su esposo Homer , tiene tres hijos: Bart , Lisa y Maggie Simpson . Marge es la fuerza moralista en su familia y, a menudo, proporciona una voz fundamental en medio de las payasadas de su familia al tratar de mantener el orden en la casa de los Simpson. Aparte de sus deberes en el hogar, Marge coqueteó brevemente con una serie de carreras que van desde oficial de policía hasta activista contra la violencia.",
  image:
    "https://res.cloudinary.com/dglqojivj/image/upload/v1682559694/simpsons/250px-Marge_Simpson_ivadwr.png",
  gender: "Femenino",
  status: "Vivo",
  occupation: "Ama de casa",
};
