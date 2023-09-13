export class Message {
  email: string;
  name: string;
  message: string;
  phone: string;
  state: string;
  error: string;
  constructor(state: string = "ready") {
    (this.email = ""), (this.name = ""), (this.message = ""), (this.phone = ""), (this.state = state), (this.error = "");
  }
}