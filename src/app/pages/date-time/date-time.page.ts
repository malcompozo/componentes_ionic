import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaDefault: Date = new Date();

  customPickerOptions = {
    buttons: [
      {
        text:'Guardar',
        handler:( event ) => {
          console.log( event );
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ){
    console.log(event);
    console.log( new Date( event.detail.value));
  }

}
