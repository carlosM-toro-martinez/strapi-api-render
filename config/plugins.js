module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'potosi',
          api_key: '914769589592892',
          api_secret: '0K_-Qk936xCEvF4IdrU52HBCvqY'
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });