import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = 'Paris Hilton Hotel';
  numberOfRooms = 100;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 101,
    availableRooms: 1,
    bookedRooms: 100,
  }
  roomList: RoomList[] = [];
  constructor(){}

  ngOnInit():void {
    this.roomList = [
      {
        roomNumber: 23,
        roomType: 'Deluxe Room',
        amenities: 'Air conditioner, Free Wifi, TV, Jacuzzy, Kitchen',
        price: 500,
        photos: 'https://unsplash.com/es/fotos/-lFbF-7Fk48',
        checkinTime: new Date('05-Sep-2023'),
        checkoutTime: new Date('09-Sep-2023'),
      },
      {
        roomNumber: 11,
        roomType: 'Normal Room',
        amenities: 'Air conditioner, Free Wifi, TV',
        price: 300,
        photos: 'https://unsplash.com/es/fotos/-lFbF-7Fk48',
        checkinTime: new Date('05-Sep-2023'),
        checkoutTime: new Date('09-Sep-2023'),
      },
      {
        roomNumber: 10,
        roomType: 'Economic Room',
        amenities: 'Air conditioner, TV',
        price: 200,
        photos: 'https://unsplash.com/es/fotos/-lFbF-7Fk48',
        checkinTime: new Date('05-Jan-2023'),
        checkoutTime: new Date('09-Jan-2023'),
      },
    ]
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
