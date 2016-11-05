import { Component } from '@angular/core';

import { NavController, ToastController} from 'ionic-angular';

import { Suma1 } from './../suma1/suma1';



@Component({
  selector: 'page-suma2',
  templateUrl: 'suma2.html'
})
export class Suma2 extends Suma1{

  numberOne : number;
  numberTwo : number;
  result    : number;
  resultDidac: String;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
    super(navCtrl, toastCtrl);
    this.numberOne = this.getNumberRandom();
    this.numberTwo = this.getNumberRandom();
    this.result = this.add(this.numberOne, this.numberTwo);
    this.numberValidate();
  }

  getNumberRandom(){
    let numberReturn = Math.floor(Math.random() * 100);
    if(numberReturn === 0) numberReturn += 1;
    return numberReturn;
  }

  numberValidate(){
    let validateFirst = (this.numberOne+"").substr(1);
    let validateSecond = (this.numberTwo+"").substr(1);
    let resultValidate = this.add(+validateFirst, +validateSecond);
    if(resultValidate >= 10){
      this.setNumbers();
    }
  }

  setNumbers(){
    this.numberOne = this.getNumberRandom();
    this.numberTwo = this.getNumberRandom();
    this.result = this.numberOne + this.numberTwo;
    this.numberValidate();
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
