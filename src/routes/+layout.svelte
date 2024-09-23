<script>
  import { page } from "$app/stores";

  console.log();
</script>

<nav>
  <a href="/foo" class:active={$page.params.slug === "foo"}>
    Foo (Section & Banner)
  </a>
  <a href="/bar" class:active={$page.params.slug === "bar"}>
    Bar (Only section)
  </a>
  <a href="/baz" class:active={$page.params.slug === "baz"}>
    Baz (Only banner)
  </a>
</nav>

<slot />

<style>
  nav {
    display: flex;
    gap: 2rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px dashed black;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a.active {
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
