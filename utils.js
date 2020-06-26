export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validationRules = {
  required: v => !!v || "Field is required",
  email: v => emailRe.test(v.toLowerCase()) || "Email is not valid",
};
