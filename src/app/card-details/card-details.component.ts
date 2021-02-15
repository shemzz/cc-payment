import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  currentCardBackground: number = Math.floor(Math.random()* 25 + 1); // just for fun :D
  cardName: String = "";
  getCardType: string= "visa";
  minCardYear: any = new Date().getFullYear();
  cardNumberTemp: number = 0;
  isCardFlipped: boolean = false;
  cardNumber: number = 1000;
  cardMonth: number = 9;
  cardYear: number = 1990;
  cardCvv: number = 123;

  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
