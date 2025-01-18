import { UserModel } from "../models/UserModel";

export interface UserRepository {
    getUsers(): Promise<UserModel[]>;
}