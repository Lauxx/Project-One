/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
      - CommentForm
    - GoalBoxForm
   

  - UserBioApp
    - UserBioDisplay
    - UserBioForm
 */
var GoalBoxForm = require('./goalBoxForm');
var GoalBoxDisplay = require('./goalBoxDisplay');

var React = require('react');

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
  },



  render: function() {
    var self = this;
    var gid = " ";
    var links = this.props.goals.map(function(l){
      return (
        <div>
          <a className="goal-nav" onClick={self.handleLinkClick.bind(this, l._id)}> {l.intention} </a>
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
          loadGoalsFromServer={ self.props.loadGoalsFromServer } 
          intention={g.intention} taskList={g.taskList}
          startDate={g.startDate} endDate={g.endDate} commentsArray={g.comments} />
          
          </div>
          )
    })

    
    return (
      <div className='container'>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
             <a className="navbar-brand legend ">Your Working Goals</a>
               
             <ul className="nav navbar-nav ">
               <li className="active legend goal-nav">
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

module.exports = GoalsApp;

