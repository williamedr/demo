
export class People {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: any;
  films: any;
  species: any;
  starships: any;
  vehicles: any;
  url: string;
  created: string;
  edited: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.id = Number(this.url.split('/')[5]);
  }
}
