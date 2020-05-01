import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  item: any = {
    toString() {
      return this.id;
    },
  };
  userId: number;
  List: Array<any>;
  private unsubscrybe = new Subject();
  constructor(private activeRoute: ActivatedRoute, private user: UserService) {}

  ngOnInit(): void {
    this.getUserId();
    this.getUser(this.userId);
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
        // console.log(this.userId);
      });
  }
  private getUser(userId: number): void {
    this.user.getUser(userId).subscribe(
      (data) => {
        this.List = data;
        this.item = Object.assign({}, this.List);
        // console.log(this.item);
      },
      (error) => {}
    );
  }
}
