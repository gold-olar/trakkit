import CreateDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = CreateDataContext(authReducer, null, {
  auth: false,
});
