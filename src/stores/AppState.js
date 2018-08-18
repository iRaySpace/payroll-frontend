import { observable, action, computed } from 'mobx';
import axios from 'axios';

export default class AppState {
  
  @observable currentMenu;
  @observable authenticated;
  @observable authenticating;

  @observable username;
  @observable password;

  @observable employees
  @observable fetchedEmployees;
  @observable fetchedError;

  @observable firstName;
  @observable lastName;
  @observable department;

  @observable description;
  @observable fromDate;
  @observable toDate;
  @observable payrollEntries;
  @observable payrollEntrying;
  @observable employeeSelected;
  @observable numberOfHours;

  constructor() {
    this.currentMenu = "Home";
    this.authenticated = false;
    this.authenticating = false;
    this.fetchedEmployees = false;
    this.fetchedError = false;
    this.username = "";
    this.password = "";
    this.employees = [];
    this.firstName = "";
    this.lastName = "";
    this.department = "";
    this.description = "";
    this.fromDate = "";
    this.toDate = "";
    this.payrollEntries = [];
    this.payrollEntrying = false;
    this.employeeSelected = "";
    this.numberOfHours = "";
  }

  @action setFirstName(text) {
    this.firstName = text;
  }

  @action setLastName(text) {
    this.lastName = text;
  }

  @action setDepartment(text) {
    this.department = text;
  }

  @action setDescription(text) {
    this.description = text;
  }

  @action setFromDate(date) {
    this.fromDate = date;
  }

  @action setToDate(date) {
    this.toDate = date;
  }

  @action setPayrollEntrying(bool) {
    this.payrollEntrying = bool;
  }

  @action setEmployeeSelected(text) {
    this.employeeSelected = text;
  }

  @action setNumberOfHours(text) {
    this.numberOfHours = text;
  }

  @action getEmployee(id) {
    return this.employees.filter(emp => emp.id === id)[0];    
  }

  @action fetchEmployees() {
    if(!this.fetchedEmployees) {
      axios.get('http://localhost:8000/employees')
        .then(response => {
          const { data } = response;
          for(let i = 0; i < data.length; i++) {
            this.employees.push(data[i]);
          }
          this.fetchedEmployees = true;
        })
        .catch(error => {
          console.log(error);
          this.fetchedError = true;
        });
    } else {
      console.log("Already fetched employees!");
    }
  }

  @action setMenu(menu) {
    this.currentMenu = menu;
  }

  @action setUsername(username) {
    this.username = username;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action addEmployee() {
    axios.post('http://localhost:8000/employees/', {
      first_name: this.firstName,
      last_name: this.lastName,
      department: this.department
    })
    .then(response => {
      if (response.status === 201) {
        this.employees.push(response.data);
        this.firstName = "";
        this.lastName = "";
        this.department = "";
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  @action addPayroll() {
    axios.post('http://localhost:8000/payroll_periods/', {
      name: this.description,
      start_date: this.fromDate,
      end_date: this.toDate
    })
    .then(response => {
      if (response.status === 201) {
        const { data } = response;
        this.description = "";
        this.fromDate = "";
        this.toDate = "";
        this.addPayrollEntries(data.id);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  @action addPayrollEntries(payroll_period) {
    axios
      .all(this.payrollEntries.map(entry =>
        axios
          .post('http://localhost:8000/payroll_entries/', {
            payroll_period,
            employee: entry.employee,
            number_of_hours: entry.number_of_hours
          })
          .then(res => res)
      ))
      .then(res => {
        this.payrollEntries = [];
      });
  }

  @action addPayrollEntry() {
    const employee = this.getEmployee(this.employeeSelected);
    this.payrollEntries.push({
      employee: this.employeeSelected,
      employee_name: `${employee.first_name} ${employee.last_name}`,
      number_of_hours: this.numberOfHours
    });
    this.employeeSelected = "";
    this.numberOfHours = "";
    this.payrollEntrying = false;
  }

  @action authenticate() {
    return new Promise((resolve, reject) => {
      this.authenticating = true;

      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;

        resolve(this.authenticated);
      }, 0);
    });
  }

}