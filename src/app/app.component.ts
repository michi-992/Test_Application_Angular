import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { UserComponent } from './components/user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoBoxComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test_Application_Angular';
}
