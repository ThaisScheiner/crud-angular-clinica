import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  onAddMedico(){
    this.router.navigate(['medico'], {relativeTo: this.route});
  }

  onAddPaciente(){
    this.router.navigate(['paciente'], {relativeTo: this.route});
  }

  onAddInicial(){
    this.router.navigate(['inicial'], {relativeTo: this.route});
  }
}
