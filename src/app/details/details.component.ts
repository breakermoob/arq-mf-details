import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public data = [];
  public car;

  constructor(private activatedRouter: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.data = JSON.parse(window.localStorage.getItem('galleryData'));
    this.getRouteData();
  }

  getRouteData() {
    this.activatedRouter.params.subscribe((data) => {
      const keyName = data.keyName;
      this.car = this.data?.find((i) => i.keyName === keyName);
      if (!this.car) this.router.navigateByUrl('/');
    });
  }

}
