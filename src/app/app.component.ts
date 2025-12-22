import { Component } from '@angular/core';
import { postData } from './shared/consts/posts';
import { Ipost } from './shared/models/posts';
// import { Istd } from './shared/models/student';
// import { postsData } from './shared/consts/posts';
// import { Ipost } from './shared/models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postsArr : Array<Ipost>= postData

  
//  title = 'I Love Angular';

//  skills :Array<string> = ["HTML","CSS","JS","TS","Angular","Rxjs"]
//  hobbies : Array<string> = ["Chees","Cricket","cooking"]

//  stdArr : Array<Istd> = [
//   {
//     fname: 'Jhon',
//     lname: 'Doe',
//     email: 'jhon@gmail.com',
//     contact: 1234567890,
//     stdId: '123'
//   },
//   {
//     fname: 'May',
//     lname: 'Doe',
//     email: 'May@gmail.com',
//     contact: 1234567890,
//     stdId: '124'
//   },
//   {
//     fname: 'June',
//     lname: 'Doe',
//     email: 'june@gmail.com',
//     contact: 1234567890,
//     stdId: '125'
//   },
//   {
//     fname: 'July',
//     lname: 'Doe',
//     email: 'july@gmail.com',
//     contact: 1234567890,
//     stdId: '126'
//   }
// ];

//  stdArr2: Array<Istd> = [
//   {
//     fname: 'Amit',
//     lname: 'Sharma',
//     email: 'amit@gmail.com',
//     contact: 9876543210,
//     stdId: '201'
//   },
//   {
//     fname: 'Neha',
//     lname: 'Patil',
//     email: 'neha@gmail.com',
//     contact: 9876543211,
//     stdId: '202'
//   },
//   {
//     fname: 'Rohit',
//     lname: 'Verma',
//     email: 'rohit@gmail.com',
//     contact: 9876543212,
//     stdId: '203'
//   },
//   {
//     fname: 'Pooja',
//     lname: 'Deshmukh',
//     email: 'pooja@gmail.com',
//     contact: 9876543213,
//     stdId: '204'
//   }
// ];


// subjects: Array<string> = ["Data Structures", "Algorithms", "Database", "Operating System", "Computer Networks"];
// cities: Array<string> = ["Mumbai", "Pune", "Delhi", "Bengaluru", "Chennai"];
// courses: Array<string> = ["Computer Science", "Information Technology", "Electronics", "Mechanical", "Civil"];
// programmingLanguages: Array<string> = ["C", "C++", "Java", "Python", "TypeScript"];
// webConcepts: Array<string> = ["HTML", "CSS", "JavaScript", "DOM", "HTTP"];

// stdArr3: Array<Istd> = [
//   { fname: 'Rahul', lname: 'Mehta', email: 'rahul@gmail.com', contact: 9000000001, stdId: '301' },
//   { fname: 'Sneha', lname: 'Joshi', email: 'sneha@gmail.com', contact: 9000000002, stdId: '302' },
//   { fname: 'Karan', lname: 'Singh', email: 'karan@gmail.com', contact: 9000000003, stdId: '303' },
//   { fname: 'Anjali', lname: 'Kulkarni', email: 'anjali@gmail.com', contact: 9000000004, stdId: '304' }
// ];

//  stdArr4: Array<Istd> = [
//   { fname: 'Vikas', lname: 'Rao', email: 'vikas@gmail.com', contact: 9111111111, stdId: '401' },
//   { fname: 'Priya', lname: 'Nair', email: 'priya@gmail.com', contact: 9111111112, stdId: '402' },
//   { fname: 'Aakash', lname: 'Gupta', email: 'aakash@gmail.com', contact: 9111111113, stdId: '403' },
//   { fname: 'Kavya', lname: 'Iyer', email: 'kavya@gmail.com', contact: 9111111114, stdId: '404' }
// ];

//  stdArr5: Array<Istd> = [
//   { fname: 'Suresh', lname: 'Patel', email: 'suresh@gmail.com', contact: 9222222221, stdId: '501' },
//   { fname: 'Meena', lname: 'Chopra', email: 'meena@gmail.com', contact: 9222222222, stdId: '502' },
//   { fname: 'Nitin', lname: 'Bansal', email: 'nitin@gmail.com', contact: 9222222223, stdId: '503' },
//   { fname: 'Riya', lname: 'Malhotra', email: 'riya@gmail.com', contact: 9222222224, stdId: '504' }
// ];


// stdArr6: Array<Istd> = [
//   { fname: 'Arjun', lname: 'Kamble', email: 'arjun@gmail.com', contact: 9333333331, stdId: '601' },
//   { fname: 'Pallavi', lname: 'Sawant', email: 'pallavi@gmail.com', contact: 9333333332, stdId: '602' },
//   { fname: 'Manoj', lname: 'Yadav', email: 'manoj@gmail.com', contact: 9333333333, stdId: '603' },
//   { fname: 'Isha', lname: 'Thakur', email: 'isha@gmail.com', contact: 9333333334, stdId: '604' }
// ];

// stdArr7: Array<Istd> = [
//   { fname: 'Raj', lname: 'Patel', email: 'raj@gmail.com', contact: 9999999991, stdId: '701' },
//   { fname: 'Kiran', lname: 'Joshi', email: 'kiran@gmail.com', contact: 9999999992, stdId: '702' }
// ];

// postsArr  : Array<Ipost>= postsData

}

