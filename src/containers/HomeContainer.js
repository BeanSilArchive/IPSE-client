import React from "react";

import PageTemplate from "containers/PageTemplate";
import Info from "components/Home/Info";
import Notice from "components/Home/Notice";
import QnAInfo from "components/Home/QnAInfo";

const HomeContainer = () => {
  return (
    <PageTemplate>
      <Info />
      <Notice />
      <QnAInfo />
    </PageTemplate>
  );
};

export default HomeContainer;
