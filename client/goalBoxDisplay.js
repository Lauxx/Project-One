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
var CommentForm = require('./commentForm');
var React = require('react');

var GoalBoxDisplay = React.createClass({
  getInitialState: function(){
    return {
      comments: [],
    }
  },

  loadCommentsFromServer: function(){
    
    var self = this; 
    var id = this.props.id;
    $.ajax({
      url: this.props.urlGoal + id +'/comment',
      method: 'GET',
    }).done(function(comment){
     
      self.setState({ 
        comments: comment.comments
      })
    })
  },

  handleCommentFormSubmit: function(comment, id){
    console.log("I AM BEING CALLED", comment);
    $.ajax({
      url: this.props.urlGoal + id +'/comment',
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data){
        console.log(data, 'this is comment data');
        this.loadCommentsFromServer();
        this.props.loadGoalsFromServer();
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },


  componentDidMount: function(){
    this.loadCommentsFromServer();
  },

	render: function(){
    

    var self = this;
    var task = this.props.taskList.map(function(t){
      return (
        <div>
          <ul>
            <li className='checkbox' >{ t }<label><input type="checkbox" value=""/></label>
            </li>
          </ul>
        </div>

        )
    })
    var comm = this.props.commentsArray.map(function(c){
      var username = c.user ? c.user.local.username : 'no user';
         return (
          <div>
            <ul>
              <li> {username} </li>
              <li> {c.body} </li> 
              <li> {c.date} </li>
            </ul>
          </div>
       )
    });

    if (this.props.activeGoal == this.props.id ) {
      var self = this;

        return(
          <div>
           <div className="container col-xs-10 col-xs-offset-1">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Goals</h3>
              </div>
              <div className="panel-body">
                <p>{this.props.intention}</p>
                  <div className = 'row'>
                    <p>Start Date</p>
                    <p>{this.props.startDate}</p>
                  </div>
                  <div className='row'>
                    <p>End Date</p>
                    {this.props.endDate}
                  </div>
                  <div className='row'>
                    { task } 
                  <div>
                  </div>
                    { comm }
                  </div>
                   <CommentForm id={ this.props.id } 
                    handleCommentFormSubmit={ this.handleCommentFormSubmit } />     
                  </div>
                </div>
              </div> 
            </div>
          )
        }
        
  return (

      <div>
        
      </div>

    ) 
  }
});

module.exports = GoalBoxDisplay;