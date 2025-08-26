import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';




// Service to handle customer-related operations
// such as fetching, creating, updating, and deleting customers.
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api: string = 'http://localhost:8081/api/customers';
  constructor(private http:HttpClient) { }
  
  getCustomerList():Observable<Customer []> {
    return this.http.get<Customer[]>(this.api);
  }
  getCustomerById(id: number):Observable<Customer> {
    return this.http.get<Customer>(this.api+'/'+id);
  }
  
  //Un Observable que emite el objeto Customer creado, incluyendo el ID asignado por el servidor.
  createCustomer(customer: Customer):Observable<Customer> {
    return this.http.post<Customer>(this.api, customer);
  }


  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.api}/${id}`, customer);
}
  deleteCustomer(id: number):Observable<any> {
    return this.http.delete(this.api+'/'+id,);
  }
  
  
}