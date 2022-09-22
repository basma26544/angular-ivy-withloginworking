import { Component, VERSION } from '@angular/core';
import { HomeComponent } from '/home.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
}
onsubmit(){
  this.router.navigate(['/home.component']) //your router URL need to pass it here
}