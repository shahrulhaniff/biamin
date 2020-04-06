import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QlinkPage } from './qlink';

@NgModule({
  declarations: [
    QlinkPage,
  ],
  imports: [
    IonicPageModule.forChild(QlinkPage),
  ],
})
export class QlinkPageModule {}
