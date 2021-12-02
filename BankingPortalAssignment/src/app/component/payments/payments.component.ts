import { Component, OnInit } from '@angular/core';
import { payment } from 'src/app/models/payment';
import { ServicesService } from 'src/app/service/services.service';
import *  as  data from '../../data.json';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  searchTerm: string | any;
  IncomeAmmonut: number | any;
  OutcomeAmonut: number | any;
  incomecount: number | any;
  outcomecount: number | any;
  term: string | any;
  pay: any;
  payments: payment[] | any;
  date: Date | any = new Date().toLocaleString("default", { weekday: "long" });
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    console.log(this.payments)
    var incomecalculate = 0;
    var outcomecalculate = 0;
    var countOutcome = 0;
    var countincome = 0;
    this.service.getPaymentDetails().subscribe((data) => {
      console.log(data)
      this.payments = data;
      for (let i = 0; i < this.payments.length; i++) {

        if (this.payments[i].Category == "Income") {
          countincome = countincome + 1
          incomecalculate = incomecalculate + this.payments[i].Amount;



        }
        if (this.payments[i].Category == "Outcome") {
          outcomecalculate = outcomecalculate - this.payments[i].Amount;
          countOutcome = countOutcome + 1;
        }
        this.outcomecount = countOutcome;
        this.incomecount = countincome;
        this.IncomeAmmonut = incomecalculate;
        this.OutcomeAmonut = outcomecalculate;
      }
    })



  }
}
