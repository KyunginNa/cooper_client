import axios from "axios";

const authenticate = async (email, password) => {
  try {
    let response = await axios.post("/auth/sign_in", {
      email: email,
      password: password,
    });
    return storeAuthCredentials(response);
  } catch (error) {
    return false;
  }
};

const storeAuthCredentials = ({ headers }) => {
  const credentials = {
    uid: headers["uid"],
    access_token: headers["access-token"],
    token_type: headers["token-type"],
    expiry: headers["expiry"],
    client: headers["client"],
  };
  return credentials;
};

export { authenticate };
