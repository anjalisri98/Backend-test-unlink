
const getHealthy = {
  tags: ['Rides'],
  description: 'Get Healthy',
  operationId: 'GetHealthy',
  responses: {
    '200': {
      description: 'Get Healthy',
    },
    '500': {
      description: 'Internal server error',
    },
  },
};
const postRides = {
  tags: ['Rides'],
  description: 'Post rides',
  operationId: 'Post Rides',
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            startLatitude: {
              type: 'number',
              example: 1,
            },
            startLongitude: {
              type: 'number',
              example: 1,
            },
            endLatitude:{
              type: 'number',
              example: 1,
            },
            endLongitude:{
              type: 'string',
              example: 'sample',
            },
            riderName:{
              type: 'string',
              example: 'sample',
            },
            driverName:{
              type: 'string',
              example: 'sample',
            },
            driverVechile:{
              type: 'string',
              example: 'sample',
            }
          },
        },
      },
    },
    required: true,
  },
  responses: {
    '201': {
      description: 'Ride posted successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '6374e19dac314421985f43f5',
              },
              startLatitude: {
                type: 'number',
                example: 1,
              },
              startLongitude: {
                type: 'number',
                example: 1,
              },
              endLatitude: {
                type: 'number',
                example: 1,
              },
              riderName:{
                type: 'string',
                example: 'sample',
              },
              driverName:{
                type: 'string',
                example: 'sample',
              },
              driverVechile:{
                type: 'string',
                example: 'sample',
              }
            },
          },
        },
      },
    },
  },
};

const getRides= {
  tags: ['Rides'],
  description: 'Get Rides List',
  operationId: 'getRides',
  responses: {
    '200': {
      description: 'Returns List of Rides or Empty Array',
    },
    '500': {
      description: 'Internal server error',
    },
  },
};


const getRidesById = {
  tags: ['Rides'],
  description: 'Get rides by id',
  operationId: 'getRidesById',
  parameters: [
    {
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'string',
        example: '63bfbcb68da67f4c57cc3b29',
      },
      description: 'Ride ID',
    },
  ],
  responses: {
    '200': {
      description: 'Rides',
    },
    '404': {
      description: 'Rides not found',
    },
    '500': {
      description: 'Internal server error',
    },
  },
};


export { getHealthy, postRides, getRides, getRidesById};
