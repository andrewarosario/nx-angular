import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ScreenService } from '../screen/screen.service';

@Component({
  selector: 'lib-sidenav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  protected opened = false;
  protected username = 'Danilo';
  protected currentYear = new Date().getFullYear();
  protected screenWidth$ = inject(ScreenService).screenWidth$;
  protected isSmallScreen$ = inject(ScreenService).isSmallScreen$;

  ngOnInit(): void {
    this.setOpenedSidenav();
  }

  setSidenavStatus(isSidenavOpen: boolean): void {
    this.opened = isSidenavOpen;
  }

  onToggleMenuClick(): void {
    this.opened = !this.opened;
  }

  private setOpenedSidenav(): void {
    this.screenWidth$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((width) => {
        if (width <= 1000) {
          this.opened = false;
          return;
        }

        this.opened = true;
      });
  }
}
