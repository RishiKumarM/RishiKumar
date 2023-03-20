import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {

  rzp1:any;
  options:any;

  constructor(private service:ApiService) { }

  ngOnInit(): void {
  }
  
  
  
    pay(){

      this.options = {
        "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Employee Assimilation", //your business name
        "description": "Test Transaction",
           "image": "https://tse2.mm.bing.net/th?id=OIP.Ry9JPhESzGjFAKSBQ2V6hwHaFj&pid=Api&P=0",
        "order_id": "",
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": {
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };
      this.rzp1 = this.service.nativeWindow.Razorpay(this.options);
      alert("Hi");
      this.rzp1.open();
    }

}
