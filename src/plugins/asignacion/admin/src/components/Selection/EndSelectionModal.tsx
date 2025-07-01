import { ChangeEvent, useEffect, useState } from "react";

import { BiSolidSave } from "react-icons/bi";

import type { AdminAPI, RoleAPI } from "../../types/api";

import ReadAdmins from "../../services/Admins/ReadAdmins";
import ReadRoles from "../../services/Roles/ReadRoles";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Select from "../UI/Input/Select";

import "./EndSelectionModal.css";

const EndSelectionModal = ({ modalId }: { modalId: string }) => {
  const [roles, setRoles] = useState<RoleAPI[]>();
  const [role, setRole] = useState<string>();

  const [admins, setAdmins] = useState<AdminAPI[]>();
  const [admin, setAdmin] = useState<string>();

  const roleInfo = roles?.filter((item) => item.id.toString() === role);
  const adminInfo = admins?.filter((item) => item.id.toString() === admin);

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
      const data = await ReadAdmins(parseInt(e.target.value));

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
        const data = await ReadRoles();
        setRoles(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    render();
  }, []);

  return (
    <Modal id={modalId}>
      <div className="selection-modal-body">
        <div className="selection-modal-content">
          <div className="selection-modal-field-wraper">
            <label htmlFor="asignacion-role">Seleccione el rol:</label>
            <Select
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
            </Select>
            <span className="selection-modal-help">
              {role
                ? roleInfo[0].description
                : "No ha seleccionado ningún rol."}
            </span>
          </div>
          <div className="selection-modal-field-wraper">
            <label htmlFor="asignacion-admin">Seleccione el usuario:</label>
            <Select
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
            </Select>
            <span className="selection-modal-help">
              {admin
                ? adminInfo[0].email
                : "No ha seleccionado ningún usuario."}
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
