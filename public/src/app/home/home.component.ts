import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  primaryCollection : [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService:HttpService,
    private _http:HttpClient
  ) { }
  ngOnInit() {
    this.getPrimaryCollection();
  }
  getPrimaryCollection(){
    let observable = this._httpService.getPrimaries();
    observable.subscribe(data => {
    this.primaryCollection = data['data'];
    this.primaryCollection.sort(function(a,b){
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0;
    })
    })
  }
  onButtonDel(id): void {
  let observable = this._httpService.deletePrimary(id);
  observable.subscribe(data => {
  })
  this.getPrimaryCollection();
  }

}
