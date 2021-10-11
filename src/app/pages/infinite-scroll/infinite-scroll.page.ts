import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any = Array(20);

  @ViewChild(IonInfiniteScroll, {static: false}) infinite: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){
    console.log( event );

    /* seteando el tiempo que se desabilite el cargador y agrega 20 nuevos elementos al arreglo */
    setTimeout(() =>{

      if( this.data.length > 50 ){
        this.infinite.complete();
        this.infinite.disabled = true;
        return;
      }
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      /* event.target.complete(); */
      this.infinite.complete();
    },1500);
  }

}
