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


var GoalsApp = React.createClass({

  

  getInitialState: function() {
    return { 
      activeGoal: "56e2f73474059b61031e5e25"
    }
  },

  handleLinkClick: function(id) {
    this.setState({ activeGoal: id });
  },
	
  showGoal: function (item, id) {
    if (this.state.activeGoal == id) {
       return item;
     } 
   
    /*return goal with id = to activeGoal;*/
  },



  render: function() {
    var self = this;
    var gid = " ";
    var links = this.props.goals.map(function(l){
      return (
        <div>
          <a onClick={self.handleLinkClick.bind(this, l._id)}> {l.intention} </a>
        </div>
        )
    })
    
    var gb = this.props.goals.map(function(g){
        
          gid = g._id;
      if(g.comments.length > 0){
        var comments = g.comments;
      } else {
        var comments = ['Be the first to comment!'];
      };
         return (
          <div>
      
          <GoalBoxDisplay urlGoal='/api/visionboard/' id={g._id} activeGoal={self.state.activeGoal} 
          intention={g.intention} taskList={g.taskList}
          startDate={g.startDate} endDate={g.endDate} commentsArray={g.comments} />
            
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



