import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-study-center',
  templateUrl: './study-center.component.html',
  styleUrls: ['./study-center.component.scss']
})
export class StudyCenterComponent {

  constructor(private router: Router){}

   signOut(){
    this.router.navigate(['/']);
   }
}
