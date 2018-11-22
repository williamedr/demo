import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { Starship } from '../../models/starship';
import { Film } from '../../models/film';
import { People } from '../../models/people';
import { Specie } from '../../models/specie';
import { Planet } from '../../models/planet';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SwapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwapiProvider {

  starWarsBase = "https://swapi.co/api/";

  endPoints = {
    films: this.starWarsBase + 'films',
    people: this.starWarsBase + 'people',
    planets: this.starWarsBase + 'planets',
    species: this.starWarsBase + 'species',
    starships: this.starWarsBase + 'starships',
    vehicles: this.starWarsBase + 'vehicles'
  };

  constructor(public http: HttpClient) {

  }

  getFilm(id: number): Promise<Film> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.films + '/' + id).subscribe(
        data => {
          resolve(new Film(data));
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getFilms(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.films).subscribe(
        data => {
          let res = {
            count : data['count'],
            next : data['next'],
            data : data['results'].map((film) => new Film(film))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getPeople(id: number): Promise<People> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.people + '/' + id).subscribe(
        data => {
          resolve(new People(data));
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getPeoples(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.people).subscribe(
        data => {
          let res = {
            count : data['count'],
            next : data['next'],
            data : data['results'].map((people) => new People(people))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }


  getPlanet(id: number): Promise<Planet> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.planets + '/' + id).subscribe(
        data => {
          resolve(new Planet(data));
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getPlanets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.planets).subscribe(
        data => {
          let res = {
            count : data['count'],
            next : data['next'],
            data : data['results'].map((planet) => new Specie(planet))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getSpecie(id: number): Promise<Specie> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.species + '/' + id).subscribe(
        data => {
          resolve(new Specie(data));
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getSpecies(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.species).subscribe(
        data => {
          let res = {
            count : data['count'],
            next : data['next'],
            data : data['results'].map((specie) => new Specie(specie))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }



  getStarship(id: number): Promise<Starship> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.starships + '/' + id).subscribe(
        data => {
          resolve(new Starship(data));
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getStarships(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.starships).subscribe(
        data => {
          let res = {
            count : data['count'],
            next : data['next'],
            data : data['results'].map((starship) => new Starship(starship))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getVehicle(id: number): Promise<Vehicle> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.vehicles + '/' + id).subscribe(
        data => {
          resolve(new Vehicle(data));
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getVehicles(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.vehicles).subscribe(
        data => {
          let res = {
            count : data['count'],
            next : data['next'],
            data : data['results'].map((vehicle) => new Vehicle(vehicle))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getBulkRequest(urls: string[]) : Observable<any[]> {
    let reqs = [];

    urls.forEach(element => {
      reqs.push(this.http.get(element));
    });

    return Observable.forkJoin(reqs);
  }

  getUrl(url: string) {
    return this.http.get(url);
  }

}
