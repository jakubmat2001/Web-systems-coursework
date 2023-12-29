const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    
    mongoUri: process.env.MONGO_URI ||
    'mongodb://' + (process.env.IP || '127.0.0.1') + ':' + (process.env.MONGO_PORT || '27017')+'/employeeDB/'
  }

export default config;