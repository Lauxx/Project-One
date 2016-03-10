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


var GoalsApp = React.createClass({
	
  render: function() {
    return (
      <div>
       <GoalBoxDisplay/>
       <GoalBoxForm/>
        <CommentBox/>
       </div>     
      )
  }


});



