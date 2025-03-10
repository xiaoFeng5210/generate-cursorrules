import { readFileSync } from 'node:fs'


export function readPackageJson() {
  const packageJson = readFileSync('./package.json', 'utf-8')
  return JSON.parse(packageJson)
}

export function getDependencies() {
  const { dependencies = {}, devDependencies = {} } = readPackageJson()

  return {
    ...dependencies,
    ...devDependencies,
  }
}

export function generateOverview() {
  const allDependencies = getDependencies()
  
  const description = Object.keys(allDependencies).map(key => {
    
  })


}

const overviewDescription = {
  vue: 'Vue is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and can be used in combination with other libraries or existing projects.',
  react: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.',
  'vue-router': 'Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building single page applications with Vue.js a breeze.',
  'vuex': 'Vuex is a state management pattern + library for Vue.js. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
  'pinia': 'Pinia is a state management library for Vue.js. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
  'react-router': 'React Router is a library for routing in React. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
  'react-router-dom': 'React Router is a library for routing in React. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
}
