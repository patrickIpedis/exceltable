/*
 *
 * HomePage
 *
 */

import React, { useEffect } from "react";
import pluginId from "../../pluginId";
import { Box, BaseHeaderLayout, Link } from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";
import config from "../../config";
import styled from "styled-components";

const Wrapper = styled.p`
  padding-left: 56px;
`;

const HomePage = () => {
  const dataTableManagementURL = config.publicisTablesUrl;

  return (
    <>
      <Box background="neutral100">
        <BaseHeaderLayout
          navigationAction={
            <Link startIcon={<ArrowLeft />} to="/">
              Go back
            </Link>
          }
          title="Excel data table management"
          subtitle="Click on the link below to go to the external data table admin panel"
          as="h2"
        />
      </Box>
      <Wrapper>
        <Link href={dataTableManagementURL} isExternal>
          Go to data table admin panel
        </Link>
      </Wrapper>
    </>
  );
};

export default HomePage;
