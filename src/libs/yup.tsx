import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup
    .string()
    .max(30, "Title must not be more than 30 characters")
    .required("Title is required"),
  description: yup
    .string()
    .max(100, "Description must not be more than 100 characters")
    .required("Description is required"),
});
