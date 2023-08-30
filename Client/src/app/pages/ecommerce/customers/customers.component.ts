import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


  term: any;
  submitted: boolean;
  customersData: any;
  validationform: FormGroup;

  constructor(private modalService: NgbModal, 
    public userService: ApiService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.validationform = this.formBuilder.group({

      name: ['', [Validators.required]],
      tailor_id: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],

      lmbai: ['', [Validators.required]],
      bazu: ['', [Validators.required]],
      teera: ['', [Validators.required]],
      gala: ['', [Validators.required]],
      chhati: ['', [Validators.required]],
      qamar: ['', [Validators.required]],
      ghera: ['', [Validators.required]],
      shalwar: ['', [Validators.required]],
      pancha: ['', [Validators.required]],
      packet_samne: ['', [Validators.required]],
      packet_side: ['', [Validators.required]],
      packet_shalwar: ['', [Validators.required]],

      description: ['', [Validators.required]]

    });

    this._fetchData();
  }

  private _fetchData() {
    this.userService.getUser({}).subscribe((res: any) => {
      console.log(res);
      if(res.data?.length>0&&res.status==200){
        this.customersData= res.data;
      }else{
        this.customersData= [];
      }
    } );
  }
 
  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }
  /**
   * Modal Open
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  deleteUser(item){
    this.userService.deleteMeasurement({_id:item._id}).subscribe((res: any) => {
      console.log(res);
      this._fetchData();
    } );
  }
  editUser(item){

  }
  searchUser(){
    // this.userService.searchUser({}).subscribe((res: any) => {
    //   console.log(res);
    //   this._fetchData();
    // } );
  }
  /**
   * save the contacts data
   */
  saveData() {
    const name = this.validationform.get('name').value;
    const tailor_id = this.validationform.get('tailor_id').value;
    const phone = this.validationform.get('phone').value;
    const address = this.validationform.get('address').value;

    const lmbai = this.validationform.get('lmbai').value;
    const bazu = this.validationform.get('bazu').value;
    const teera = this.validationform.get('teera').value;
    const gala = this.validationform.get('gala').value;
    const chhati = this.validationform.get('chhati').value;
    const qamar = this.validationform.get('qamar').value;
    const ghera = this.validationform.get('ghera').value;
    const shalwar = this.validationform.get('shalwar').value;
    const pancha = this.validationform.get('pancha').value;
    const packet_samne = this.validationform.get('packet_samne').value;
    const packet_side = this.validationform.get('packet_side').value;
    const packet_shalwar = this.validationform.get('packet_shalwar').value;

    const description = this.validationform.get('description').value;

    if (this.validationform.valid) {

      const newObect={
        name: name,
        tailor_id: tailor_id,
        phone: phone,
        address: address,
        lmbai: lmbai,
        bazu: bazu,
        teera: teera,
        gala: gala,
        chhati: chhati,
        qamar: qamar,
        ghera: ghera,
        shalwar: shalwar,
        pancha: pancha,
        packet_samne: packet_samne,
        packet_side: packet_side,
        packet_shalwar: packet_shalwar,
        description: description
      }

      this.userService.addUser(newObect).subscribe((res: any) => {
        console.log(res);

        this._fetchData();

      } );

      this.validationform = this.formBuilder.group({
      name: '',
      tailor_id: '',
      phone: '',
      address: '',

      lmbai: '',
      bazu: '',
      teera: '',
      gala: '',
      chhati: '',
      qamar: '',
      ghera: '',
      shalwar: '',
      pancha: '',
      packet_samne: '',
      packet_side: '',
      packet_shalwar: '',

      description: ''
      });

      this.modalService.dismissAll();
    }
    this.submitted = true;
  }

}
