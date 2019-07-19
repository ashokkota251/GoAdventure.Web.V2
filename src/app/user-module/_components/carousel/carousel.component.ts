import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, useAnimation, state, style, animate, } from '@angular/animations';
import { zoomIn } from 'ng-animate';

@Component({
  selector: 'ga-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig],
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, {
      params: { timing: 3 }
    }))]),

    trigger('scrollAnimation', [transition('* => *', useAnimation(zoomIn, {
      params: { timing: 2 }
    }))])
  ],
})
export class CarouselComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  zoomIn: any;
  state = 'hide'

  images = [
    {
      image: '../../assets/banner-meghalaya.jpg',
      title: 'Explore Meghalaya',
      caption: 'Experience the picturesque 5 day trip to magical Meghalaya, Walk through the Abode of Clouds'
    },
    {
      image: '../../assets/banner-spiti.jpg',
      title: 'Explore Spiti',
      caption: 'Experience the aura of Pristine lakes, World’S highest villages'
    },
    {
      image: '../../assets/banner-leh.jpg',
      title: 'Explore Leh - Ladakh',
      caption: 'Experience the drive through snow crowned mountains'
    }
  ];

  images1 = [
    {
      image: '../../assets/banner-meghalaya.jpg',
      title: 'Explore Meghalaya',
      caption: 'Experience the picturesque 5 day trip to magical Meghalaya, Walk through the Abode of Clouds'
    },
    {
      image: '../../assets/banner-spiti.jpg',
      title: 'Explore Spiti',
      caption: 'Experience the aura of Pristine lakes, World’S highest villages'
    },
    {
      image: '../../assets/banner-leh.jpg',
      title: 'Explore Leh - Ladakh',
      caption: 'Experience the drive through snow crowned mountains'
    },
    {
      image: '../../assets/banner-meghalaya.jpg',
      title: 'Explore Meghalaya',
      caption: 'Experience the picturesque 5 day trip to magical Meghalaya, Walk through the Abode of Clouds'
    },
    {
      image: '../../assets/banner-spiti.jpg',
      title: 'Explore Spiti',
      caption: 'Experience the aura of Pristine lakes, World’S highest villages'
    },
    {
      image: '../../assets/banner-leh.jpg',
      title: 'Explore Leh - Ladakh',
      caption: 'Experience the drive through snow crowned mountains'
    },
    {
      image: '../../assets/banner-meghalaya.jpg',
      title: 'Explore Meghalaya',
      caption: 'Experience the picturesque 5 day trip to magical Meghalaya, Walk through the Abode of Clouds'
    },
    {
      image: '../../assets/banner-spiti.jpg',
      title: 'Explore Spiti',
      caption: 'Experience the aura of Pristine lakes, World’S highest villages'
    },
    {
      image: '../../assets/banner-leh.jpg',
      title: 'Explore Leh - Ladakh',
      caption: 'Experience the drive through snow crowned mountains'
    }

  ];

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }

  }

  ngOnInit() {
  }

  public Submit(text) {
    console.log(text)
  }
}
