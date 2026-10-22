// Builds links that keep working when the site is served from a subfolder (GitHub Pages)
export const url = (path: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + path;