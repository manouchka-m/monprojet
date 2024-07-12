import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  movies = [
    { title: 'Movie 1', imageUrl:'assets/mv1.jpg' },
    { title: 'Movie 2', imageUrl: 'assets/mv5.webp' },
    { title: 'Movie 3', imageUrl: 'assets/mv8.jpg' },
    { title: 'Movie 3', imageUrl: 'assets/mv13.webp' },
    { title: 'Movie 3', imageUrl: 'assets/mv11.webp' },
    { title: 'Movie 3', imageUrl: 'assets/mv12.webp' },
    { title: 'Movie 3', imageUrl: 'assets/img4.webp' },
    // Ajoute plus de films ici
  ];
  ngOnInit(): void {
  }
}
