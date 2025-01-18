import { UserModel } from "../../domain/models/UserModel";

export interface UserLocalSource {
  cacheUsers(users: UserModel[]): Promise<void>;
}

const UserLocalSourceImpl: UserLocalSource = {
  async cacheUsers(users: UserModel[]): Promise<void> {
    console.log("Caching users:", users);
  },
};

export default UserLocalSourceImpl;
