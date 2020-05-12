import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Tarea } from "../models/tarea";
import { Evento } from "../models/evento";

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  API_URI = 'https://api-rest-apptareas.herokuapp.com';

  //API_URI = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }
  
  getTareas() {
    return this.http.get(`${this.API_URI}/tareas`)
  }
  getTarea(id: string) {
    return this.http.get(`${this.API_URI}/tareas/${id}`)
  }
  getEventos() {
    return this.http.get(`${this.API_URI}/eventos`)
  }
  saveTarea(tarea: Tarea){
    return this.http.post(`${this.API_URI}/tareas`, tarea)
  }
  saveEvent(evento: Evento) {
    return this.http.post(`${this.API_URI}/eventos`, evento)
  }
  deleteTarea(id: string) {
    return this.http.delete(`${this.API_URI}/tareas/${id}`)
  }
  updateTarea(id: string, tarea: Tarea) {
    return this.http.put(`${this.API_URI}/tareas/${id}`, tarea)
  }
}
