import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public pass: string;
  public successResponse: 'El Usuario fue guardado correctamente';

  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  addUser() {
    this.authService.registerUser(this.email, this.pass)
      .then((res) => {
        swal('Datos guardados', this.successResponse, 'success');
      }).catch((err) => {
      swal('Error al guardar', err.toString(), 'error');
    });
  }

}
