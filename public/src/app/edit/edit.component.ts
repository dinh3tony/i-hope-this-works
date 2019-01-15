import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editingObject = {};
  submitted = false;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService:HttpService,
    private _http:HttpClient
  ) { }
  ngOnInit() {
    this.collect(this._route.snapshot.paramMap.get('id'));
  }
  collect(id){
    let observable = this._httpService.getPrimary(id);
    observable.subscribe(data=>{
      this.editingObject = data['data'][0];
      
    })
  }
  onEdit(id){
    let observable = this._httpService.editPrimary(id, this.editingObject);
    observable.subscribe(data=>{
      this.editingObject = data;
      this.collect(id);
      this.submitted = true;
    })
  }
}
