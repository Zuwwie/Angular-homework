import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  userId: number;
  private unsubscrybe = new Subject();
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUserId();
  }
  ngOnDestroy() {
    this.unsubscrybe.next();
    this.unsubscrybe.complete();
  }

  private getUserId(): void {
    this.activeRoute.params
      .pipe(takeUntil(this.unsubscrybe))
      .subscribe((params) => {
        this.userId = params.userId;
      });
  }
}
