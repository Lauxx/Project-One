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

    add new text
    and then some more

 */}


var GoalsApp = React.createClass({
	
  render: function() {
    window.thing = this.props.goals;
    var gb = this.props.goals.map(function(g){
         return (
          <div>
          <GoalBoxDisplay intention={g.intention} taskList={g.taskList}
          startDate={g.startDate} endDate={g.endDate}/>
          <CommentBox comments={g.comments}/>
          </div>
          )
    })

    return (
      <div>
        {gb}
        <GoalBoxForm/>
        
       </div>     
      )
  }


});



