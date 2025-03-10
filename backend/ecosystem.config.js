require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    apps: [
        {
            name: 'pera-hizmet',
            script: 'dist/index.js',
            instances: "max", // Utilize all CPU cores
            exec_mode: "cluster",  // Enable cluster mode for better CPU utilization
            watch: false,
            env: {
                NODE_ENV: 'production',
                PORT: 4000,
            },
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            error_file: './logs/pm2-error.log',
            out_file: './logs/pm2-out.log',
            merge_logs: true,
        },
    ],
};
