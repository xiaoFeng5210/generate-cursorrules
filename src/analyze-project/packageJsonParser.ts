import { readFileSync } from 'node:fs'


function readPackageJson() {
  const packageJson = readFileSync('./package.json', 'utf-8')
  return JSON.parse(packageJson)
}

function getDependencies() {
  const { dependencies = {}, devDependencies = {} } = readPackageJson()

  return {
    ...dependencies,
    ...devDependencies,
  }
}

function getPackageType() {
  // 由此判断出到底是什么项目，vue? react? node?
  const allDependencies = getDependencies()
  if (Object.keys(allDependencies).includes('vue')) {
    return overviewDescription['vue']
  }
  if (Object.keys(allDependencies).includes('react')) {
    return overviewDescription['react']
  }
  if (readPackageJson().type === 'module') {
    return overviewDescription['esm']
  }
  if (readPackageJson().type === 'commonjs') {
    return overviewDescription['commonjs']
  }
}

export function generateOverview() {
  const allDependencies = getDependencies()

  const description = Object.keys(allDependencies).map(dependency => {
    if (dependency in overviewDescription) {
      return overviewDescription[dependency]
    }
    return ''
  }).filter(Boolean).join('. ')

  return description
}

const overviewDescription = {
  vue: 'Vue is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and can be used in combination with other libraries or existing projects.',
  react: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.',
  'vue-router': 'Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building single page applications with Vue.js a breeze.',
  'vuex': 'Vuex is a state management pattern + library for Vue.js. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
  'pinia': 'Pinia is a state management library for Vue.js. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
  'react-router': 'React Router is a library for routing in React. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
  'react-router-dom': 'React Router is a library for routing in React. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
  esm: 'ESM is a module system for JavaScript. It is a standard for loading modules in JavaScript. It is a standard for loading modules in JavaScript.',
  commonjs: 'CommonJS is a module system for JavaScript. It is a standard for loading modules in JavaScript. It is a standard for loading modules in JavaScript.',
}
