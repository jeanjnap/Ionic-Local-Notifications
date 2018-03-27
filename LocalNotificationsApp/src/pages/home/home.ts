import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private localNotifications: LocalNotifications,
    private plt: Platform,
    private alertCtrl: AlertController
  ) {

  }

  

}
