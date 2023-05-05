import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {
  private url = 'https://gorest.co.in/'
  constructor(private http: HttpClient) { }
  onSubmit(addUser: any) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer d0eb813d3b393c338e074a17f627d3377df3514db31869cbf2481cb0290f60b3`,
      'Access-Control-Allow-Origin'
    })
    this.http.post(this.url, addUser, { headers }).subscribe((result) => {
      console.log(result)
      console.warn(addUser)
    })
  }
}
