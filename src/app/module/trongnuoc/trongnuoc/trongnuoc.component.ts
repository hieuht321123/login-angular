import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Buukien } from 'src/app/model/buugui';
import { TrongnuocService } from 'src/app/service/trongnuoc.service';

@Component({
  selector: 'app-trongnuoc',
  templateUrl: './trongnuoc.component.html',
  styleUrls: ['./trongnuoc.component.css']
})
export class TrongnuocComponent implements OnInit{
  constructor() { }

 ngOnInit(){}
}
