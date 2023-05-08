import endpoint from "../endpoint";

const formData = () => {
  return endpoint.get("/ZPM_EDX_NOTIF_SRV/LookupSet");
};

export default { formData };
