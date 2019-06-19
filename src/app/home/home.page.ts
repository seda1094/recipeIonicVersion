import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewServiceService } from '../new-service.service';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  query: string = "";
  constructor( private router: Router) { }

  ngOnInit() {
  }
  sendSearchQuery(){
    this.router.navigate(['/list',this.query])
 }
}
