import { randomBetween } from "@/utils";
import PlaceholderPicture from "@/static/profile-picture-placeholder.png";

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

const storedUsers = window.localStorage.getItem("users");

const users = storedUsers
  ? JSON.parse(storedUsers)
  : [
      {
        authKey: "YWRtaW5wYXNzd29yZA==",
        data: {
          id: 1,
          account: "admin",
          profile: {
            name: "",
            email: "",
            img: PlaceholderPicture,
          },
        },
      },
    ];

const api = {
  fetchUser() {
    return simulateRequest(function () {
      const authKey = window.localStorage.getItem("_auth_key");
      if (!authKey) {
        return {
          success: false,
          error: "Not authorized",
        };
      }

      const user = users.find(user => user.authKey === authKey);

      if (user) {
        return {
          success: true,
          data: user.data,
        };
      }

      return {
        success: false,
        error: "User not found",
      };
    });
  },
  updateProfile(payload) {
    return simulateRequest(function () {
      const authKey = window.localStorage.getItem("_auth_key");

      if (!authKey) {
        return {
          success: false,
          error: "Not authorized",
        };
      }

      const user = users.find(user => user.authKey === authKey);

      if (user) {
        user.data.profile = { ...user.data.profile, ...payload };
        window.localStorage.setItem("users", JSON.stringify(users));

        return {
          success: true,
        };
      }

      return {
        success: false,
        error: "User not found",
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
      }

      const authKey = btoa(account + password);

      const user = users.find(user => user.authKey === authKey);

      if (user) {
        window.localStorage.setItem("_auth_key", authKey);
        return {
          success: true,
          data: user.data,
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
