const authConstants = {
  jwt: {
    secret: 'ociJustTime',
    expirationTime: {
      accessToken: '1d',
      refreshToken: '7d',
    },
    secrets: {
      accessToken: 'ociJustTime',
      refreshToken: 'ociJustTime',
    },
  },
  mailer: {
    verifyEmail: {
      subject: 'Email Verification',
      template: 'verify-password',
    },
  },
  redis: {
    expirationTime: {
      jwt: {
        accessToken: 86400, // 1d
        refreshToken: 604800, // 7d
      },
    },
  },
};

export default authConstants;
