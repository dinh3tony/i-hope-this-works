import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
constructor(private _http: HttpClient) {
    this.getPrimaries();
}
getPrimaries(){
return this._http.get('/authors');
}
getPrimary(id){
return this._http.get('/author/'+id);
}
addNew(x){
return this._http.post('/author', x)
}

editPrimary(id,editedPrimary){
return this._http.post('/edit/' + id, editedPrimary)
}
deletePrimary(id){
return this._http.delete('/remove/' + id, id)
}
}
