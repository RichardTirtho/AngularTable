import { Component, OnInit } from '@angular/core';

import { Users } from '../_model/users';
import { RestService } from '../_service/rest.service';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  users:Users[]=[];
  firstName:any;
  searchValue:any;
  id:any;
  lastName:any;
  email:any;
  mobile:any;
  salary:any;
  p: number = 1;

 

  constructor(public rs: RestService) {
    this.getData();
   }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.users =response;
    });
  }


  array:any =[
    {
      "id": 1,
      "firstName": "Richard Tirtho",
      "lastName": "Biswas",
      "email":"richardtirtho5@gmail.com",
      "mobile":"01787772725",
      "salary":"15000"
    },
    {
      "id": 2,
      "firstName": "Sara Tanha",
      "lastName": "Khan",
      "email":"saratanha@gmail.com",
      "mobile":"01787772789",
      "salary":"33000"
    },
    {
      "id": 3,
      "firstName": "Tahmid",
      "lastName": "Hasan",
      "email":"tahmidhasan@gmail.com",
      "mobile":"01787772741",
      "salary":"45000"
    },
    {
      "id": 4,
      "firstName": "Rahat",
      "lastName": "Ahmed",
      "email":"rahatahmed@gmail.com",
      "mobile":"01787772725",
      "salary":"98000"
    },
    {
      "id": 5,
      "firstName": "Elisa",
      "lastName": "Traee",
      "email":"elisatraee@gmail.com",
      "mobile":"01787772741",
      "salary":"789000"
    },
    {
      "id": 6,
      "firstName": "Emily",
      "lastName": "Tropa",
      "email":"emilytropa@gmail.com",
      "mobile":"0178778644",
      "salary":"8794000"
    },
    {
      "id": 7,
      "firstName": "Niher",
      "lastName": "Bisawas",
      "email":"niherbiswas@gmail.com",
      "mobile":"01787772725",
      "salary":"15000"
    }

  ]

  tabKey:any=[];
  tabValue:any=[];
  getData()
  {
    this.array.forEach((element :any) => {
      this.tabKey = Object.keys(element);
      this.tabValue.push(Object.values(element));
    });
    console.log( this.tabKey);
  }

  Search()
  {
    if(this.searchValue == '')
    {
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase()) ||
        res.lastName.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase()) ||
        res.id.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase()) ||
        res.email.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase()) ||
        res.mobile.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase()) ||
        res.salary.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
      });
    }
  }


  SearchId()
  {
    if(this.id == '')
    {
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.id.match(this.id);
      });
    }
  }

  SearchFname()
  {
    if(this.firstName == '')
    {
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }

  SearchLname()
  {
    if(this.lastName == '')
    {
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.lastName.toLocaleLowerCase().match(this.lastName.toLocaleLowerCase());
      });
    }
  }


  Searchemail()
  {
    if(this.email == '')
    {
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
      });
    }
  }

  Searchmobile()
  {
    
    if(this.mobile == '')
    {
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.mobile.toLocaleLowerCase().match(this.mobile.toLocaleLowerCase());
      });
    }
  }


  Searchsalary()
  {
    if(this.salary == '')
    {
      this.ngOnInit();
    }else{
      this.users = this.users.filter(res => {
        return res.salary.toLocaleLowerCase().match(this.salary.toLocaleLowerCase());
      });
    }
  }


  key:string ="id"
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
