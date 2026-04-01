export const logger = {
  info(msg) {
    console.log(`ⓘ  ${msg}`);
  },
  success(msg) {
    console.log(`✔ ${msg}`);
  },
  error(msg) {
    console.error(`✗ ${msg}`);
  },
  debug(msg) {
    if (process.env.DEBUG) console.log(`🐞 ${msg}`);
  },
};
