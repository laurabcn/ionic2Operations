import { Component } from '@angular/core';

import { NavController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'suma.html'
})

export class Suma1{

  numberOne : number;
  numberTwo : number;
  result    : number;
  resultDidac: String;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
    this.numberOne = this.getNumberRandom();
    this.numberTwo = this.getNumberRandom();
    this.result = this.add(this.numberOne, this.numberTwo);
  }

  getNumberRandom(){
    let numberReturn = Math.floor(Math.random() * 10);
    if(numberReturn === 0) numberReturn += 1;
    return numberReturn;
  }

  setNumbers(){
    this.numberOne = this.getNumberRandom();
    this.numberTwo = this.getNumberRandom();
    this.result = this.numberOne + this.numberTwo;
  }
  checkResult(){

    if(this.resultDidac === this.result.toLocaleString())
    {
      let toast = this.toastCtrl.create({
        message: 'Molt bé, Dídac!!!!',
        duration: 1500,
        position: 'middle'
      });

      toast.present();
      this.setNumbers();
    }else{
      let toast = this.toastCtrl.create({
        message: 'Oh vaya',
        duration: 1500,
        position: 'middle'
      });
      toast.present();
    }

    this.resultDidac = '';
  }
  add(x: number, y: number): number {
      return x + y;
  }
}
