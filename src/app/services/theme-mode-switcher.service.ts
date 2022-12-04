import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { STORAGE_KEY_THEME_MODE } from 'src/configs/storage-keys';
import { ThemeMode } from 'src/enums/theme-modes.enum';

/**
 * A service to help switch theme modes.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeModeSwitcherService {

  public themeMode = new BehaviorSubject<ThemeMode>(this.currentThemeModeOrDefault);


  subs = new Subscription();


  constructor() {

    this.subs.add(this.themeMode.subscribe({
      next: this.setThemeMode
    }));

  }


  public toggleThemeMode() {
    const currentTheme = this.themeMode.value;

    if (currentTheme === ThemeMode.Dark) {
      this.themeMode.next(ThemeMode.Light);
    }

    if (currentTheme === ThemeMode.Light) {
      this.themeMode.next(ThemeMode.Dark);
    }

  }


  get currentThemeModeOrDefault() {
    let currentThemeMode = localStorage.getItem(STORAGE_KEY_THEME_MODE);
    let isThemeModeLight = currentThemeMode === 'light';
    let isThemeModeDark = currentThemeMode === 'dark';
    let hasDefinedThemeMode = (isThemeModeDark || isThemeModeLight);

    if (isThemeModeDark) {
      return ThemeMode.Dark;
    }

    if (isThemeModeLight) {
      return ThemeMode.Light;
    }

    // Condition handled outside of service in index.html "should" never happen.
    if (currentThemeMode === null || !hasDefinedThemeMode) {
      return ThemeMode.Dark;
    }

    return ThemeMode.Dark;

  }


  setThemeMode = (themeMode: ThemeMode) => {
    let htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.classList.remove(ThemeMode.Dark, ThemeMode.Light);
    htmlElement.classList.add(themeMode);

    let bodyElement = document.body;
    bodyElement.classList.remove(ThemeMode.Dark, ThemeMode.Light);
    bodyElement.classList.add(themeMode);

    localStorage.setItem(STORAGE_KEY_THEME_MODE, themeMode);
  }


}
