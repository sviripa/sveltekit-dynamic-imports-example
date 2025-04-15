export const load = async ({ data: { components: componentNames } }) => {
  let components = [];

  if (componentNames.includes("Banner")) {
    const module = await import("../../components/Banner.svelte");
    components.push(module.default);
  }

  if (componentNames.includes("Section")) {
    const module = await import("../../components/Section.svelte");
    components.push(module.default);
  }

  return {
    components,
  };
};
