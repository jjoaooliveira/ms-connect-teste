import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver){};

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }

  });
  }
    
};

