import { setDoc, getDoc } from "firebase/firestore";
import { getUsersRef } from "../services/firebaseApi";

// types:
import { NewUserData } from "../@types/user";
type ReturnCreateUser = {
  createNewUser: Function;
};

const useCreateNewUser = (): ReturnCreateUser => {
  const createNewUser = async (userData: NewUserData) => {
    const user = await getDoc(getUsersRef(userData?.uid));

    if (!user.exists()) {
      console.log("user created!");
      await setDoc(getUsersRef(userData?.uid), {
        uid: userData.uid,
        username: userData.username,
        photoUrl: userData.photoUrl,
      });
    }
  };

  return { createNewUser };
};

export default useCreateNewUser;
