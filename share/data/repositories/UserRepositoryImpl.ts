import { UserModel } from "../../domain/models/UserModel";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserApiSource } from "../sources/UserApiSource";
import { UserLocalSource } from "../sources/UserLocalSource";


export default class UserRepositoryImpl implements UserRepository {
  private apiSource: UserApiSource;
  private localSource: UserLocalSource;

  constructor(apiSource: UserApiSource, localSource: UserLocalSource) {
    this.apiSource = apiSource;
    this.localSource = localSource;
  }

  async getUsers(): Promise<UserModel[]> {
    const users = await this.apiSource.getUsers();
    await this.localSource.cacheUsers(users);
    return users;
  }
}
