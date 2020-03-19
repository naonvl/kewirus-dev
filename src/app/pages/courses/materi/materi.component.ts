import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-materi',
  templateUrl: './materi.component.html',
  styleUrls: ['./materi.component.scss']
})
export class MateriComponent implements OnInit {
  users: { name: string, title: string }[] = [
    { name: 'Materi 1', title: 'Video' },
    { name: 'Materi 2', title: 'Video' },
    { name: 'Materi 3', title: 'Task' },
    { name: 'Materi 4', title: 'Video' },
    { name: 'Materi 5', title: 'Task' },
  ];
  constructor() { }
  onClick() {
    console.log(this.users[0]);
  }
  ngOnInit() {
  }

}
