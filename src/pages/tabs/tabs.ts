import { HomePage } from './../home/home';
import { Events, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FilmsPage } from '../films/films';
import { VehiclesPage } from '../vehicles/vehicles';
import { StarshipsPage } from '../starships/starships';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabFilms = FilmsPage;
  tabVehicles = VehiclesPage;
  tabStarships = StarshipsPage;

  constructor(public navCtrl: NavController, public events: Events) {
    events.subscribe('exit', () => {
      this.navCtrl.setRoot(HomePage);
    });
  }
}
