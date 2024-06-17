import { create } from "zustand";
import { createClient } from "contentful";

const client = createClient({
  space: "ytbp6lyzlupm",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useProjectsStore = create((set) => ({
  projects: [],
  loading: true,
  languageEnglish: true,

  fetchProjects: async () => {
    try {
      const response = await client.getEntries({ content_type: "portfolio" });
      const projects = response.items.map((item) => {
        const { title, url, img, text, githubUrl, tags } = item.fields;
        console.log(tags);
        const id = item.sys.id;
        const image = img?.fields?.file?.url;
        return { title, url, id, image, text, githubUrl, tags };
      });
      if (projects.length > 0) {
        set({ loading: false, projects });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
