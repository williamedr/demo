import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { Starship } from '../../models/starship';
import { Film } from '../../models/film';
import { People } from '../../models/people';
import { Specie } from '../../models/specie';
import { Planet } from '../../models/planet';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

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

 /**
 * Get Film by Id. https://swapi.co/api/films/:id
 *
 * Return Film Object
 */
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

 /**
 * Get Films. https://swapi.co/api/films
 *
 * Return Object { count: number, next: string, data: Film[] }
 *    count: number of elements in array response
 *    next: Url pointing next page from Films Resource
 *    data: Film[]
 */
getFilms(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.films).subscribe(
        data => {
          let res = {
            count: data['count'],
            next: data['next'],
            data: data['results'].map((film) => new Film(film))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }

 /**
 * Get People by Id. https://swapi.co/api/peoples/:id
 *
 * Return People Object
 */
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

 /**
 * Get Peoples. https://swapi.co/api/peoples
 *
 * Return Object { count: number, next: string, data: People[] }
 *    count: number of elements in array response
 *    next: Url pointing next page from Peoples Resource
 *    data: People Array
 */
getPeoples(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.people).subscribe(
        data => {
          let res = {
            count: data['count'],
            next: data['next'],
            data: data['results'].map((people) => new People(people))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }


 /**
 * Get Planet by Id. https://swapi.co/api/planets/:id
 *
 * Return Planet Object
 */
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

 /**
 * Get Planets. https://swapi.co/api/planets
 *
 * Return Object { count: number, next: string, data: Planet[] }
 *    count: number of elements in array response
 *    next: Url pointing next page from Planets Resource
 *    data: Planet Array
 */
getPlanets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.planets).subscribe(
        data => {
          let res = {
            count: data['count'],
            next: data['next'],
            data: data['results'].map((planet) => new Specie(planet))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }

 /**
 * Get Specie by Id. https://swapi.co/api/species/:id
 *
 * Return Specie Object
 */
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

 /**
 * Get Species. https://swapi.co/api/species
 *
 * Return Object { count: number, next: string, data: Specie[] }
 *    count: number of elements in array response
 *    next: Url pointing next page from Species Resource
 *    data: Specie Array
 */
getSpecies(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.species).subscribe(
        data => {
          let res = {
            count: data['count'],
            next: data['next'],
            data: data['results'].map((specie) => new Specie(specie))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }


 /**
 * Get Starship by Id. https://swapi.co/api/starships/:id
 *
 * Return Starship Object
 */
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

 /**
 * Get Starships. https://swapi.co/api/starships
 *
 * Return Object { count: number, next: string, data: Starship[] }
 *    count: number of elements in array response
 *    next: Url pointing next page from Starships Resource
 *    data: Starship Array
 */
getStarships(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.starships).subscribe(
        data => {
          let res = {
            count: data['count'],
            next: data['next'],
            data: data['results'].map((starship) => new Starship(starship))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }

 /**
 * Get Vehicle by Id. https://swapi.co/api/vehicles/:id
 *
 * Return Vehicle Object
 */
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

 /**
 * Get Vehicles. https://swapi.co/api/vehicles
 *
 * Return Object { count: number, next: string, data: Vehicle[] }
 *    count: number of elements in array response
 *    next: Url pointing next page from Vehicles Resource
 *    data: Vehicle[]
 */
getVehicles(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.endPoints.vehicles).subscribe(
        data => {
          let res = {
            count: data['count'],
            next: data['next'],
            data: data['results'].map((vehicle) => new Vehicle(vehicle))
          };

          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }

 /**
 * Make parallels requests to Swapi resources
 * 
 * Parameter:
 *    urls: string[] => Urls Swapi resources array
 *
 * Return Object[] from each Url in urls array
 */
  getBulkRequest(urls: string[]): Observable<any[]> {
    let reqs = [];

    urls.forEach(element => {
      reqs.push(this.http.get(element));
    });

    return Observable.forkJoin(reqs);
  }

 /**
 * Get object response from Url Swapi resource
 * 
 * Parameter:
 *    url: string => Swapi Url resource
 *
 * Return Object from Swapi Url
 */
getUrl(url: string) {
    return this.http.get(url);
  }

}
