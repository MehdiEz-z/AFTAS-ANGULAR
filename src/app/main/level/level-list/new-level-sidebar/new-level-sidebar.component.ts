import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '../../../../../@core/components/core-sidebar/core-sidebar.service';
import {LevelListService} from "../level-list.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-level-sidebar',
  templateUrl: './new-level-sidebar.component.html'
})
export class NewLevelSidebarComponent implements OnInit {
  public code;
  public description;
  public points;
  constructor(
      private _coreSidebarService: CoreSidebarService,
      private _levelListService: LevelListService
  ) { }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  submit(form) {
    if (form.valid) {
      this.toggleSidebar('new-level-sidebar');
      this._levelListService.addRow({code: this.code, description: this.description, points: this.points})
          .then((response : any) => {
            Swal.fire({
              title: 'Good job!',
              text: response.message,
              icon: 'success',
              customClass: {
                confirmButton: 'btn btn-primary'
              }
            });
          })
          .catch((error) => {
            if (error && error.status && error.error && error.error.message) {
              Swal.fire({
                title: 'ERROR',
                text: error.error.message,
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-primary'
                }
              });
            } else {
              Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong!',
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-primary'
                }
              });
            }
          });
    }
  }
  ngOnInit(): void {
  }

}
