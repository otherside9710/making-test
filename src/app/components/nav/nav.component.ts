import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public isLogin: boolean;
  public isGoogle: boolean;
  public nameUser: string;
  public emailUser: string;
  public photoUser: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.authService.getAuth()
      .subscribe(auth => {
          if (auth) {
            this.isLogin = true;
            this.nameUser = auth.displayName;
            this.emailUser = auth.email;
            this.photoUser = auth.photoURL;
          } else {
            this.isLogin = false;
          }
        }
      );
  }

  logoutUser() {
    swal({
      title: 'Saliendo...',
      type: 'success',
    });
    this.authService.logout();
  }
}
