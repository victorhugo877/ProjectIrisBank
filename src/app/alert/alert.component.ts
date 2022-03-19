import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppFacade } from '../+state/app.facade';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { boolean } from 'check-types';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alertViewSuccess: boolean=false;
  alertViewError: boolean=false;
  alertViewConf: boolean=false;
  alertViewConfDel: boolean=false;
  constructor(
    readonly appFacade:AppFacade,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.appFacade.alertViewSuccess$.subscribe((data: boolean): void => {
      if (boolean(data)) {
        this.alertViewSuccess = data;
        if(this.alertViewSuccess){
          this.alertWithSuccess();
        }
      }
    });
    this.appFacade.alertViewError$.subscribe((dataError: boolean): void => {
      if (boolean(dataError)) {
        this.alertViewError = dataError;
        if(this.alertViewError){
          this.alertWithError();
        }
      }
    });
    this.appFacade.alertViewConf$.subscribe((dataConf: boolean): void => {
      if (boolean(dataConf)) {
        this.alertViewConf = dataConf;
        if(this.alertViewConf){
          this.confirmBox();
        }
      }
    });
    this.appFacade.alertViewConfDel$.subscribe((dataConfDel: boolean): void => {
      if (boolean(dataConfDel)) {
        this.alertViewConfDel = dataConfDel;
        if(this.alertViewConfDel){
          this.alertWithSuccessDel();
        }
      }
    });
    this.changeDetectorRef.detectChanges();
  }
  alertWithSuccess(){
    Swal.fire('New Task ToDo...', 'Your task was created successfully!', 'success');
    this.appFacade.setAlertViewSuccess(false);
  }

  alertWithError(){
    Swal.fire('An error has occurred...', 'The task must have a name or I do not select type All!', 'error');
    this.appFacade.setAlertViewError(false);
  }

  alertWithSuccessDel(){
    Swal.fire(
          'Deleted!',
          'Your todo has been deleted.',
          'success'
    )
    this.appFacade.setAlertViewConfDel(false);
  }

  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to ToDo remove?',
      text: 'You will not be able to recover this task!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.appFacade.setAlertViewAcc(true);
      }
    })
    this.appFacade.setAlertViewConf(false);
  }
}
