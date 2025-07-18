// import laravel from 'laravel-vite-plugin';
import laravel, { refreshPaths } from 'laravel-vite-plugin'
import {
    defineConfig
} from 'vite';
import tailwindcss from '@tailwindcss/vite';
import dotenv from 'dotenv';

dotenv.config();
const host = process.env.APP_DOMAIN;

export default defineConfig({
    server: {
        host,
        hmr: {host}
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: [
                ...refreshPaths,
            ],
        })
    ]
});
