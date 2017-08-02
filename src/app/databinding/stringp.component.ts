import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringp',
  templateUrl: './stringp.component.html',
  styleUrls: ['./stringp.component.css']
})
export class StringpComponent implements OnInit {

 example :String="This is string interpollation"
  constructor() { }

  ngOnInit() {
  }

}
