import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  acImages: string[]=[
    "../../../assets/images/AC/BLUE STAR/AIR-CONDITINOR/FS 312  318 ZATU.png",
    "../../../assets/images/AC/BLUE STAR/AIR-CONDITINOR/FS 312 318 AATX  AATU.png",
    "../../../assets/images/AC/BLUE STAR/AIR-CONDITINOR/IC 312 318 512 518 QATU.png",
    "../../../assets/images/AC/BLUE STAR/AIR-CONDITINOR/IC 312 318 512 518 RBTU.png",
    "../../../assets/images/AC/BLUE STAR/AIR-CONDITINOR/IC 312 318 512 518 XATU.png",
    "../../../assets/images/AC/BLUE STAR/AIR-CONDITINOR/IC 324 YATU.png"
   
  ]

}
