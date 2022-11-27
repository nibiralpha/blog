import { CloseOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Col, Row, Typography, Avatar, Modal, Empty } from 'antd';
import React from 'react';
import { BlogModel } from '../../model/Blog.model';
import { useDispatch } from 'react-redux';
import { removeBlog } from '../../store/blogs';

import './index.less';
const { Title, Text } = Typography;

type Props = {
    blogs: BlogModel[]
}

const BlogsComponent = ({ blogs }: Props) => {
    const dispatch = useDispatch()

    const confirm = (blog: BlogModel): void => {
        Modal.confirm({
            title: 'Are you sure ?',
            icon: <ExclamationCircleOutlined />,
            content: 'You want to delete this post ?',
            okText: 'Delete',
            cancelText: 'Cancel',
            onOk: () => {
                remove(blog)
            }
        });
    };


    const remove = (blog: BlogModel) => {
        dispatch(removeBlog(blog))
    }

    return (
        <div>
            {blogs.length == 0 ? (<Empty />) : (
                <Row gutter={[0, 25]}>
                    {
                        blogs.map((blog: BlogModel) => {
                            return <Col key={blog.post.id} span={24} className="wrapper">
                                <div className='title-area'>
                                    <Title>{blog.post.title}</Title>
                                    <CloseOutlined onClick={() => { confirm(blog) }} className='close' />
                                </div>
                                <div className='user'>
                                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                                    <div className='user-name'>{blog.author.name}</div>
                                </div>
                                <Text>
                                    {blog.post.body}
                                </Text>
                                <div className='footer'>
                                    <Text type="secondary">Comments ({blog.comments.length})</Text>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            )}

        </div>
    );
};

export default BlogsComponent;
