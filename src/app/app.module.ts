import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LogincardComponent } from './material/logincard/logincard.component';
import { InteractionService } from './interaction.service';
import { CostcoComponent } from './material/costco/costco.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LogincardComponent,
    CostcoComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
