import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';
import { handleError } from "@/utils/helper"; // Custom error handler

export default function useForms({ fields = {}, validationSchema }) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: fields,
  });

  // Function to handle individual field changes and trigger validation
  const handleChange = (field, value) => {
    setValue(field, value); // Set value in form
    if (!isEmpty(validationSchema)) {
      handleFieldValidation(field, value); // Trigger field validation
    }
  };

  // Function to validate a single field using Yup
  const handleFieldValidation = async (field, value) => {
    const errorsClone = { ...errors };
    try {
      // Validate single field using validationSchema
      await validationSchema?.validateAt(field, {
        ...fields,  // Using current form field values
        [field]: value,
      });
      setError(field, { type: "manual", message: "" }); // Clear error if validation passes
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setError(field, { type: "manual", message: error.message }); // Set field error if validation fails
      }
    }
  };

  // Function to validate the whole form
  const isValidForm = async () => {
    try {
      if (isEmpty(validationSchema)) return true;
      await validationSchema.validate(fields, { abortEarly: false });
      return true;
    } catch (error) {
      handleError(error, setError);
      return false;
    }
  };

  return {
    register,        // To register fields with the form
    handleSubmit,     // To handle form submission
    setValue,         // To manually set a field value
    setError,         // To manually set a field error
    reset,            // To reset form fields
    watch,            // To watch form field values
    errors,           // Access form validation errors
    handleChange,     // Custom change handler with validation
    isValidForm,      // Validate the entire form
  };
}
