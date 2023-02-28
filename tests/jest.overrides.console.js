const { error } = console;

// eslint-disable-next-line func-names,no-console
console.error = function (message) {
  // eslint-disable-next-line prefer-rest-params
  error.apply(console, arguments); // keep default behaviour
  throw (message instanceof Error ? message : new Error(message));
};
