
export class Vehicle {
  id: number;
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
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
