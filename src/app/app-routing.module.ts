import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestbuyComponent } from './material/bestbuy/bestbuy.component';
import { CostcoComponent } from './material/costco/costco.component';
import { LogincardComponent } from './material/logincard/logincard.component';
import { SamsclubComponent } from './material/samsclub/samsclub.component';
import { WalmartComponent} from './material/walmart/walmart.component';
import { KrogerComponent } from './material/kroger/kroger.component';
import { HomeComponent } from './material/home/home.component';
import { InteractionService } from './interaction.service';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [{path:'logincard',component:LogincardComponent},{path:'bestbuy',component:BestbuyComponent,canActivate:[InteractionService]},{path:'costco',component:CostcoComponent,canActivate:[InteractionService]},
{path:'kroger',component:KrogerComponent,canActivate:[InteractionService]},{path:"samsclub",component:SamsclubComponent,canActivate:[InteractionService]},{path:'walmart',component:WalmartComponent,canActivate:[InteractionService]},
{path:'home',component:HomeComponent,canActivate:[InteractionService]},{path:'container',component:ContainerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
