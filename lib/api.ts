import axios from 'axios';

// export const revaalidate = 60;

export const fetchBlogPosts = async () => {
  const BASE_URL = 'https://dev.to/api/articles';
  try {
    const response = await axios.get(BASE_URL);

    return response.data;
  } catch (error: any) {
    console.error('Error fetching blog posts:', error.message);
    // Return an empty array or fallback data
    return [];
  }
};

export const fetchBlogPostDetail = async (id: string) => {
  const BASE_URL = 'https://dev.to/api/articles';
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);

    return response.data;
  } catch (error: any) {
    console.error('Error fetching blog post:', error.message);
    // Return an empty array or fallback data
    return null;
  }
};
