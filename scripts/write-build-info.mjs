import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const outputFile = resolve('src/data/generatedBuildInfo.ts')
const outputDir = dirname(outputFile)
const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

mkdirSync(outputDir, { recursive: true })
writeFileSync(
  outputFile,
  `export const lastUpdatedDate = ${JSON.stringify(lastUpdatedDate)}\n`
)
