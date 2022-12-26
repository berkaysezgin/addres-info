import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Cities } from 'src/app/features/models/cities';
import { CitiesService } from '../../services/cities.service';
import { Dropdown } from 'primeng/dropdown';
import {DropdownModule} from 'primeng/dropdown';
import { PopUpService } from 'src/app/shared/services/pop-up.service';
import { PopupModel } from 'src/app/shared/models/popupModel';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-address-info-details',
  templateUrl: './address-info-details.component.html',
  styleUrls: ['./address-info-details.component.scss'],
})
export class AddressInfoDetailsComponent implements OnInit {
  addressInfoForm!: FormGroup;
  cities:Cities[];
  selectedCity:Cities;

  items: SelectItem[];
  item:string;

  constructor(
    private formBuilder: FormBuilder,
    private popService: PopUpService,
    private citiesService:CitiesService,
  ) {this.items = [];
    for (let i = 0; i < 10000; i++) {
        this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }}

  ngOnInit(): void {
    this.createAddressInfoForm();
    this.getCities();
    
  }
  getCities() {
    this.citiesService.getList().subscribe((response:Cities[])=>{
      this.cities=response
      console.log(this.cities);
   } );
  }
  createAddressInfoForm(): void {
    this.addressInfoForm = this.formBuilder.group({
      // can be changed
      city: [''],
      town: [''],
      street: [''],
      flatNo: [''],
      addressDescription: [''],
    });
  }

  onAddressInfoSubmit() {

    }
  }

