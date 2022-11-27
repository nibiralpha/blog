import React, { useEffect, useState } from 'react';
import './landing.less';
import { connect } from 'react-redux';
import { getPosts } from '../../../service/getPosts';
import BlogsComponent from '../../../Components/Blogs';
import { BlogModel } from '../../../model/Blog.model';
import { BlogState } from '../../../store/blogs';
import { LoadingOutlined } from '@ant-design/icons';

type props = {
  getAllPosts: Function,
  blogs: BlogState
}

const Landing = ({ getAllPosts, blogs }: props) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getAllPosts();
  };


  return (
    <div className="main-container">
      {blogs.loading ? <div className='loading'><LoadingOutlined style={{ fontSize: '30px' }} /></div> : (
        <>
          <div>
            <img style={{ width: '100%' }} src='/images/hero-img.jpg'></img>
          </div>
          <div className='body-container'>
            <div className='blog-container'>
              <BlogsComponent blogs={blogs.blogs}></BlogsComponent>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {

  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = {
  getAllPosts: getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);


