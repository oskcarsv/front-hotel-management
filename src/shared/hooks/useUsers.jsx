import { useState } from "react";
import toast from "react-hot-toast";
import { getUsers as getUserRequest } from "../../services/api";

export const getUsers = () => {
    const [ Users, setUsers] = useState()

    const getUsers = async (id) => {
        const responseData = await getUserRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'Error al cargar la información del canal'
            )
        }

        setUsers(responseData)
    }
  return {
    Users,
    isFetching: !Users,
    getUsers
  }
}
