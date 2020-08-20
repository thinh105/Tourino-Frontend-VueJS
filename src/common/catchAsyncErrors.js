module.exports = (functionToHandle) => {
  return (...handledFunctionParams) => {
    functionToHandle(...handledFunctionParams).catch((error) => {
      console.error(error.message);
    });
  };
};

// (functionToHandle) => (...handledFunctionParams) => {
//   functionToHandle(...handledFunctionParams).catch((e) => {
//     console.log('catch cho vui!!!', e);
//   });
// };
