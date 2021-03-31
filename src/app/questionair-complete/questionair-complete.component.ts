import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getpersonalDetailsObjState } from 'src/core/reducers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questionair-complete',
  templateUrl: './questionair-complete.component.html',
  styleUrls: ['./questionair-complete.component.css']
})
export class QuestionairCompleteComponent implements OnInit {
  basicDetails: any;
  gender: string;

  constructor(private store: Store<{details:any}>,private router:Router) { }

  ngOnInit(): void {
    let data: any = select(getpersonalDetailsObjState);
    this.store.pipe(data).subscribe(async (data: any) => {
      console.log("complete",data);
      this.basicDetails=data;
      if(this.basicDetails.male ===true){
   this.gender ="Male";
      }else if(this.basicDetails.female ===true){
        this.gender ="Female";
      }else{
        this.gender ="Other";
      }
    });
  }

  completeApplication()
  {
    Swal.fire('Congratulations', `Application Submitted Successfully Submitted`, 'success');
  }
  editBasicInformations(basicDetails){
    console.log("edit>>>");
    this.router.navigateByUrl('/personal/'+1)
  
  }
}
