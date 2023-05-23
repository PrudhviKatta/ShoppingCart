import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-bestbuy',
  templateUrl: './bestbuy.component.html',
  styleUrls: ['./bestbuy.component.css']
})
export class BestbuyComponent implements OnInit{
  constructor(private ins:InteractionService)
  {

  }
  obj:{[key:string]:number}={}
  ngOnInit() {
    this.obj = this.ins.bestbuyObj;
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
         this.ins.bestbuyObj=this.obj;
       }
      

}
