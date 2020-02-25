import { Component, OnInit } from '@angular/core';
import { TareasService } from "../services/tareas.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  tareas: any = [];

  constructor(private tareaService: TareasService) {}

  ngOnInit(): void {
    this.tareaService.getTareas().subscribe(
      res => {
        this.tareas = res;
      },
      err => console.log(err)
    )
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.tareaService.getTareas().subscribe(
      res => {
        this.tareas = res;
        event.target.complete();
        console.log('Async operation has ended');
      },
      err => console.log(err)
    )
  }

}
