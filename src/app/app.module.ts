import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { headerComponent } from './header/app.header';
import { TopheaderComponent } from './header/topheader/topheader.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';
import { FilterComponent } from './item-list/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    TopheaderComponent,
    ItemListComponent,
    ItemComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
