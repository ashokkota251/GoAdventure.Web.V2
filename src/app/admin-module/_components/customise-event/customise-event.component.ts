import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customise-event',
  templateUrl: './customise-event.component.html',
  styleUrls: ['./customise-event.component.css']
})
export class CustomiseEventComponent implements OnInit {
  PlanDetails = [{ Title: '' }]; //Event Dates
  constructor() { }

  ngOnInit() {
  }

  addNewPlan() {
    this.PlanDetails.push({ Title: '' });
  }

}
