import React from "react";

import PageTemplate from "containers/PageTemplate";
import Info from "components/Info";
import Notice from "components/Notice";
import QnAInfo from "components/QnAInfo";

const Home = () => {
  return (
    <PageTemplate>
      <Info />
      <Notice />
      <QnAInfo />
    </PageTemplate>
  );
};

export default Home;
