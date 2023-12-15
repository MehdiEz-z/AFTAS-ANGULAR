import { Component, OnInit } from '@angular/core';
import {LevelListService} from "../level-list/level-list.service";
import {Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-level-add',
  templateUrl: './level-add.component.html',
  styleUrls: ['./level-add.component.scss']
})
export class LevelAddComponent implements OnInit {
  public contentHeader: object;

  public code: number;
  public description = "";
  public points : any;
  constructor(private router: Router, private _levelListService: LevelListService)
  { }

  submit(form) {
    if (form.valid) {
      this._levelListService.addRow({ code: this.code, description: this.description, points: this.points })
          .then((response:any) => {
            // Handle success case
            Swal.fire({
              title: 'Good job!',
              text: response.message,
              icon: 'success',
              customClass: {
                confirmButton: 'btn btn-primary'
              }
            });
            form.reset();
            this.description = '';
            this.points = null;
            this.router.navigate(['/level/list']).then(r => console.log(r));

          })
          .catch((error) => {
            console.log(error.message)
            if (error && error.error && error.error.message) {
              Swal.fire({
                title: 'Error',
                text: error.error.message,
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-primary'
                }
              });

            } else {
              const validationErrors = error.error;
              Object.keys(validationErrors).forEach((key) => {
                const control = form.controls[key];
                console.log(control)
                if (control) {
                  control.setErrors({ serverError: validationErrors[key].join(', ') });
                }
              });
              this.code = form.value['code'];
              this.description = form.value['description'];
              this.points = form.value['points'];
            }
          });
    }
  }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Add New Level',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Level',
            isLink: true,
            link: '/level/list'
          },
          {
            name: 'Add New Level',
            isLink: false
          }
        ]
      }
    };
  }

}
