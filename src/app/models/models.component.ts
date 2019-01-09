import {Component, OnInit} from '@angular/core';
import {Model} from '../model';
import {MODELS} from '../liste-Modeles';
import * as tf from '@tensorflow/tfjs'; // ajouter npm install @tensorflow/tfjs
import {ModelService} from '../model.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {


  models: Model[];

  constructor(private modelService: ModelService) {
  }

  ngOnInit() {
    this.getModels();
  }

  getModels(): void {
    this.modelService.getModels()
      .subscribe(models => this.models = models);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.modelService.addModel({ name } as Model)
      .subscribe(model => {
        this.models.push(model);
      });
  }

  delete(model: Model): void {
    this.models = this.models.filter(h => h !== model);
    this.modelService.deleteModel(model).subscribe();
  }



}
