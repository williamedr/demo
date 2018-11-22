
export class Starship {
  id: number;
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: any;
  pilots: any;
  url: string;
  created: string;
  edited: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.id = Number(this.url.split('/')[5]);
  }
}
