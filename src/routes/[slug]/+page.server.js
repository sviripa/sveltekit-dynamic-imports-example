const pageComponents = {
  foo: ['Section', 'Banner'],
  bar: ['Section'],
  baz: ['Banner']
}

export const load = ({ params }) => {
  return {
    components: pageComponents[params.slug]
  }
}