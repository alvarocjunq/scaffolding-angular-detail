import { Component, OnInit } from '@angular/core';
import { ScaffoldingDetailService } from './scaffolding-detail.service';
import { Details, Detail } from './.models/detail';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-scaffolding-detail',
  templateUrl: './scaffolding-detail.component.html',
  styleUrls: ['./scaffolding-detail.component.scss'],
})
export class ScaffoldingDetailComponent implements OnInit {

  details: Details = [];

  constructor(private router: Router, private detailService: ScaffoldingDetailService) { }

  ngOnInit() {
    const project = this.detailService.project;
    Object.keys(project).map((key: string) => {
      this.details.push(new Detail(key, project[key]));
    });
  }

  home(e: Event) {
    e.stopPropagation();
    this.router.navigate(['/home']);
  }
}
