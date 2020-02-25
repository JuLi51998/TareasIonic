import { Component, OnInit } from '@angular/core';
import { TareasService } from "../services/tareas.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

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
}
