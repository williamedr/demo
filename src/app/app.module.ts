import { HeaderPage } from './../pages/header/header';
import { HomePage } from './../pages/home/home';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { SwapiProvider } from '../providers/swapi/swapi';

import { TabsPage } from '../pages/tabs/tabs';
import { FilmsPage } from '../pages/films/films';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { StarshipsPage } from '../pages/starships/starships';
import { ActorsPage } from '../pages/actors/actors';
import { ActorModalPage } from '../pages/actor-modal/actor-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilmsPage,
    VehiclesPage,
    StarshipsPage,
    ActorsPage,
    ActorModalPage,
    TabsPage,
    HeaderPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilmsPage,
    VehiclesPage,
    StarshipsPage,
    ActorsPage,
    ActorModalPage,
    TabsPage,
    HeaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwapiProvider
  ]
})
export class AppModule {}
