import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any = [];
  loading: boolean = true;
  page = 1;
  count = 0;
  tableSize = 6;
  currentIndex = 0;
  constructor(private property_service: PropertyService) { }

  ngOnInit(): void {
    this.fetchAllProperty()
  }
  fetchAllProperty() {
    this.properties = this.property_service.getAll()
    this.loading = false;
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchAllProperty();
  }
  deleteTutorial(id: any): void {
    this.property_service.delete(id)
    this.fetchAllProperty()
  }
}
