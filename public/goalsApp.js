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
    window.thing = this.props.goals;
    var gb = this.props.goals.map(function(g){
         return (
          <GoalBoxDisplay intention={g.intention} taskList={g.taskList}
          startDate={g.startDate} endDate={g.endDate}/>
       )
    })

    return (
      <div>
        {gb}
        <GoalBoxForm/>
        <CommentBox />
       </div>     
      )
  }


});



