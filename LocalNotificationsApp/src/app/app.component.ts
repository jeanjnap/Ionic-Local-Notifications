import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = TabsPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    localNotifications: LocalNotifications,
  ) {

    localStorage.setItem("Page",null);
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();


      localNotifications.on('click', (notification, state) => {
        console.log("funcionou até aqui. ");
        console.log(notification.data.myData);

        var dados = JSON.parse(notification.data.myData);


        if(dados.page == "AboutPage"){
          this.nav.setRoot(AboutPage);
        }
        else{
          this.nav.setRoot(TabsPage);       
        }

      });

      
      
    });
  }
}
