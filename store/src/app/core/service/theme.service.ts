import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'sole-raw-theme';
  private readonly themeSubject = new BehaviorSubject<ThemeMode>(this.getInitialTheme());

  readonly theme$ = this.themeSubject.asObservable();

  get currentTheme(): ThemeMode {
    return this.themeSubject.value;
  }

  get isDark(): boolean {
    return this.themeSubject.value === 'dark';
  }

  constructor() {
    this.applyTheme(this.currentTheme);
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.isDark ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: ThemeMode): void {
    this.themeSubject.next(theme);
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors in restricted contexts
    }
    this.applyTheme(theme);
  }

  private getInitialTheme(): ThemeMode {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY) as ThemeMode | null;
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
      if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // Fallback
    }
    return 'light';
  }

  private applyTheme(theme: ThemeMode): void {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const body = document.body;

    root.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark-mode');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark-mode');
    }
  }
}

