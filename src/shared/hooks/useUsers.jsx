import { useState } from "react";
import toast from "react-hot-toast";
import { getUsers as getUserRequest, 
         addUser as addUserRequest, 
         editUser as editUserRequest, 
         deleteUser as deleteUserRequest } from "../../services/api"; 

export const getUsers = () => {
  const [Users, setUsers] = useState();

  const getUsers = async (id) => {
    try {
      const responseData = await getUserRequest(id);

      if (responseData.error) {
        return toast.error(
          responseData.e?.response?.data || "Error al cargar la información del canal"
        );
      }

      setUsers(responseData);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      toast.error("Ocurrió un error al cargar la información del canal");
    }
  };

  const addUser = async (userData) => {
    try {
      const token = localStorage.getItem("token"); 
      const headers = {
        "Content-Type": "application/json",
        "x-token": token 
      };

      const responseData = await addUserRequest(userData, headers);

      if (responseData.error) {
        toast.error(
          responseData.error.message || "Error al agregar el usuario"
        );
      } else {
        toast.success("Usuario agregado exitosamente");
        
        getUsers();
      }
    } catch (error) {
      console.error("Error al agregar el usuario:", error);
      toast.error("Ocurrió un error al agregar el usuario");
    }
  };

  const editUser = async (userId, updatedUserData) => {
    try {
      const token = localStorage.getItem("token"); 
      const headers = {
        "Content-Type": "application/json",
        "x-token": token 
      };

      const responseData = await editUserRequest(userId, updatedUserData, headers);

      if (responseData.error) {
        toast.error(
          responseData.error.message || "Error editing user"
        );
      } else {
        toast.success("User edited successfully");
        
        getUsers();
      }
    } catch (error) {
      console.error("Error editing user:", error);
      toast.error("An error occurred while editing the user");
    }
  };

  const deleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token"); 
      const headers = {
        "Content-Type": "application/json",
        "x-token": token 
      };

      const responseData = await deleteUserRequest(userId, headers);

      if (responseData.error) {
        toast.error(
          responseData.error.message || "Error deleting user"
        );
      } else {
        toast.success("User successfully deleted");
        
        getUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("An error occurred while deleting the user");
    }
  };

  return {
    Users,
    isFetching: !Users,
    getUsers,
    addUser,
    editUser,
    deleteUser
  };
};
