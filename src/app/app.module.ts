import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Resta } from '../pages/resta/resta';
import { SelectLevelSuma } from '../pages/suma/select-level-suma/select-level-suma';
import { Suma1 } from '../pages/suma/suma1/suma1';
import { Suma2 } from '../pages/suma/suma2/suma2';
import { Suma3 } from '../pages/suma/suma3/suma3';
import { Suma4 } from '../pages/suma/suma4/suma4';

import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Suma1,
    Suma2,
    Suma3,
    Suma4,
    Resta,
    SelectLevelSuma
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Suma1,
    Suma2,
    Suma3,
    Suma4,
    Resta,
    SelectLevelSuma
  ],
  providers: []
})
export class AppModule {}
