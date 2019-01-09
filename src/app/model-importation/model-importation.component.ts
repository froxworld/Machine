import { Component, OnInit } from '@angular/core';
import {Model} from '../model';
import {MODELS} from '../liste-Modeles';
import {ModelService} from '../model.service';
import {Importation} from '../importation';
import * as tf from '@tensorflow/tfjs';



@Component({
  selector: 'app-model-importation',
  templateUrl: './model-importation.component.html',
  styleUrls: ['./model-importation.component.css']
})

/*
export interface EntrainementModele {
  getInputs(): any;
  getConfig(): tf.ModelFitConfig;
  getModel(): tf.Model;
  setInputs(inputs: any): void;
  setConfig(config: tf.ModelFitConfig): void;
  setModel(model: tf.Model): void;
}

export class TrainingImpl implements EntrainementModele{
  x: tf.Tensor;
  y: tf.Tensor;
inputs:any;
config: tf.ModelFitConfig;
model: tf.Model;

constructor(inputs, config, model){
  this.inputs = inputs;
  this.config = config;
  this.model = model;
}


  getInputs(): any;
  getConfig(): tf.ModelFitConfig;
  getModel(): tf.Model;
  setInputs(inputs: any):void;
  setConfig(config: tf.ModelFitConfig):void;
  setModel(model: tf.Model):void;
}
*/


export class ModelImportationComponent implements OnInit {


  importation1 = Importation;


  constructor() { }

  ngOnInit() {
  }


}
