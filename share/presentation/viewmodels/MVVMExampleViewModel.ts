import { useEffect, useState } from "react";
import GetUsersUseCase from "../../domain/usecases/GetUsersUseCase";
import UserRepositoryImpl from "../../data/repositories/UserRepositoryImpl";
import UserApiSourceImpl from "../../data/sources/UserApiSource";
import UserLocalSourceImpl from "../../data/sources/UserLocalSource";

const MVVMExampleViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const userRepository = new UserRepositoryImpl(
    UserApiSourceImpl,
    UserLocalSourceImpl
  );
  const getUsersUseCase = new GetUsersUseCase(userRepository);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsersUseCase.execute();
      setUsers(data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    users,
    loading,
    fetchUsers,
  };
};

export default MVVMExampleViewModel;
