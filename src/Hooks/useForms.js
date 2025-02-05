import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleError } from "@/utils/helper";

export default function useForms({ fields = {}, validationSchema }) {
  const {
    register, 
    setValue,
    getValues,
    setError,
    clearErrors,
    formState,
    // formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: fields,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined, // Yup validation
  });
  const { errors, isSubmitting } = formState;
  const handleChange = (field, value) => {
    setValue(field, value); // Update form field
    !isEmpty(validationSchema) && handleFieldValidation(field, value); // Validate field
  };

  const handleFieldValidation = async (field, value) => {
    try {
      await validationSchema?.validateAt(field, { ...getValues(), [field]: value });
      clearErrors(field); // Clear error if validation passes
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setError(field, { type: "manual", message: error.message }); // Set validation error
      }
    }
  };

  const isValidForm = async () => {
    try {
      if (isEmpty(validationSchema)) return true;
      await validationSchema.validate(getValues(), { abortEarly: false });
      return true;
    } catch (error) {
      handleError(error, setError);
      return false;
    }
  };

  return {
    register, // Use this in form fields 
    setValue,
    getValues,
    setError,
    errors,
    isSubmitting,
    handleChange,
    isValidForm,
  };
}



// import { handleError } from "@/utils/helper";
// // import { useForm } from "@inertiajs/react";
// import { useForm } from 'react-hook-form';

// import { isEmpty } from "lodash";
// import * as Yup from "yup";

// export default function useForms({ fields = {}, validationSchema }) {
//   const props = useForm(fields);
//   console.log(props);
  
//   const handleChange = (field, value) => {
//     props.setData(field, value); // Update form state
//     !isEmpty(validationSchema) && handleFieldValidation(field, value); // Validate the field
//   };

//   const handleFieldValidation = async (field, value) => {
//     const errorsClone = structuredClone(props.errors);
//     try {
//       await validationSchema?.validateAt(field, {
//         ...props.data,
//         [field]: value,
//       });
//       props.setError({ ...errorsClone, [field]: undefined }); // Clear error for this field
//     } catch (error) {
//       if (error instanceof Yup.ValidationError) {
//         props.setError({ ...errorsClone, [field]: error.message }); // Set error for this field
//       }
//     }
//   };

//   const isValidForm = async () => {
//     try {
//       if (isEmpty(validationSchema)) return true;
//       await validationSchema.validate(props.data, { abortEarly: false });
//       return true;
//     } catch (error) {
//       handleError(error, props.setError);
//       return false;
//     }
//   };

//   return {
//     ...props,
//     handleChange,
//     isValidForm,
//   };
// }
