import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BestbuyComponent } from './bestbuy/bestbuy.component';
import { KrogerComponent } from './kroger/kroger.component';
import { WalmartComponent } from './walmart/walmart.component';
import { SamsclubComponent } from './samsclub/samsclub.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

const materialComponents=[MatButtonModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule,
  MatCardModule,MatInputModule,MatGridListModule,MatTabsModule]
@NgModule({
  imports: [
    materialComponents,FormsModule,CommonModule
  ],
  exports:[materialComponents,FormsModule],
  declarations: [
    BestbuyComponent,
    KrogerComponent,
    WalmartComponent,
    SamsclubComponent,
    HomeComponent
  ]
 
})
export class MaterialModule { }
