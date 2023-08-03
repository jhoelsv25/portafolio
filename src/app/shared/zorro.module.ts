import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
const zorro =[
   NzToolTipModule,
   NzTimelineModule,
   NzImageModule,
   NzBackTopModule

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ...zorro
  ]
})
export class ZorroModule { }
