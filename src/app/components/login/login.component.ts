import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public pass: string;
  public response;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  loginUser() {
    this.authService.loginEmail(this.email.toString(), this.pass)
      .then((res) => {
        swal('Bienvenido', 'Programe sus tareas: ' + ' ' + res['user']['email'], 'success');
        this.router.navigate(['/task']);
      }).catch((err) => {
      swal('Login invalido', err.toString(), 'error');
      this.router.navigate(['/login']);
    });
  }

}
