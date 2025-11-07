import { Component, OnInit, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatSidenavModule,
    MatToolbar,
    RouterOutlet,
    MatIconButton,
    MatTooltip,
    MatIcon,
    MatNavList,
    MatListItem,
    NgClass,
    RouterLink
],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar implements OnInit {
  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }
      });
  }
  
}
