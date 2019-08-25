// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)
module.exports = {
    //flag to get Twilio Account Setting from this file or from environment
    // If set to 'Y' , the values are read from config.js and not from environment
    getTwiliAccountSettingsfromFile: 'N',


    // Your primary Twilio Account SID
    accountSid: 'C6a2d473c0a0480cf96cdb8bfa847e774',

    // API Key/Secret Pair - generate a pair in the console
    apiKey: 'SK0238f877b79e3f2c4096bea2900ce76b',
    apiSecret: '4Oavf9T3O2O2xBWUwPSOZtvQYYykICVV',

    // Your Chat service instance SID
    serviceSid: 'ISc12fdc320dd84cbc8e303754e31140d6',

    // Defines whether or not this application is deployed in a production
    // environment
    nodeEnv: process.env.NODE_ENV || 'development',

    // In production, this is the base host name for web app on the public
    // internet, like "jimmysbbq.herokuapp.com".  This should be the same host
    // you use in your Twilio Number config for voice or messaging URLs
    host: process.env.HOST || 'localhost',

    // The port your web application will run on
    port: process.env.PORT || 3000

};