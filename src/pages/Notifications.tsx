import { useEffect, useState } from "react";
import api from "../lib/api/notifications";

export const Notifications = () => {
  const [form, setForm] = useState("");

  useEffect(() => {
    const getFormData = async () => {
      const data = await api.formData();
      const json = await data.data;
      return setForm(JSON.stringify(json));
    };

    getFormData().catch(console.error);
  }, []);

  return (
    <>
      Notifications
      <div>{/* <Form></Form> */}</div>
    </>
  );
};
