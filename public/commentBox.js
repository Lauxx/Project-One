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


var CommentBox = React.createClass({
  
	render: function(){
		return(
			<div>
			<CommentList comments={this.props.commentsArray}/>
			<CommentForm ableToSubmitComment={this.props.ableToComment}/>
			</div>
			)
	}
});