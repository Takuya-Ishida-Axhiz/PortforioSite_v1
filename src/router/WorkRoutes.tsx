import { WorksPage } from "../pages/WorksPage";
import { WorkDetailPage } from "../pages/WorkDetailPage";
// import { Section } from "../organisms/layout/Section";
import Layout from "../organisms/layout/article";

export const workRoutes = [
  {
    path: "/",
    exact: true,
    children: (
      <Layout title="Works">
        <WorksPage />
      </Layout>
    ),
  },
  {
    path: "/:index",
    exact: false,
    children: (
      <Layout title="Works">
        <WorkDetailPage />
      </Layout>
    ),
  },
];
