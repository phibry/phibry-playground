import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command }) => {
    const config = {
        base: "/",
        plugins: [react()],
    };

    if (command !== "serve") {
        config.base = "/phibry-playground/";
    }

    return config;
});
