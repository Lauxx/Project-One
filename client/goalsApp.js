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
          <a className="goal-nav" onClick={self.handleLinkClick.bind(null, l._id)}> {l.goalTitle} </a>
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
          intention={g.intention} taskList={g.taskList} goalTitle={g.goalTitle}
          startDate={g.startDate} endDate={g.endDate} commentsArray={g.comments} />
          
          </div>
          )
    })

    if(!this.props.guest) {
      var gf = <GoalBoxForm ableToSubmit={this.props.handleGoalSubmit} ableToDelete={this.props.handleGoalDelete} />;
    } else {
      var gf = null;
    }

    
    return (
      <div className='container'>
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="container-fluid">
      
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
                <p className="navbar-brand legend">My VisiB</p>
            </div>
  
      
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-left">
                <li className="dropdown black">
                  <a href="#" className="dropdown-toggle legend" data-toggle="dropdown">Your Goals<b className="caret"></b></a>
                  <ul className="dropdown-menu navbar-inverse">
                    <li className="legend"><link/>{ links }</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        { gb }
        { gf }

      </div>     
      )
  }

});

module.exports = GoalsApp;

