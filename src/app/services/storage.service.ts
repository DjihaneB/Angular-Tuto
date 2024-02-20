// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {

//   // getData(key: string):any{
//   //   return JSON.parse(localStorage.getItem(key));
//   // }
//   getData(key: string): any {
//     const item = localStorage.getItem(key);
//     if (item) {
//       return JSON.parse(item);
//     }
//     return null; // or whatever default value you want to return when the item is not found
//   }

//   setData(key: string, data: any) {
//     localStorage.setItem(key, JSON.stringify(data));
//   }
//   constructor() { }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getData(key: string): any {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  constructor() { }


}