import { Component } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-walmart',
  templateUrl: './walmart.component.html',
  styleUrls: ['./walmart.component.css']
})
export class WalmartComponent {
  constructor(private ins:InteractionService)
  {

  }
  obj:{[key:string]:number}={}
  ngOnInit() {
    this.obj = this.ins.walmartObj;
  }

    minQuantity:number = 0;
    maxQuantity:number = 10;
   
    
      addInc(key:string): void {
        if(this.obj[key]<this.maxQuantity) {
          this.obj[key]+=1;
        }
      }
        
       
       addDec(key: string): void {
        if (this.obj[key] > this.minQuantity) {
          this.obj[key]-=1;
        }
      }
     
       getValue()
       {
         this.ins.walmartObj=this.obj;
       }
}
