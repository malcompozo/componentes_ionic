import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  alert1(){
    this.presentAlert();
  }
  alert2(){
    this.presentAlertPrompt();
  }
  alert3(){
    this.presentAlertConfirm();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false, //obligar al usuario a usar el boton
      cssClass: 'my-custom-class', // clase personalizada del scss
      header: 'Alert', // titulo
      subHeader: 'Subtitle', // subtitulo
      message: 'This is an alert message.', //cuerpo del alert
      buttons: ['OK'] // boton del alert
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false, //obligar al usuario a usar el boton
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Texto'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Texto pre-llenado'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Parágrafo de múltiples líneas'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01', // restriccion de años minimos
          max: '2018-01-12' // restriccion de años maximos
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
          placeholder: 'Campo numérico (-5 al 10)'
        },
        {
          name: 'name7',
          type: 'number',
          placeholder:'Campo numérico infinito'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data: any /* aqui guardas toda la data */) => {
            console.log(data); /* con esto muestro la data en la consola */
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false, //obligar al usuario a usar el boton
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
