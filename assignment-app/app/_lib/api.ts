import type { Company, Country, Post } from "../_types/emission";
import { companies, countries, posts } from "./mock-data";

const _countries: Country[] = [...countries];
const _companies: Company[] = [...companies];
const _posts: Post[] = [...posts];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const jitter = () => 200 + Math.random() * 600;
const maybeFail = () => Math.random() < 0.15;

export async function fetchCountries() {
  await delay(jitter());
  return _countries;
}

export async function fetchCompanies() {
  await delay(jitter());
  return _companies;
}

export async function fetchPosts() {
  await delay(jitter());
  return _posts;
}

export async function createOrUpdatePost(p: Omit<Post, "id"> & { id?: string }) {
  await delay(jitter());

  if (maybeFail()) {
    throw new Error("Save failed");
  }

  if (p.id) {
    const updated = p as Post;
    _posts = _posts.map((post) => (post.id === updated.id ? updated : post));
    return updated;
  }

  const created: Post = {
    ...p,
    id: crypto.randomUUID(),
  };

  _posts = [..._posts, created];

  return created;
}