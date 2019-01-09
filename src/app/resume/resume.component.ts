import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { MODELS } from '../liste-Modeles';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: [ './resume.component.css' ]
})
export class ResumeComponent implements OnInit {
  models: Model[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.getModels();
  }

  getModels(): void {
    this.modelService.getModels().subscribe(models => this.models = models.slice(0, 5));
  }
}
