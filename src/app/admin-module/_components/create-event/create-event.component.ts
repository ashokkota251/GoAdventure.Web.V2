import { Component, OnInit, Output } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from 'src/app/_common/loader.component';
import { debug } from 'util';
import { Router } from '@angular/router';
@Component({
  selector: 'ga-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  id: number;
  private sub: any;
  DifficultyLevel: any = [];
  Accommodation: any = []
  EventType: any = [];
  Cities: any = [];
  Event: any = {};
  index: number;
  NewObject: any = {}
  EventDates = [{ FromDate: '', ToDate: '', isDelete: false }]; //Event Dates
  TravelPrice = [{ TravelMode: '', Price: '', MinPrice: '' }];//Travel & Price
  fileToUplocad: File = null;
  imageUrl: string;
  private modalRef: NgbModalRef;

  constructor(private _adminService: AdminService, private modalService: NgbModal,
    private router: Router,) { }

  ngOnInit() {
    this.DifficultyLevel = [
      { key: 'Easy', value: 'Easy' },
      { key: 'Moderate', value: 'Moderate' },
      { key: 'Difficult', value: 'Difficult' }
    ]

    this.Accommodation = [
      { key: 'Homestay', value: 'Homestay' },
      { key: 'Camping', value: 'Camping' }
    ]

    this.Cities = [
      { key: 'Hyderabad', value: 'Hyderabad' },
      { key: 'Bangalore', value: 'Bangalore' },
      { key: 'Pune', value: 'Pune' },
      { key: 'Kerala', value: 'Kerala' },
      { key: 'Chennai', value: 'Chennai' },
      { key: 'Delhi', value: 'Delhi' }
    ];

    this.EventType = [
      { key: 'Go Backpacking', value: 'Go Backpacking' },
      { key: 'Go International', value: 'Go International' },
      { key: 'Go Himalaya', value: 'Go Himalaya' },
      { key: 'Go Weekends', value: 'Go Weekends' },
      { key: 'Go Customise', value: 'Go Customise' }
    ]
  }

  addNewEventDate() {
    this.EventDates.push({ FromDate: '', ToDate: '', isDelete: false });
  }

  addNewTravelPrice() {
    this.TravelPrice.push({ TravelMode: '', Price: '', MinPrice: '' });
  }

  onEventTypeChange(value: string) {
    if (value !== 'Go Weekends')
      this.Event.City = '';
  }

  handleFileInput(file: FileList) {
    this.fileToUplocad = file.item(0);

    var render = new FileReader();
    render.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    render.readAsDataURL(this.fileToUplocad);
    this.modalRef = this.modalService.open(LoaderComponent, { ariaLabelledBy: 'modal-basic-title' });
    this._adminService.addEvent('EmailService/SaveFile', this.fileToUplocad).subscribe((response) => {
      this.Event.TilePhoto = response;
      this.modalRef.close();
    })
  }

  handleFileInput1(file: FileList) {
    this.fileToUplocad = file.item(0);

    var render = new FileReader();
    render.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    render.readAsDataURL(this.fileToUplocad);
    this.modalRef = this.modalService.open(LoaderComponent, { ariaLabelledBy: 'modal-basic-title' });
    this._adminService.addEvent('EmailService/SaveFile', this.fileToUplocad).subscribe((response) => {
      this.Event.CoverPhoto = response;
      this.modalRef.close();
    })
  }

  onSave() {
    this.NewObject = {
      "Event": this.Event,
      "EventDate": this.EventDates,
      "TravelPrice": this.TravelPrice
    }
    this.modalRef = this.modalService.open(LoaderComponent, { ariaLabelledBy: 'modal-basic-title' });
    this._adminService.add('Events/SaveEventDetails', this.NewObject).subscribe((response) => {
      alert('Success');
     this.modalRef.close();
     this.router.navigate(['/event-list']);
    })
  }

  onDateDelete(index: any, value: any) {
    if (value)
      this.EventDates[index].isDelete = false;
    else
      this.EventDates[index].isDelete = true;
  }
}
