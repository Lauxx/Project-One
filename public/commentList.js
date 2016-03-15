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


var CommentList = React.createClass({
	render: function(){
    console.log(this.props.comments, "these are the comments in comment list!");
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