import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'suma.html'
})

export class Suma {

  list: Array<any> = new Array(5);

  constructor(public navCtrl: NavController ) {

    for (var _i = 0; _i < this.list.length; _i++)
    {
      let numberRandom = Math.floor(Math.random() * 10);

      this.list.push(numberRandom);
    }

  }
}
