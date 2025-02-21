import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit';

const config = {
    kit: {
        adapter: adapter(),
        csrf: false, // To avoid CSRF issues in AWS
    },
    preprocess: vitePreprocess(),
};

export default config;
