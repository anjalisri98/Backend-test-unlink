const paths = require ('./paths');

const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'api Documentation',
    description: 'Documentation in swagger'
  },
  servers: [
    {
      url: 'http://localhost:8002/',
      description: 'Local Server',
    },
  ],
  paths: paths,
};
export { apiDocumentation };
