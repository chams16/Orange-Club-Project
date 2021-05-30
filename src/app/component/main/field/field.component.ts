import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  p:String="Some quick example text to build on the card title and make up the bulk of the card's content."

  constructor() { }

  ngOnInit(): void {
  }

}
