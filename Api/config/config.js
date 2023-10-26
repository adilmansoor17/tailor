module.exports = {
    DB: {
        DB_URL: process.env.DB_URL,
        DB_URL_BACKUP: process.env.DB_URL_BACKUP,
    },
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    URL : process.env.IME_URL,
    PORT: {
        EXPRESS: process.env.EXPRESS_APP_PORT,
        HTTP: process.env.HTTP_SERVER_PORT
    },
  
};
