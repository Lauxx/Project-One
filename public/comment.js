{/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
    - GoalBoxForm
    - CommentBox
      - CommentList
        - Comment
      - CommentForm

  - UserBioApp
    - UserBioDisplay
    - UserBioForm

 */}


var Comment = React.createClass({
	render: function(){


		return(
			<div className="container">
			<div className="row">
  			<p> {this.props.commentAuthor} </p>
        <p> {this.props.commentBody} </p>
        <p> {this.props.commentDate} </p>
			</div>
			</div>

			)
	}
})
