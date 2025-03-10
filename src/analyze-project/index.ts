import { generateOverview } from './packageJsonParser'

export default function main() {
  const contentsMap = new Map()

  contentsMap.set('overview', generateOverview())

  console.log(contentsMap.get('overview'))

  return contentsMap





}

main()



