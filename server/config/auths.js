// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1874757336084999', // your App ID
        'clientSecret'  : 'b5ac25d341d1fe688fc153ec0445bc17', // your App Secret
        'callbackURL'   : 'http://54.183.209.215/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : '5P6t0RBgM9UtJtMxUdyO5Xg5K',
        'consumerSecret'    : 'uBdmqBiaxaYHlvGdkosNwqUcmM7I07tWdLl518NZzuHNjxCefC',
        'callbackURL'       : 'http://54.183.209.215/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '875266097111-4fiss65a6hrl12lq2ivsrbsakov432tf.apps.googleusercontent.com',
        'clientSecret'  : 'mQrtJ7RwFQySQCBQe455DdoM',
        'callbackURL'   : 'http://54.183.209.215/auth/google/callback'
    }

};
