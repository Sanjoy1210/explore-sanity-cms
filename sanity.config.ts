import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID;
// const dataset = process.env.SANITY_STUDIO_API_DATASET;

export default defineConfig({
  basePath: '/studio',
  name: 'SANJOY_Content_Studio',
  title: 'SANJOY Content Studio',

  projectId: 'irbsgdeq',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
