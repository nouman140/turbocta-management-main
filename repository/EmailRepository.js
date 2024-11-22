import Repository from "./Repository";
const SENDEMAIL = "/sendEmail";
const INSTRUCTIONEMAIL = "/instructionEmail";
const SUBSCRIBEEMAIL = "/subscribeEmail";
export default {
  sendEmailRepo(detail) {
    return Repository.post(`${SENDEMAIL}`, detail);
  },
  instructionEmailRepo(detail) {
    return Repository.post(`${INSTRUCTIONEMAIL}`, detail);
  },
  subscribeEmailRepo(detail) {
    return Repository.post(`${SUBSCRIBEEMAIL}`, detail);
  },
};
