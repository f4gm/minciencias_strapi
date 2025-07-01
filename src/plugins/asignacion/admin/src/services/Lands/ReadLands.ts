import axios from "axios";

import { ResponseAPI, LandsAPI } from "../../types/api";

const ReadLands = async (): Promise<ResponseAPI<LandsAPI> | null> => {
  try {
    const response = await axios.get("/asignacion/get-land");
    return response.data as ResponseAPI<LandsAPI>;
  } catch(error) {
    console.error(error);
    return null;
  }
}

export default ReadLands;