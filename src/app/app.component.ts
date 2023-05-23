import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from './interaction.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ts: InteractionService, private router: Router) {
    
  }
  logStatus:boolean = false;
  logevent(status:boolean)
  {
    this.logStatus=status;
  }
  logOut() {
    this.router.navigate(['']);
    this.logStatus=false;
    this.ts.logStatus=this.logStatus;
  }
  
}
