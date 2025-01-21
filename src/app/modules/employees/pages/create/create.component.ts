import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  standalone: true, // Mark as standalone
  imports: [
    CommonModule, // Include CommonModule or other necessary modules
  ],
})
export class CreateComponent {}
