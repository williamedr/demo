import moment from 'moment';

export class Film {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  year: number;
  species: any;
  starships: any;
  vehicles: any;
  peoples: any;
  planets: any;
  url: string;
  created: string;
  edited: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.id = Number(this.url.split('/')[5]);
    this.year = moment(this.release_date).year();
  }
}
