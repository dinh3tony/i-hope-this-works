import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor={name:""}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService:HttpService,
    private _http:HttpClient
  ) { }
  ngOnInit() {
  }
  onSubmit(){
    let observable = this._httpService.addNew(this.newAuthor);
    observable.subscribe(data=>{
      console.log(data)
      this._router.navigate([''])
    })
  }

}
