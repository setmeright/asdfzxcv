import { randomBetween } from "@/utils";

function simulateRequest(callback, delayMin = 10, delayMax = 100) {
  const delay = randomBetween(delayMin, delayMax);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = callback();

      if (result.success) {
        resolve(result.data);
      } else {
        reject(result.error);
      }
    }, delay);
  });
}

const users = {
  admin: {
    authKey: "admintop",
    data: {
      id: 1,
      profile: {
        name: "test",
        email: "test@test.com",
        img: "",
      },
    },
  },
};

const api = {
  fetchUser() {
    return simulateRequest(function () {
      const authKey = window.localStorage.getItem("_auth_key");

      if (authKey === users.admin.authKey) {
        return {
          success: true,
          data: users.admin.data,
        };
      }

      return {
        success: false,
        error: "Not authorized",
      };
    });
  },
  login({ account, password }) {
    return simulateRequest(function () {
      if (!account || !password) {
        return {
          success: false,
          error: "Invalid request",
        };
      } else if (account === "admin" && password === "password") {
        window.localStorage.setItem("_auth_key", users.admin.authKey);

        return {
          success: true,
          data: users.admin.data,
        };
      }

      return {
        success: false,
        error: "Invalid credentials",
      };
    });
  },
  logout() {
    return simulateRequest(function () {
      window.localStorage.removeItem("_auth_key");
      return {
        success: true,
      };
    });
  },
};

export default function (_ctx, inject) {
  inject("api", api);
}
