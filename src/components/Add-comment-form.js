import React from "react";


export default class Comment extends React.Component {
    constructor() {
        super()
        state = {
            comments: []
        }

        const showPostComments = async (id) => {

            let response = [await axios.get(`https://odat-posts-database.herokuapp.com/post/${id}`)];
            console.log(response[0].data.CommentTables, 'new problem')
            let comments = response[0].data.CommentTables;
    
    
            console.log(comments[0].postID, 'line 54')
    
            for (let i = 0; i < comments.length; i++) {
                if (comments[i].postID == id) {
                    console.log(comments[i].commentBody, 'from for loop')
                    let comments = this.state.comments;
                    comments = comments[i].commentBody;
                    
                }
            }
    
    
        }
    }

    render () {
        <div>
            <button onClick={showPostComments}> Show comments </button>
        </div>

    }
}