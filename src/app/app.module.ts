import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Suma } from '../pages/suma/suma';
import { Resta } from '../pages/resta/resta';

import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Suma,
    Resta
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Suma,
    Resta
  ],
  providers: []
})
export class AppModule {}
