import axios from "axios";

import { ResponseAPI, RoleAPI } from "../../types/api";

const ReadRoles = async (): Promise<ResponseAPI<RoleAPI> | null> => {
  try {
    const response = await axios.get("/asignacion/get-role");
    return response.data as ResponseAPI<RoleAPI>;
  } catch(error) {
    console.error(error);
    return null;
  }
}

export default ReadRoles;