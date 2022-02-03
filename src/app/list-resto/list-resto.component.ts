import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  collection: any = [];
  constructor(private resto: RestoService) {}
  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      this.collection = result;
    });
  }
  deleteResto(item: any) {
    this.collection.splice(item - 1, 1);
    this.resto.deleteResto(item).subscribe((result) => {
      console.log('deleted', result);
    });
  }
}
