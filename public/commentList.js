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


var CommentList = React.createClass({
	render: function(){

    var comm = this.props.comments.map(function(c){
         return (
          <Comment commentAuthor={c.user} commentBody={c.body} commentDate={c.date}/>
       )
    })

		return(
			<div>
			 { comm }
			</div>
			)
	}
});