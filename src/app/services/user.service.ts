import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// add "npm install -g json-server" to help
// add "json-server --watch mock-api/data.json"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public createNewUser(dataObj:any) {
    return new Promise((resolve, reject)=> {
      this.http.post('http://localhost:3000/users', dataObj).subscribe(
        (res)=>{
          resolve(res);
        },
        (err)=>{
          reject(err);
        }
      )
    })
  }

  public getUser(email:any) {
    return new Promise((resolve, reject)=>{
      this.http.get('http://localhost:3000/users?email=' + email). subscribe(
        (res)=> {
          resolve(res);
        },
        (err)=> {
          reject(err);
        }
      );
      //the server will send user object that has email = email ex. kwan@gmail.com
    })
  }
}
