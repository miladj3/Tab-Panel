import { Injectable } from '@angular/core';

import { IData } from './IData';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  public data: Array<IData> = [];

  constructor() {
    this.data = [
      {
        title: 'D1',
        data: [{
          id: 1,
          name: 'Ali',
          surName: 'Imani',
          birthday: new Date('1988-01-01')
        },
        {
          id: 2,
          name: 'Reza',
          surName: 'Hosseini',
          birthday: new Date('1988-02-02')
        },
        {
          id: 3,
          name: 'Mohammad',
          surName: 'Nasiri',
          birthday: new Date('1991-12-09')
        }]
      },
      {
        title: 'D2',
        data: [{
          id: 1,
          name: 'Milad',
          surName: 'Jafari',
          birthday: new Date('1986-02-03')
        },
        {
          id: 2,
          name: 'Babak',
          surName: 'Hosseini',
          birthday: new Date('1988-02-02')
        },
        {
          id: 3,
          name: 'Mohammad',
          surName: 'Nasiri',
          birthday: new Date('1991-12-09')
        },
        {
          id: 4,
          name: 'Arash',
          surName: 'Hosseini',
          birthday: new Date('1988-02-02')
        }]
      },
      {
        title: 'D2',
        data: [{
          id: 1,
          name: 'Milad',
          surName: 'Jafari',
          birthday: new Date('1986-02-03')
        },
        {
          id: 2,
          name: 'Babak',
          surName: 'Hosseini',
          birthday: new Date('1988-02-02')
        },
        ]
      }
    ];
  }

  public getData() {
    return this.data;
  }
}
