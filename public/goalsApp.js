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

  handleLinkClick: function(id) {
    console.log(id);
  },
	
  render: function() {
    var self = this;
    var links = this.props.goals.map(function(l){
      return (
        <div>
          <a onClick={self.handleLinkClick.bind(this, l._id)}> {l.intention} </a>
        </div>
        )
    })
    window.thing = this.props.goals;
    var gb = this.props.goals.map(function(g){
      if(g.comments.length > 0){
        var comments = g.comments;
      } else {
        var comments = ['Be the first to comment!'];
      };
         return (
          <div>
          <GoalBoxDisplay intention={g.intention} taskList={g.taskList}
          startDate={g.startDate} endDate={g.endDate}/>
          <CommentBox commentsArray={comments} />
          </div>
          )
    })

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
             <a className="navbar-brand" href="#">Title</a>
             <ul className="nav navbar-nav">
               <li className="active">
                 {links}
               </li>
        
             </ul>
           </div>
         </nav>
        {gb}
        <GoalBoxForm ableToSubmit={this.props.handleGoalSubmit} ableToDelete={this.props.handleGoalDelete} />
       </div>     
      )
  }


});



