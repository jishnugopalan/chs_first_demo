import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bookedworkers',
  templateUrl: './bookedworkers.page.html',
  styleUrls: ['./bookedworkers.page.scss'],
})
export class BookedworkersPage implements OnInit {
details=[]
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.authService.viewmybookedworkers({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.details=res
    })
  }
  chatnow(userid){

    console.log(userid)
    this.authService.chatid=userid
    this.router.navigateByUrl("chat")
  }

}
