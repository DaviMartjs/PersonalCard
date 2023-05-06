import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

const httpOptions = new HttpHeaders().append('Content-Type', 'application/json').append('Authorization', 'Bearer d0eb813d3b393c338e074a17f627d3377df3514db31869cbf2481cb0290f60b3 ').append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Methods', 'POST')

// const headers = { 'Authorization': 'Bearer d0eb813d3b393c338e074a17f627d3377df3514db31869cbf2481cb0290f60b3'};
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})


export class AddUserComponent {

  private url = 'https://gorest.co.in/public/v2/users'
  constructor(private http: HttpClient) { }

  onSubmit(addUser: any) {
    console.log(addUser)
    return this.http.post(this.url, addUser, { 'headers': httpOptions }).subscribe(data => console.log(data))
  }
}
