import React from "react";
import { useContext } from 'react';
import { postContext } from '../Context/PostContext'
import {
    FormControl,
    Input,
    Textarea,
    HStack, VStack, StackDivider

} from '@chakra-ui/react'
import './Main.css'


export default function AddPost() {
    const { getPosts, addPost, updatePost, deletePost, editButton, createComment, showPostComments, posts, setPosts, showPosts, setShowPosts, renderComments, setRenderComments, postCommentID, setPostCommentID, postsCounter, setPostsCounter, adminDetector, setAdminDetector, showEditForm, setShowEditForm, canDo } = useContext(postContext)

    // https://odat-posts-database.herokuapp.com
    // http://localhost:3001

    return (
        <div className="App">

            <FormControl onSubmit={addPost} hidden>
                <Input type="text" name='postTitle' className="post-title" placeholder="Post Title" />
                <Textarea type="text" name='postBody' className="post-title" placeholder="Type something..." />
                <Input type="submit" value="Add Post" />

            </FormControl>

            <HStack spacing={8}>
                <div className='post-form-wrapper'>
                    <form onSubmit={addPost} >
                        <input type="text" name='postTitle' className="post-title" placeholder="Post Title" />
                        <textarea type="text" name='postBody' className="post-title" placeholder="Type something..." />

                        <input type="submit" value="Add Post" id="main-button" />
                    </form>
                    <form onSubmit={getPosts}>
                        <input type="submit" value="Show All Posts" id="main-button" />

                    </form>

                </div>

            </HStack>

            {
                posts.map((post, idx) => {
                    return (
                        
                        <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={4}
                            align='stretch'
                        >       <div className="posts-list">
                                <div key={idx} className='post-box'>
                                    <h2 className="post-title">{post.postTitle}</h2>
                                    <p>{post.postBody}</p>
                                    <p className="posted-by">{`Posted by ${post.userName}`}</p>

                                    <div className="buttons-carrier">

                                        {!showEditForm &&
                                            <>
                                                <button onClick={editButton} className='secondary-buttons' value={post.userName} name='author'> Edit Post </button>
                                            </>}
                                        {showEditForm &&
                                            <form onSubmit={updatePost}>
                                                <input value={post.id} hidden name='postID' />
                                                <input type="text" name='postTitle' className="post-title" placeholder="New Post Title" />
                                                <textarea type="text" name='postBody' className="post-title" placeholder="Type something..." />
                                                <input value={post.userName} hidden name='author' />
                                                <button> Update! </button>
                                            </form>
                                        }

                                        {adminDetector &&
                                            <button onClick={() => deletePost(post.id)} className='secondary-buttons'> Delete Post </button>}
                                        <button onClick={() => showPostComments(post.id)} className='secondary-buttons'> Show Comments </button>
                                    </div>
                                    {post.id == postCommentID &&
                                        renderComments.map((comment, idx) => {
                                            return (
                                                <div key={idx} className='post-box'>

                                                    <p>{comment}</p>

                                                </div>

                                            )
                                        })
                                    }

                                    <form onSubmit={createComment} >
                                        <textarea type='text' name="comment" />
                                        <input value={post.id} hidden name='postID' />
                                        <button type="submit" className="comment-button"> Add a comment</button>
                                    </form>


                                </div>
                            </div>
                        </VStack>

                    )
                })
            }

        </div>
    );

}

