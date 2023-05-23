import { Component } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private ins:InteractionService)
  {

  }
  costcoObj:{[key:string]:number}=this.ins.costcoObj;
  bestbuyObj:{[key:string]:number}=this.ins.bestbuyObj;
  krogerObj:{[key:string]:number}=this.ins.krogerObj;
  walmartObj:{[key:string]:number}=this.ins.walmartObj;
  samsclubObj:{[key:string]:number}=this.ins.samsclubObj;

}
