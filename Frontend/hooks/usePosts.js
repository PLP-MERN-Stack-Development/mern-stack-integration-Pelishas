import { useState, useEffect } from 'react';
import { postService } from '../client/src/services/api.js';

export const usePosts = (page = 1, limit = 10, category = null) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await postService.getAllPosts(page, limit, category);
        setPosts(response.data);
        setPagination(response.pagination);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, limit, category]);

  const createPost = async (postData) => {
    try {
      const response = await postService.createPost(postData);
      setPosts(prev => [response.data, ...prev]);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updatePost = async (id, postData) => {
    try {
      const response = await postService.updatePost(id, postData);
      setPosts(prev => prev.map(post => 
        post._id === id ? response.data : post
      ));
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deletePost = async (id) => {
    try {
      await postService.deletePost(id);
      setPosts(prev => prev.filter(post => post._id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    posts,
    loading,
    error,
    pagination,
    createPost,
    updatePost,
    deletePost
  };
};