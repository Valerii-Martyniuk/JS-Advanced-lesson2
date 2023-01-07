import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  login!: string;
  password!: string;
  email!: string;
  userNum!: number;
  isChenge: boolean = false;
  isClassLogin: number = 0;
  isClassPassword: number = 0;
  isClassEmail: number = 0;
  logReg = /^\w+$/;
  emailReg = /^\w+@\w+\.\w+$/;

  arrUsers: Array<{
    login: string;
    password: string;
    email: string;
  }> = [];

  addUser(): void {
    if (this.isChenge === true) {
      this.arrUsers[this.userNum].login = this.login;
      this.arrUsers[this.userNum].password = this.password;
      this.arrUsers[this.userNum].email = this.email;
      this.isChenge = false;
    } else {
      let newUser = {
        login: this.login,
        password: this.password,
        email: this.email,
      };
      this.arrUsers.push(newUser);
    }
    this.login = '';
    this.password = '';
    this.email = '';
    this.isClassLogin = 0;
    this.isClassPassword = 0;
    this.isClassEmail = 0;
  }
  deletName(number: number): void {
    this.arrUsers.splice(number, 1);
  }
  editUser(i: number): void {
    this.userNum = i;
    this.isChenge = true;
    this.login = this.arrUsers[i].login;
    this.password = this.arrUsers[i].password;
    this.email = this.arrUsers[i].email;
    this.isClassLogin = 2;
    this.isClassPassword = 2;
    this.isClassEmail = 2;
  }
  test(): void {
    if (!this.logReg.test(this.login)) {
      this.isClassLogin = 1;
    } else if (this.logReg.test(this.login)) {
      this.isClassLogin = 2;
    }
  }
  testPass(): void {
    if (!this.logReg.test(this.password)) {
      this.isClassPassword = 1;
    } else if (this.logReg.test(this.password)) {
      this.isClassPassword = 2;
    }
  }
  testEmail(): void {
    if (!this.emailReg.test(this.email)) {
      this.isClassEmail = 1;
    } else if (this.emailReg.test(this.email)) {
      this.isClassEmail = 2;
    }
  }
}
