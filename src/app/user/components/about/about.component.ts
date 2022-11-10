import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 100,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];

}
