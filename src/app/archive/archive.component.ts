import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  year: number;
  months: number;

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((params) => {
      this.year = +params.get('year');
      this.months = +params.get('months');
    });
  }

  viewAll() {
    this.router.navigate(['/']);
  }
}
