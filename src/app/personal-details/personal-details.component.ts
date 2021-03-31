import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { LoadPersonalDetailObj } from 'src/core/actions/personalDetails.action';
import { getpersonalDetailsObjState } from 'src/core/reducers';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetailForm: FormGroup;
  countries = [
    "United States",
    "Canada",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and/or Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia"]

  nationalities = ["Algerian",
    "Algerian",
    "American",
    "Andorran",
    "Angolan",
    "Antiguans",
    "Argentinean",
    "Armenian",
    "Australian",
    "Austrian",
    "Azerbaija",
    "Bahamian",
    "Bahraini",
    "Bangladeshi",
    "Barbadian",
    "Barbudans",
    "Batswana",
    "Indian",
    "Emirian"

  ]
  basicDetails: any;

  constructor(private store: Store<{ details: any }>,
    private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
    // store.pipe(select(personalObj));
  }

  ngOnInit(): void {
    this.inItForm();
    this.personalDetailForm.valueChanges.subscribe(personalObj => {
      this.store.dispatch(new LoadPersonalDetailObj({ personalObj: this.personalDetailForm.value }));
    });
    let data: any = select(getpersonalDetailsObjState);
    this.store.pipe(data).subscribe(async (data: any) => {
      this.basicDetails = data;

    });

    if (this.activateRoute.snapshot.params.id === "1") {
      this.editDetails();
    }

  }
  inItForm() {
    this.personalDetailForm = this.fb.group({
      firstName: ['', Validators.pattern('^[a-zA-Z ]+$')],
      lastName: ['', Validators.pattern('^[a-zA-Z ]+$')],
      dob: [''],
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      gender: [''],
      nationality: ['Nationality'],
      resideCountry: ['Country of Residence'],
      contact: [''],
      emailId: ['', Validators.pattern('^[A-Za-z0-9._&%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,9}$')],
      male: [''],
      female: [''],
      other: ['']
    })
  }
  get gfc() { return this.personalDetailForm.controls };

  applyNow() {
    this.router.navigateByUrl("/questionair-first")
  }
  editDetails() {
    this.personalDetailForm.patchValue({
      firstName: this.basicDetails?.firstName,
      lastName: this.basicDetails?.lastName,
      dob: this.basicDetails?.dob,
      userName: this.basicDetails?.userName,
      gender: [''],
      nationality: this.basicDetails?.nationality,
      resideCountry: this.basicDetails?.resideCountry,
      contact: this.basicDetails?.contact,
      emailId: this.basicDetails?.emailId,
      male: this.basicDetails?.male,
      female: this.basicDetails?.female,
      other: this.basicDetails?.other
    })
  }
}


