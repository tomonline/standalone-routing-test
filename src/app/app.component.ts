import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'standalone-routing-test';

  ngOnInit(): void {
    this.changeTheme('dark')
  }

  changeTheme(theme:string)
  {
    const body=document.body as HTMLElement
    body.setAttribute('data-bs-theme',theme)
  }
}
