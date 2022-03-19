import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { AboutPage } from "../pages/About";
import { HomePage } from "../pages/HomePage";
import { Page404 } from "../pages/Page404";
import { SkillsPage } from "../pages/SkillsPage";
import { HeaderLayout } from "../template/HeaderLayout";
import { workRoutes } from "./WorkRoutes";

export const Router: VFC = memo(() => {
  return (
    <HeaderLayout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route
          path="/works"
          render={({ match: { url } }) => (
            <Switch>
              {workRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        ></Route>

        <Route path="/about" exact>
          <AboutPage />
        </Route>

        <Route path="/skills" exact>
          <SkillsPage />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </HeaderLayout>
  );
});
