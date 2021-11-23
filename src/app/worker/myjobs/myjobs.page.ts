import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.page.html',
  styleUrls: ['./myjobs.page.scss'],
})
export class MyjobsPage implements OnInit {
details=[]
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }
  chatnow(userid){

    console.log(userid)
    this.authService.chatid=userid
    this.router.navigateByUrl("chat")
  }
  ngOnInit() {
    this.authService.viewacceptedjobs({"workerid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.details=res
    })
  }

}
