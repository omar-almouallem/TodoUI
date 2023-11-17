import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardActions,
  Grid,
  Stack,
  Switch,
} from "@mui/material";

import CenteredTabs from "../CenteredTabs/CenteredTabs";
import { completeTodo, deleteTodo } from "../../services/todo-services";

interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TodoCardProps {
  todos: Todo[];
}

const TodoCard: React.FC<TodoCardProps> = ({ todos }) => {
  const handleUpdateStatusTodo = async (id: string) => {
    await completeTodo(id);
  };

  const handelDeleteTodo = async (id: string) => {
    await deleteTodo(id);
  };

  return (
    <>
      <CenteredTabs />
      <Grid container justifyContent="center" spacing={4} padding="0px 75px">
        {todos &&
          todos.map((todo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={todo._id}>
              <Card sx={{ maxWidth: 345 }} key={todo._id}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {todo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {todo.description}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    justifyContent: "center",
                    flexDirection: "column-reverse",
                  }}
                >
                  <Box>
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={() => handelDeleteTodo(todo._id)}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{ marginRight: "20px" }}
                      size="small"
                      variant="contained"
                    >
                      Edit
                    </Button>
                  </Box>
                  <Box>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Not yet</Typography>
                      <Switch
                        defaultChecked={todo.completed ? true : false}
                        inputProps={{ "aria-label": "ant design" }}
                        color="success"
                        value={todo.completed}
                        onChange={() => handleUpdateStatusTodo(todo._id)}
                      />
                      <Typography>Complete</Typography>
                    </Stack>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default TodoCard;
