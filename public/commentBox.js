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
    console.log(this.props.comments)
		return(
			<div>
			<CommentList comments={ this.props.comments }/>
			</div>
			)
	}
});