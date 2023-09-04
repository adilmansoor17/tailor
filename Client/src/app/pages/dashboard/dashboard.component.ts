import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit {

  term: any;
  measurements: any;
  selectedMeasuer: any;
  tableData: { field1: string; field2: string; field3: string; field4: string; field5: string; field6: string; field7: string; field8: string; field9: string; field10: string; field11: string; field12: string; }[];
  constructor(private modalService: NgbModal, public formBuilder: FormBuilder,
    public userService: ApiService) {

  }

  ngOnInit(): void {

    this._fetchData();

  }
 
  private _fetchData() {
    this.selectedMeasuer={};

    this.userService.getMeasurement({}).subscribe((res: any) => {
      console.log(res);
      
      if(res.data?.length>0&&res.status==200){
        this.measurements= res.data;
      }else{
        this.measurements= [];
      }
    } );

  }

  /**
   * Returns form
   */

  deleteMeasurement(item){
    Swal.fire({
      title: 'کیا آپ مطمئن ہیں؟ ',
      // text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'ہاں، اسے ڈیلیٹ کریں'
    }).then(result => {
      if (result.value) {
        this.userService.deleteMeasurement({_id:item._id}).subscribe((res: any) => {
          console.log(res);
          this._fetchData();
        } );
        Swal.fire('ڈیلیٹ!', 'ڈیلیٹ', 'success');
      }
    });


  }

  highlightRow(event: MouseEvent): void {
    const row = event.target as HTMLElement;
    row.classList.toggle('table-row-hover');
  }
    /**
   * Modal Open
   * @param content modal content
   */
    openModal(content: any, measurement: any) {
      this.selectedMeasuer=measurement;
      this.modalService.open(content, { centered: true });
    }
}
