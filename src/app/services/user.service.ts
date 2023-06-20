import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }

  login(user) {

    return this.http.post(this.userUrl + "/login", user);
  }


  signup(user: any, avatar: File) {

    let formData = new FormData(); // nsobbou fel9offa form data bech yhez 2 user wel image 

    //append :injecter dans une cle une valur
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.firstName);
    formData.append("email", user.firstName);
    formData.append("pwd", user.firstName);
    formData.append("img", avatar);

    return this.http.post(this.userUrl + "/signup", formData)


  }
}

