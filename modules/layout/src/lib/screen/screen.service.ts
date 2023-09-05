import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  auditTime,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  public screenWidth$ = new BehaviorSubject(window.innerWidth);

  public isSmallScreen$ = this.screenWidth$.pipe(
    map((width) => width < 1000),
    distinctUntilChanged()
  );

  constructor() {
    this.setScreenWidthChanges();
  }

  private setScreenWidthChanges(): void {
    fromEvent(window, 'resize')
      .pipe(
        map(({ target }) => target as Window),
        map(({ innerWidth }) => innerWidth),
        distinctUntilChanged(),
        auditTime(500)
      )
      .subscribe((width) => {
        this.screenWidth$.next(width);
      });
  }
}
