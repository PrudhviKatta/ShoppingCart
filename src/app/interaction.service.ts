import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService implements CanActivate {

  constructor() { }

  logStatus:boolean=false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.logStatus;
      
  }
  
  
  costcoObj:{ [key: string]: number }={Shoe:0,Book:0,TennisBat:0,Ball:0,HeadPhones:0,Pillow:0,Comforter:0,Airpods:0,Cables:0,Charger:0,Laptop:0,Mobile:0,SimCard:0,Chair:0,
    Table:0,Chalk:0,Perfume:0,Comb:0,Nutella:0,Cookie:0,Chocolate:0}
  bestbuyObj:{[key:string]:number}={Samsung:0,Apple:0,Xiomi:0,Ball:0,Vivo:0,Oppo:0,OnePlus:0,Google:0,Motorola:0,Redmi:0,Realme:0,Micromax:0,Nokia:0,Nothing:0,
    Nord:0,Chalk:0,HP:0,Lenovo:0,Acer:0,Asus:0,Dell:0}
  walmartObj:{[key:string]:number}={Sony:0,JBL:0,Harman:0,Boat:0,Apple:0,Bose:0,OnePlus:0,Google:0,Motorola:0,Redmi:0,Realme:0,Micromax:0,Nokia:0,Nothing:0,
      Nord:0,Chalk:0,HP:0,Lenovo:0,Acer:0,Asus:0,Dell:0}
  krogerObj:{[key:string]:number}={Tomato:0,Apple:0,Onions:0,Mint:0,Vivo:0,Oppo:0,OnePlus:0,Google:0,Motorola:0,Redmi:0,Realme:0,Micromax:0,Nokia:0,Nothing:0,
        Nord:0,Chalk:0,HP:0,Lenovo:0,Acer:0,Asus:0,Dell:0}
  samsclubObj:{[key:string]:number}={DairyMilk:0,Kitkat:0,LoffyToffy:0,Perk:0,FiveStar:0,MilkyBar:0,Reeses:0,Nougat:0,IceBreakers:0,Maggie:0,Nestle:0,KinderJoy:0,Nokia:0,Nothing:0,
          Nord:0,Chalk:0,HP:0,Lenovo:0,Acer:0,Asus:0,Dell:0}
}
