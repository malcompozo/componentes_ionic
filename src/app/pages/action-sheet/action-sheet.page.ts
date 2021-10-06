import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Action Sheet',
      backdropDismiss: false, /* esta linea bloquea que se cierre si tocamos afuera */
      cssClass: 'amarillo', /* cambio de color en el fichero global.scss */
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        handler: () => {
          console.log('Delete clicked'); /* aqui podemos llamar un metodo personalizado */
        }
      }, {
        text: 'Share',
        icon: 'share-outline',
        handler: () => {
          console.log('Share clicked'); /* aqui podemos llamar un metodo personalizado */
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        handler: () => {
          console.log('Play clicked'); /* aqui podemos llamar un metodo personalizado */
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked'); /* aqui podemos llamar un metodo personalizado */
        }
      }, {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked'); /* aqui podemos llamar un metodo personalizado */
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}

