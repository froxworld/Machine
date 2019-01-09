import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Model} from '../model';
import {ModelService} from '../model.service';


@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.css']
})
export class ModelDetailComponent implements OnInit {

  model: Model;

  constructor(
    private route: ActivatedRoute,
    private heroService: ModelService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getModel();
  }
  getModel(): void {

    const modelId = +this.route.snapshot.paramMap.get('modelId');
    this.heroService.getModel(modelId)
      .subscribe(hero => this.model = model);


  }
  // bouton de retour
  goBack(): void {
    this.location.back();
  }

}
