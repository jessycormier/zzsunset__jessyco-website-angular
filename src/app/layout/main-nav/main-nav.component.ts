import { Component } from '@angular/core';
import { ThemeModeSwitcherService } from 'src/app/services/theme-mode-switcher.service';
import { ThemeMode } from 'src/enums/theme-modes.enum';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  public ThemeMode = ThemeMode;

  constructor(
    public themeSwitcher: ThemeModeSwitcherService
  ) { }

  onToggleThemeClick() {
    this.themeSwitcher.toggleThemeMode();
  }

}
