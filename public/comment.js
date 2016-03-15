/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
      - CommentList
          - Comment
      - CommentForm
    - GoalBoxForm
   

  - UserBioApp
    - UserBioDisplay
    - UserBioForm

    

 */


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
