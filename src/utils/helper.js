import * as Yup from "yup";

export const handleErrorApi = (error, options = { duration: 3000 }) => {
  if (typeof error === "object") {
    console.log(error.message, options);
  }
  console.log(error , options);
};

export const handleError = (error, setError) => {
  if (error instanceof Yup.ValidationError) {
    const formattedErrors = error.inner.reduce((acc, err) => {
      acc[err.path] = err.message;
      return acc;
    }, {});
    if (typeof setError === "function") {
      setError(formattedErrors);
      console.log(formattedErrors);
    }
    return formattedErrors;
  } else {
    return handleErrorApi(error);
  }
};

export const handleSucess = (msg) => {
  console.log("success" , msg);
};

export const truncateContent = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + " Read more..";
};
