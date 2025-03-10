import { readFileSync } from 'node:fs'


export function readPackageJson() {
  const packageJson = readFileSync('./package.json', 'utf-8')
  return JSON.parse(packageJson)
}
