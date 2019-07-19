import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-video-log',
  templateUrl: './video-log.component.html',
  styleUrls: ['./video-log.component.css']
})
export class VideoLogComponent implements OnInit {
  youtubeVideos: any = [];
  constructor() {
    this.youtubeVideos = [
      {
        'youTubePath': 'https://www.youtube.com/embed/Cpra5XiPXEk',
        'description': 'Benefits of walking barefoot in snow',
        'location': 'Sangal valley',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/awWKy_si6ms',
        'description': 'How To Camp In Snow?',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/opEotTEkfVU',
        'description': 'Roopkund Winter attempt 2019 vlog (Part 01)',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/AVD0DnuWohI',
        'description': 'Roopkund winter trek 2019 vlog (Part 02)',
        'location': 'Sangal valley',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/RjXbv7atmcI',
        'description': 'Trekking in snow 2019 (Roopkund vlog Part 03)',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/L-HnmD4GUjA',
        'description': 'Pangarchulla Winter Trek vlog (Part 01) | December 2018',
        'location': 'Sangal valley',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/IFE7qzEv1ik',
        'description': 'Pangarchulla Winter Trek Vlog (Part II) | December 2018',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/c39kp3Z7Xa0',
        'description': 'Dhak Bahiri Trek enroute Lonavala to Bhimashankar',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/aWYiIuotBtw',
        'description': 'Brahmatal Trek Vlog Part 01 | Winter Trek | GoPro 2018',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/2k1II1epFDw',
        'description': 'A Friend in Need is a Friend Indeed | Brahmatal Trek Vlog Part II',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/HXakTTqGrwE',
        'description': 'Kuari Pass Snow Trek | GoPro 2018 | Winter Himalayan Trek',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/Om3VKfPG6Ks',
        'description': 'Kumara Parvatha Trek | Karnataka | GoPro Tree Climbing 2018',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/28ElSRkfaVk',
        'description': 'Sandhan Valley - Trek to the Valley of Shadows | GoPro India 2018',
        'location': '',
        'color': false
      },

      {
        'youTubePath': 'https://www.youtube.com/embed/z5wMPOEd_os',
        'description': 'White Water Rafting in Rishikesh | GoPro 2018',
        'location': '',
        'color': true
      },

      {
        'youTubePath': 'https://www.youtube.com/embed/8TZmOqFDdpE',
        'description': 'Alang Madan Kulang (AMK) - One of the TOUGHEST treks in Maharashtra |(Part I) | GoPro India 2017',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/PsWgUf2tkhM',
        'description': 'Alang Madan Kulang (AMK) trek PART - 2 | Best Winter trek in Maharashtra | GoPro India',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/ml5pVvppO2Y',
        'description': 'Rajgad Fort to Torna Fort Range Trek Part 01 | GoPro India | Sept 2017',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/vHtC1JfEDVA',
        'description': 'Rajgad Fort to Torna Fort Range Trek | Part - 2 | GoPro India | Sept 2017',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/oCM3nYDQwn0',
        'description': 'Rajgad Fort to Torna Fort Range Trek | Part 03 | GoPro India',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/i99xHA3j9Sk',
        'description': 'Andharban - Trek to the Dark Forest | Best Jungle Trek | GoPro India | Sept 2017',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/if5YmS5J2iI',
        'description': 'Kudremukh Peak - Best Trek in Karnataka | GoPro India',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/M0f37jsvwLg',
        'description': 'Salher and Salota Twin Fort Trek | Nasik, Maharashtra | GoPro India - July 2017',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/Sf2_7cuDkks',
        'description': 'Harishchandragad Fort Trek | GoPro India | July 2017',
        'location': '',
        'color': true
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/A-nvXFE-4X4',
        'description': 'Gandikota - Grand Canyon of India and Belum Caves | GoPro India - July 2017',
        'location': '',
        'color': false
      },
      {
        'youTubePath': 'https://www.youtube.com/embed/qVaPg3UAsss',
        'description': 'Kalsubai Trek - Everest of Maharashtra | 5400ft | June 2017 | GoPro India',
        'location': '',
        'color': false
      }
    ]
  }

  ngOnInit() {
  }

}
