import { UserModel } from "../models/UserModel";
import { UserRepository } from "../repositories/UserRepository";


export default class GetUsersUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<UserModel[]> {
    return await this.userRepository.getUsers();
  }
}
