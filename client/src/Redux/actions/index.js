import axios from "axios";

export const formCreate = (data) => async () => {
  console.log("data en actions", data);
  await axios({
    method: "POST",
    url: `http://localhost:3001/product/createProduct`,
    data: data,
  });
};
