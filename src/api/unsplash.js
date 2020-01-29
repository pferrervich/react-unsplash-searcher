import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e2908aa40953eb67a503206ed88b24d66ff9f1a171edc0574e1933fd30f3070e"
  }
});
