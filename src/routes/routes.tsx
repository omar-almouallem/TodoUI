import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import AllTodo from "../pages/All";
import Completed from "../pages/Completed";
import Active from "../pages/Active";

export interface RoutesProps {
  x?: boolean;
}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route index />
        <Route>
          <Route path="all" element={<AllTodo />} />
          <Route path="completed" element={<Completed />} />
          <Route path="active" element={<Active />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
