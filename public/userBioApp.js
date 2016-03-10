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
 

var UserBioApp = React.createClass({
	render: function(){
		return(
			<div>
			<UserBioDisplay/>
			<UserBioForm/>
			</div>
			)
	}
});