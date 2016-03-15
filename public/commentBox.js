{/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
       - CommentBox
        - CommentList
          - Comment
        - CommentForm
    - GoalBoxForm
   

  - UserBioApp
    - UserBioDisplay
    - UserBioForm

 */}


var CommentBox = React.createClass({
  
	render: function(){
		return(
			<div>
			<CommentList comments={this.props.commentsArray}/>
			<CommentForm />
			</div>
			)
	}
});