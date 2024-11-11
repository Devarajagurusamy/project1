export interface User {
  id?: string;  // MongoDB generates an `_id` field
  name: string;
  age: number;
}
