
export class Specie {
  id: number;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: any;
  films: any;
  url: string;
  created: string;
  edited: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.id = Number(this.url.split('/')[5]);
  }
}
