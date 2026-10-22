// Optional backend base URL. Leave empty for the static site; when set at
// build time (VITE_API_BASE), contact and newsletter submissions are POSTed
// to the API endpoints there instead.
const API_BASE = ((import.meta as any).env?.VITE_API_BASE ?? '').replace(/\/+$/, '');
export { API_BASE };
