import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserActionTypes, AddItemAction } from '../store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$: Observable<Array<User>>;
  username: string = '';
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.users$ = this._store.select(store => store.user);

    setTimeout(() => this.addUser(), 1000);
  }

  addUser() {
    this._store.dispatch(new AddItemAction({name: this.username}))
  }

  onAddUser() {
    this.addUser();
  }

}
