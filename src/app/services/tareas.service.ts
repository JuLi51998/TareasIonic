import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Tarea } from "../models/tarea";

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  getTareas() {
    return this.http.get(`${this.API_URI}/tareas`)
  }
  getTarea(id: string) {
    return this.http.get(`${this.API_URI}/tareas/${id}`)
  }
  saveTarea(tarea: Tarea){
    return this.http.post(`${this.API_URI}/tareas`, tarea)
  }
  deleteTarea(id: string) {
    return this.http.delete(`${this.API_URI}/tareasi${id}`)
  }
}
