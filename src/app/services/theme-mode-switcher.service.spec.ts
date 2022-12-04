import { TestBed } from '@angular/core/testing';

import { ThemeModeSwitcherService } from './theme-mode-switcher.service';

describe('ThemeSwitcherService', () => {
  let service: ThemeModeSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeModeSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
