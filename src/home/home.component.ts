import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  choix = 1;
  error = 0;
  constructor(){

  }

  ngOnInit(): void {

  }
  paragraphe(){
    if(this.choix==1){
      this.choix = 0
    }
    else{
      this.choix = 1
    }
  }
}
