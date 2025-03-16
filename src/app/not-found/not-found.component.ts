import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuth } from '../store/auth.selector';
import { Observable, tap } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent implements OnInit {
  private store$ = inject(Store);
  public loggedIn:boolean = false;

  ngOnInit(): void {
    this.store$.select(selectAuth).pipe(tap(res => {if(res.status === 'success' && res.token) this.loggedIn = true})).subscribe()
  }
}
