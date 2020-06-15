import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'tabs';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TRComponent } from './table/tr/tr.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TRComponent
  ],
  imports: [
    BrowserModule,
    TabsModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
