import { Component } from '@angular/core';
import { TopMenu } from '../../components/top-menu/top-menu';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-country-layout',
  imports: [TopMenu,RouterOutlet],
  templateUrl: './CountryLayout.html',
})
export class CountryLayout {}
