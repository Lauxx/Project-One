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


var CommentForm = React.createClass({
	render: function(){
		return(

			<div className="container">
			<div className="row col-xs-4">
			<textarea className="form" rows="5" id="comment">Comment here..</textarea>
            <button>Submit Comment</button>
            </div>
            </div>
			)
	}
});