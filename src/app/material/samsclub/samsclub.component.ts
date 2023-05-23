import { Component } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-samsclub',
  templateUrl: './samsclub.component.html',
  styleUrls: ['./samsclub.component.css']
})
export class SamsclubComponent {
  constructor(private ins:InteractionService)
  {

  }
  obj:{[key:string]:number}={}
  ngOnInit() {
    this.obj = this.ins.samsclubObj;
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
         this.ins.samsclubObj=this.obj;
       }
}
