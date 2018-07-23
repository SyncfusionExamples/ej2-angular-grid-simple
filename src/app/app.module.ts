import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridModule, PageService, SortService, FilterService, GroupService, AggregateService } from '@syncfusion/ej2-ng-grids';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    GridModule
  ],
  providers: [PageService,SortService,FilterService,GroupService,AggregateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
