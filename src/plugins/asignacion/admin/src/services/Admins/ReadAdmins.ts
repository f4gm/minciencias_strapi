import axios from "axios";

import { ResponseAPI, AdminAPI } from "../../types/api";

const ReadAdmins = async (roleId: number): Promise<ResponseAPI<AdminAPI> | null> => {
  try {
    const response = await axios.get(`/asignacion/get-admin?role=${roleId}`);
    return response.data as ResponseAPI<AdminAPI>;
  } catch(error) {
    console.error(error);
    return null;
  }
}

export default ReadAdmins;