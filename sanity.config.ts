import {defineConfig} from 'sanity';
import {structureTool} from "sanity/structure";

const config = defineConfig({
    projectId: 'ajuxh6n2',
    dataset: 'production',
    title: 'Law Firm',
    apiVersion: '2025-02-02',
    basePath: '/admin',
    plugins: [structureTool()],
});

export default config;