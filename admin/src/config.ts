const config = {
  publicisTablesUrl: setPublicisTableUrl(),
};

function setPublicisTableUrl() {
  if (!process.env.STRAPI_ADMIN_PUBLICIS_TABLES_URL)
    throw new Error("ENV not configured properly");
  return process.env.STRAPI_ADMIN_PUBLICIS_TABLES_URL;
}

export default config;
