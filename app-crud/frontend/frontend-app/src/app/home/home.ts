import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { Subscription } from 'rxjs';

/**
 * Component for the home page.
 * @component
 * @selector app-home
 * @templateUrl ./home.html
 * @styleUrl ./home.scss
 * @implements OnInit
 * @description This component displays the home page of the application,
 * including responsive design handling and total user count.
 */
@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
    subscription: Subscription | undefined;
    isPhonePortrait = false;
    totalUsers = 0;

    constructor(private responsive: BreakpointObserver, private userService : UserService){};

    ngOnInit(): void {
        this.responsive.observe(Breakpoints.HandsetPortrait)
            .subscribe(result => {
                this.isPhonePortrait = false; 

                if (result.matches) {
                    this.isPhonePortrait = true;
                }
            }
        );

        this.subscription = this.userService.totalUsers
            .subscribe(total => {
                this.totalUsers = total;
            });
        this.userService.refreshTotalUsers();
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    
};

