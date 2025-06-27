import { ChangeEvent, useEffect, useState } from "react";

import axios from "axios";

import { BiSolidSave } from "react-icons/bi";

import type { AdminAPI, ResponseAPI, RoleAPI } from "../../types/api";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

const EndSelectionModal = ({ modalId }: { modalId: string }) => {
  const [roles, setRoles] = useState<RoleAPI[]>();
  const [role, setRole] = useState<string>();

  const [admins, setAdmins] = useState<AdminAPI[]>();
  const [admin, setAdmin] = useState<string>();

  const roleInfo = roles?.filter(item => item.id.toString() === role);
  const adminInfo = admins?.filter(item => item.id.toString() === admin);

  const handlerRoleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) {
      setRole(undefined);
      setAdmins(undefined);
      setAdmin(undefined);
      return;
    }

    setRole(value);
    try {
      const result = await axios.get(
        `/asignacion/get-admin?role=${e.target.value}`
      );
      const data = result.data as ResponseAPI<AdminAPI>;
      if (data.data.length >= 1) {
        setAdmins(data.data);
        setAdmin(data.data[0].id.toString());
      } else {
        setAdmins(undefined);
        setAdmin(undefined);
      }
    } catch (error) {
      console.error(error);
      setAdmins(undefined);
    }
  };

  const handlerAdminChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAdmin(e.target.value);
  };

  useEffect(() => {
    const render = async () => {
      try {
        const result = await axios.get("/asignacion/get-role");
        const data = result.data as ResponseAPI<RoleAPI>;

        setRoles(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    render();
  }, []);
  return (
    <Modal id={modalId}>
      <div style={{ minHeight: "calc(32*4px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            style={{
              width: "calc(64*4px)",
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            <label htmlFor="asignacion-role">Seleccione el rol:</label>
            <select
              id="asignacion-role"
              onChange={handlerRoleChange}
              value={role}
            >
              <option value="">Seleccionar...</option>
              {roles &&
                roles.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <span style={{ fontSize: "small", color: "gray" }}>
              {role ? roleInfo[0].description : "No ha seleccionado ningún rol."}
            </span>
          </div>
          <div
            style={{
              width: "calc(64*4px)",
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            <label htmlFor="asignacion-admin">Seleccione el usuario:</label>
            <select
              id="asignacion-admin"
              disabled={!admins}
              onChange={handlerAdminChange}
              value={admin}
            >
              {admins &&
                admins.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.firstname} {item.lastname}
                    </option>
                  );
                })}
            </select>
            <span style={{ fontSize: "small", color: "gray" }}>
              {admin ? adminInfo[0].email : "No ha seleccionado ningún usuario."}
            </span>
          </div>
        </div>
        <Button disabled={!admin}>
          <BiSolidSave style={{ fontSize: "large" }} />
          Guardar cambios
        </Button>
      </div>
    </Modal>
  );
};

export default EndSelectionModal;
