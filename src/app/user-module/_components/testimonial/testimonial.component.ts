import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ga-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  providers: [NgbCarouselConfig],
})
export class TestimonialComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
