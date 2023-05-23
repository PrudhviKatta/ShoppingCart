import { Component, EventEmitter, Output } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.css']
})
export class LogincardComponent {

  constructor(private ts: InteractionService,private router: Router) {
    
  }

  cred:{ [key: string]: string }={prudhvi:"Prudhvi264@"};

  
   uemail:string='';
   upwd:string='';

   sigErrMsg:boolean=false;
   logErrMsg:boolean=false;
   sigSuccMsg:boolean=false;
   
  

  @Output() Logevent=new EventEmitter();
  logStatus:boolean = false;
  data:string='';

  signup():void{
    if(Object.keys(this.cred).includes(this.uemail)){
         this.sigErrMsg=true;
    }
    else{
      this.cred[this.uemail]=this.upwd;
      this.sigSuccMsg=true;
    }
      this.uemail='';
      this.upwd='';

  }
  login()
  {
  if(Object.keys(this.cred).includes(this.uemail) && this.cred[this.uemail]===this.upwd)
  {
     this.logStatus = true;
     this.Logevent.emit(this.logStatus);
     this.ts.logStatus=this.logStatus ;
     this.data='working'
     this.
     router.navigateByUrl('/costco')
  }
  else{
       this.logErrMsg=true;
  }
}

}
