require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    apps: [
        {
            name: process.env.APP_NAME || 'pera-front-end',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            instances: 1, // Utilize all CPU cores in production
            exec_mode: process.env.NODE_ENV === 'production' ? 'cluster' : 'fork', // Cluster mode for better performance
            watch: false,
            env: {
                NODE_ENV: process.env.NODE_ENV || 'development',
                PORT: process.env.PORT || 3000,
            },
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            error_file: './logs/pm2-error.log',
            out_file: './logs/pm2-out.log',
            merge_logs: true,
        },
    ],
};
