import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Especialidad } from "../models/especialidad.model";

@Injectable({
  providedIn: "root"
})

export class EspecialidadService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) {
    }

    public getEspecialidades(): Observable<Especialidad[]> {
        return this.http.get<Especialidad[]>(this.ApiUrl + 'Especialidad');
    }

    public deleteEspecialidad(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'Especialidad/' + id + "/");
    }

    public putEspecialidad(especialidad:Especialidad): Observable<Especialidad>{
        let body = JSON.stringify(especialidad);
        return this.http.put<Especialidad>(this.ApiUrl + 'Especialidad/' + especialidad.idEspecialidad + "/",body,this.httpOptions);
    }

    public postEspecialidad(especialidad:Especialidad): Observable<Especialidad>{
        let body = JSON.stringify(especialidad);
        return this.http.post<Especialidad>(this.ApiUrl + 'Especialidad/',body,this.httpOptions);
    }

}
