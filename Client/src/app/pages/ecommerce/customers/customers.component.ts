import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

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
      kaff: ['', [Validators.required]],
      modda: ['', [Validators.required]],
      description: ['', [Validators.required]],
      gala2: ['', [Validators.required]],
      ghera2: ['', [Validators.required]],

    });

    this._fetchData();
  }

  backupData(){
    Swal.fire('Backup is in progress...',"Please Wait!" ,'info');

    this.userService.backupData({}).subscribe((res: any) => {
      console.log(res);
      if(res.status==200){
        Swal.fire('Backup', 'Backup Completed', 'success');
      }else{
        Swal.fire('Backup', 'Backup Failed', 'error');
      }
    } );
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
  async openModal(content: any, item?: any) {
    if(item){

      const measure:any = await this.userService.getMeasurement({user_id_ref:item._id}).toPromise();

      this.validationform = this.formBuilder.group({
        name: item.name,
        tailor_id: item.tailor_id,
        phone: item.phone,
        address: item.address,
    
        lmbai: measure.data[0]?.lmbai||'',
        bazu: measure.data[0]?.bazu||'',
        teera: measure.data[0]?.teera||'',
        gala: measure.data[0]?.gala||'',
        chhati: measure.data[0]?.chhati||'',
        qamar: measure.data[0]?.qamar||'',
        ghera: measure.data[0]?.ghera||'',
        shalwar: measure.data[0]?.shalwar||'',
        pancha: measure.data[0]?.pancha||'',
        packet_samne: measure.data[0]?.packet_samne||'',
        packet_side: measure.data[0]?.packet_side||'',
        packet_shalwar: measure.data[0]?.packet_shalwar||'',
        description: measure.data[0]?.description||'',
        kaff: measure.data[0]?.kaff||'',
        modda: measure.data[0]?.modda||'',
        gala2: measure.data[0]?.gala2||'',
        ghera2: measure.data[0]?.ghera2||'',
      });
     this.modalService.open(content, { centered: true });

    }else{
    this.modalService.open(content, { centered: true });

    }

  }


  editUser(item){
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
    const kaff = this.validationform.get('kaff').value;
    const modda = this.validationform.get('modda').value;
    const description = this.validationform.get('description').value;
    const gala2 = this.validationform.get('gala2').value;
    const ghera2 = this.validationform.get('ghera2').value;

    if (this.validationform.valid) {

      const newObect={
        _id:item._id,
        name: name||item.name,
        tailor_id: tailor_id||item.tailor_id,
        phone: phone||item.phone,
        address: address||item.address,
        lmbai: lmbai||item.lmbai,
        bazu: bazu||item.bazu,
        teera: teera||item.teera,
        gala: gala||item.gala,
        chhati: chhati||item.chhati,
        qamar: qamar||item.qamar,
        ghera: ghera||item.ghera,
        shalwar: shalwar||item.shalwar,
        pancha: pancha||item.pancha,
        packet_samne: packet_samne||item.packet_samne,
        packet_side: packet_side||item.packet_side,
        packet_shalwar: packet_shalwar||item.packet_shalwar,
        description: description||item.description,
        kaff: kaff||item.kaff,
        modda: modda||item.modda,
        gala2: gala2||item.gala2,
        ghera2: ghera2||item.ghera2,
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
      kaff: '',
      modda: '',
      description: '',
      gala2: '',
      ghera2: '',
      });

      this.modalService.dismissAll();
    }
    this.submitted = true;
  }

  deleteUser(item) {
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
        this.userService.deleteUser({_id:item._id}).subscribe((res: any) => {
          console.log(res);
          this._fetchData();
        } );
        Swal.fire('ڈیلیٹ!', 'ڈیلیٹ', 'success');
      }
    });
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
    const kaff = this.validationform.get('kaff').value;
    const modda = this.validationform.get('modda').value;
    const description = this.validationform.get('description').value;
    const gala2 = this.validationform.get('gala2').value;
    const ghera2 = this.validationform.get('ghera2').value;

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
        description: description,
        kaff: kaff,
        modda: modda,
        gala2: gala2,
        ghera2: ghera2,
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
      kaff: '',
      modda: '',
      description: '',
      gala2: '',
      ghera2: '',
      });

      this.modalService.dismissAll();
    }
    this.submitted = true;
  }

}
