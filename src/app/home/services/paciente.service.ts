import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly API = 'api/paciente';

  constructor(private httpClient: HttpClient) { }


}
