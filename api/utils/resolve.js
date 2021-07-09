const resolve = async (promise) => {
  try {
    const response = await promise;
    return response;
  } catch (error) {
    return error;
  }
};

export default resolve;
