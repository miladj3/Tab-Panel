import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TabsComponent],
  entryComponents: [TabComponent]
})
export class TabsModule { }
