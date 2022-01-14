import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model'


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  properties: Property[] = []
  constructor() { }

  getAll() {
    return this.properties;
  }

  create(data: Property) {
    this.properties.push(data)
  }

  delete(id: any) {
    this.properties = this.properties.filter(item => {
      return item.id !== id
    })
  }
}
