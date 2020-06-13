import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'tabs';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    TabsModule
  ],
  providers: [],
  entryComponents: [TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
