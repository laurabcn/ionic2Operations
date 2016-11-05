import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Suma1 } from './../suma1/suma1';
import { Suma2 } from './../suma2/suma2';
import { Suma3 } from './../suma3/suma3';
import { Suma4 } from './../suma4/suma4';

@Component({
  selector: 'page-select-level-suma',
  templateUrl: 'select-level-suma.html'
})
export class SelectLevelSuma {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SelectLevelSuma Page');
  }

  setLevel(level: number) {
    switch(level){
      case 2 : this.navCtrl.push(Suma2); break;
      case 3 : this.navCtrl.push(Suma3); break;
      case 4 : this.navCtrl.push(Suma4); break;
      default : this.navCtrl.push(Suma1); break;

    }

  }

}
