import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    private localNotifications: LocalNotifications,
    private plt: Platform,
    private alertCtrl: AlertController
  ) {
    this.plt.ready().then((rdy) => {
      this.localNotifications.on('click', (notification, state) => {
        let json = JSON.parse(notification.myData);

        let alert = this.alertCtrl.create({
          title: notification.title,
          subTitle: json.myData
        });
        alert.present();
      });
    });
  }

  scheduleNotification(){
    console.log("clicou na notficação");
    let time = new Date();// = new Date(new Date().getTime() + 1 * 5000);
    time.setFullYear(2018);

    time.setSeconds(time.getSeconds()+10);
    time.setDate(time.getDate());
    time.setMonth(time.getMonth());
    time.setHours(time.getHours());
    time.setMinutes(time.getMinutes());
  
    
    this.localNotifications.schedule({
      id: 1,
      text: "Tempo: "+time,
      at: time,
      sound: this.setSound(),
      data: { myData: '{"title": "Titulo", "body": "corpo da msg", "outher": "outro atributo", "page": "AboutPage"}'}
    });

    /*
    let time2 = new Date();// = new Date(new Date().getTime() + 1 * 5000);
    time2.setFullYear(2018);
    time2.setSeconds(time2.getSeconds()+20);
    
    this.localNotifications.schedule({
      id: 2,
      text: "Tempo: "+time2,
      at: time2,
      sound: this.setSound(),
      data: { myData: '{"title": "Titulo", "body": "corpo da msg", "outher": "outro atributo", "page": "AboutPage"}'}
    });*/

   alert("TEMPO: "+time);//+", Tempo2: "+time2);

  }

  setSound() {
    if (this.plt.is('android')) {
      return 'file://assets/media/ring.wav'
    } else {
      return 'file://assets/media/ring.wav'
    }
  }

}
