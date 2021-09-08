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
      title:'Start doing',
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
      title:'Action items',
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
    }
   ];

   getData(){
     return this.data;
   }


}
