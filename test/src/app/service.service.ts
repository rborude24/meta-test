import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

   data = [
     {
       title:'What went well',
       cards:[
         {
        id:1,
         content:'First'
         },
         {
          id:2,
          content:'Second'
         },
         {
          id:3,
          content:'Third'
         },

      ]
     },
     {
      title:'What can be improved',
      cards:[
        {
          id:1,
        content:'fourth'
        },
        {
          id:2,
         content:'fifth'
        },
        {
          id:3,
         content:'sixth'
        },

     ]
    },
    {
      title:'Start doing',
      cards:[
        {
          id:1,
        content:'seventh'
        },
        {
          id:2,
         content:'eigth'
        },
        {
          id:3,
         content:'nineth'
        },

     ]
    },
    {
      title:'Action items',
      cards:[
        {
          id:1,
        content:'tenth'
        },
        {
          id:2,
         content:'eleventh'
        },
        {
          id:3,
         content:'twelveth'
        },

     ]
    }
   ];

   getData(){
     return this.data;
   }


}
