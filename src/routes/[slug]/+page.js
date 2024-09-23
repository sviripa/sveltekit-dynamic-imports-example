export const load = async ({ data: {components: componentNames} }) => {

  const componentPromises = componentNames.map((name) => import(`../../components/${name}.svelte`))
  const componentModules = await Promise.all(componentPromises)
  const components = componentModules.map((module) => module.default)

  return {
    components,
  }
}