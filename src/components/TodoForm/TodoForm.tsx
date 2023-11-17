import React from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import {
  TextField,
  Typography,
  Button,
  CssBaseline,
  Paper,
} from "@mui/material";

import useStyles from "./styles";

import { createTodos } from "../../services/todo-services";
import { validationSchema } from "../../libs/yup";

const FormTodo = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await createTodos(values);
        formik.resetForm();
        toast.success(" A new todo has been created successfully");
      } catch (error: any) {
        console.error("Failed to create a new todo", error);
        if (error.response) {
          const errorMessage = error.response.data.message;
          formik.setErrors(errorMessage);
        }
      }
    },
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
  });

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h3"> Todo List</Typography>
          <br />
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              label="Title"
              fullWidth
              autoFocus
              required
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title ? (
              <Typography variant="body2" color="error">
                {formik.errors.title}
              </Typography>
            ) : null}
            <TextField
              margin="normal"
              label="Description"
              maxRows={3}
              multiline
              fullWidth
              required
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description ? (
              <Typography variant="body2" color="error">
                {formik.errors.description}
              </Typography>
            ) : null}
            <Button
              type="submit"
              variant="contained"
              disableElevation
              fullWidth
              color="success"
            >
              Add Todo
            </Button>
          </form>
        </Paper>
      </main>
    </>
  );
};

export default FormTodo;
