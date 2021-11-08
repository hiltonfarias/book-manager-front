import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import * as fromAppActions from '../../../../state/app.actions'
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  form = new FormGroup({
    user: new FormControl(''),
    password: new FormControl()
  });

  user: User = {user: '', password: 0};

  constructor(private store: Store<AppState>) {this.login() }

  login(){
    this.store.dispatch(fromAppActions.doLogin(this.form.value));
  }
}
