
import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
 
const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  a:any
  phone:any
  uid:any
  userform:any
  profile_pic:any
  name:any
  id:any
  myworkers:any
  workerid:any
  wid:any
  jid:any
  bookingid:any
  chatid:any
 
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          console.log(this.user)
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  viewmybookedworkers(credentials: any) {
    return this.http.post(`${this.url}/api/viewmybookedworkers`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  chatmsg(credentials: any) {
    return this.http.post(`${this.url}/api/chatmsg`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewchat(credentials: any) {
    return this.http.post(`${this.url}/api/viewchat`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewacceptedjobs(credentials: any) {
    return this.http.post(`${this.url}/api/viewacceptedjobs`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  acceptworker(credentials: any) {
    return this.http.post(`${this.url}/api/acceptworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprofile(credentials: any) {
    return this.http.post(`${this.url}/api/viewprofile`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmybookedjobs(credentials: any) {
    return this.http.post(`${this.url}/api/viewmybookedjobs`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmybooking(credentials: any) {
    return this.http.post(`${this.url}/api/viewmybooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  bookworker(credentials: any) {
    return this.http.post(`${this.url}/api/bookworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewlocation(credentials: any) {
    return this.http.post(`${this.url}/api/viewlocation`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmyworkersdetails(credentials: any) {
    return this.http.post(`${this.url}/api/viewmyworkersdetails`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmyworkers(credentials: any) {
    return this.http.post(`${this.url}/api/viewmyworkers`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  viewJob(credentials: any) {
    return this.http.post(`${this.url}/api/viewjob`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
availablestatus(credentials: any) {
    return this.http.post(`${this.url}/api/availablestatus`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateWorker(credentials: any) {
    return this.http.post(`${this.url}/api/updateworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  viewWorkerdetails(credentials: any) {
    return this.http.post(`${this.url}/api/viewworkerdetails`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deleteworkeraccount(credentials: any) {
    return this.http.post(`${this.url}/api/deleteworkeraccount`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  

  viewnotification(credentials: any) {
    return this.http.post(`${this.url}/api/viewnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  notification(credentials: any) {
    return this.http.post(`${this.url}/api/notification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewparticularnotification(credentials: any) {
    return this.http.post(`${this.url}/api/viewparticularnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletenotififcation(credentials: any) {
    return this.http.post(`${this.url}/api/deletenotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatenotification(credentials: any) {
    return this.http.post(`${this.url}/api/updatenotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  countnotification(credentials: any) {
    return this.http.post(`${this.url}/api/countnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  viewWorker(credentials: any) {
    return this.http.post(`${this.url}/api/viewworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewifworker(credentials: any) {
    return this.http.post(`${this.url}/api/viewifworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addworker(credentials) {
    return this.http.post(`${this.url}/api/addworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  viewcategory(credentials) {
    return this.http.post(`${this.url}/api/viewcategory`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addcategory(credentials) {
    return this.http.post(`${this.url}/api/addcategory`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addlocation(credentials) {
    return this.http.post(`${this.url}/api/addlocation`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  //Registration
  checkotp(credentials) {
    return this.http.post(`${this.url}/api/checkotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  createotp(credentials) {
    return this.http.post(`${this.url}/api/createotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  register(credentials) {
    return this.http.post(`${this.url}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  login(credentials) {
    return this.http.post(`${this.url}/api/login`, credentials)
      .pipe(
        tap(res => {
          console.log(res);
         
          this.storage.set(TOKEN_KEY, res['token']);
          this.a=res['token'];
          this.user = this.helper.decodeToken(res['token']);
          console.log(this.user);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    console.log(this.authenticationState.value);
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}