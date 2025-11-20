import { useState, useEffect } from 'react';
import { postService, categoryService } from '../client/src/services/api.js';

const PostForm = ({ postId, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: '',
    isPublished: false
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.getAllCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();

    if (postId) {
      const fetchPost = async () => {
        try {
          const response = await postService.getPost(postId);
          const post = response.data;
          setFormData({
            title: post.title,
            content: post.content,
            excerpt: post.excerpt,
            category: post.category._id,
            tags: post.tags.join(', '),
            isPublished: post.isPublished
          });
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
      fetchPost();
    }
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim())
      };

      if (postId) {
        await postService.updatePost(postId, postData);
      } else {
        await postService.createPost(postData);
      }

      onSuccess && onSuccess();
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>{postId ? 'Edit Post' : 'Create New Post'}</h2>
      
      <input
        type="text"
        name="title"
        placeholder="Post Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      
      <textarea
        name="excerpt"
        placeholder="Post Excerpt"
        value={formData.excerpt}
        onChange={handleChange}
        rows="3"
      />
      
      <textarea
        name="content"
        placeholder="Post Content"
        value={formData.content}
        onChange={handleChange}
        rows="10"
        required
      />
      
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        value={formData.tags}
        onChange={handleChange}
      />
      
      <label>
        <input
          type="checkbox"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleChange}
        />
        Publish Post
      </label>
      
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : (postId ? 'Update Post' : 'Create Post')}
      </button>
    </form>
  );
};

export default PostForm;