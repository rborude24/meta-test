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
         content:'First'
         },
         {
          content:'Second'
         },
         {
          content:'Third'
         },

      ]
     },
     {
      title:'What can be improved',
      cards:[
        {
        content:'fourth'
        },
        {
         content:'fifth'
        },
        {
         content:'sixth'
        },

     ]
    },
    {
      title:'Start doing',
      cards:[
        {
        content:'seventh'
        },
        {
         content:'eigth'
        },
        {
         content:'nineth'
        },

     ]
    },
    {
      title:'Action items',
      cards:[
        {
        content:'tenth'
        },
        {
         content:'eleventh'
        },
        {
         content:'twelveth'
        },

     ]
    }
   ];

   getData(){
     return this.data;
   }


}
