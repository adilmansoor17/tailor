const clearEnvironment = () => {
    delete process.env.DB_URL;
    delete process.env.EXPRESS_APP_PORT;
    delete process.env.HTTP_SERVER_PORT;
};
module.exports = {
    clearEnvironment: clearEnvironment
};
