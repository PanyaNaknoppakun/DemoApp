import { UserModel } from "../../domain/models/UserModel";

export interface UserApiSource {
  getUsers(): Promise<UserModel[]>;
}
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const UserApiSourceImpl: UserApiSource = {
  async getUsers(): Promise<UserModel[]> {
    await delay(2000);
    return [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Tob", age: 33 },
    ];
  },
};

export default UserApiSourceImpl;
