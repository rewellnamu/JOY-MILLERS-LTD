import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from './shared/header/header.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';


@Component({
  selector: 'app-root',
  imports: [RouterModule, FooterComponent, HeaderComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JOY-MILLERS-LTD';
}
