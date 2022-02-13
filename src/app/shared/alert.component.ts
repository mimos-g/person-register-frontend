import { Injectable } from "@angular/core";
import Swal, { SweetAlertResult } from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class AlertComponent {

  confirmation(title: string = "Confirmar", text: string = "Desejas Continuar"): Promise<SweetAlertResult> {
    return Swal.fire({
      title: title,
      html: text,
      icon: 'warning',
      showLoaderOnConfirm: false,
      // didOpen: () => {
      //   Swal.hideLoading()
      // },
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
    })
  }

}
