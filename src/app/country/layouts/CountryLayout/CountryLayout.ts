import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from '../../components/top-menu/top-menu';


@Component({
  selector: 'app-country-layout',
  imports: [TopMenu,RouterOutlet],
  templateUrl: './CountryLayout.html',
})
export class CountryLayout {}
