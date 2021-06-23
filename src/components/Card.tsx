import React from "react";
import LGCard from "@leafygreen-ui/card";
import styled from "@emotion/styled";

const Layout = styled.div`
  padding: 8px;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export default function Card({ children, ...props }: { children: any}) {
  return (
    <LGCard {...props}>
      <Layout>{children}</Layout>
    </LGCard>
  );
}
