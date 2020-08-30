import { DateService } from './date-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  archives: any[];

  constructor(private service: DateService) { }

  ngOnInit(): void {
    this.archives = this.service.getAll();
  }

}
