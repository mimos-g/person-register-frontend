import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon, SweetAlertPosition, SweetAlertResult } from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class AlertComponent {

  confirmation(title: string = "Confirmar", text: string = "do you want to continue?"): Promise<SweetAlertResult> {
    return Swal.fire({
      title: title,
      html: text,
      icon: 'warning',
      showLoaderOnConfirm: false,
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
    })
  }



  toast(position: SweetAlertPosition, icon: SweetAlertIcon, title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: position,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: icon,
      title: title
    })
  }




}
