import { useState } from "react";
import toast from "react-hot-toast";
import { getUsers as getUserRequest, addUser as addUserRequest } from "../../services/api"; 


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

  return {
    Users,
    isFetching: !Users,
    getUsers,
    addUser
  };
};
