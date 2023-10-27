import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7ee30163bd3c4c778f88f2229464feb6",
  },
});
