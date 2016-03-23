/*
- UserBox
- VisionBoard

  -PictureBoardDisplay
    -PictureBoardForm

  - GoalsApp
    - GoalBoxDisplay
      - CommentForm
    - GoalBoxForm
   

  - UserBioImageApp
    - UserBioApp
   
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
            <li >{ t }
            </li>
          </ul>
        </div>

        )
    })
    var comm = this.props.commentsArray.map(function(c){
      var user = c.user ? c.user.local : 'no user';
         return (
          <div>

                <div className="legend">
                  
                  <section>
                  <img src={user.profileImage} height="50px" width="50px"/>
                  <p>@{user.username} </p>
                  </section>
                  <section> 
                  <p>{c.body} </p>
                  </section> 
                  <section className="line"> 
                  <p className="date-size"> {c.date.substr(0,10)} </p>
                  </section>
                </div> <br/><br/>

          </div>
       )
    });

    if (this.props.activeGoal == this.props.id ) {
      var self = this;

        return(
          <div>
           <div className="container col-xs-10 col-xs-offset-1">
            <div className="jumbotron jumbo">

                <div className="legend">
                 <h2 className='legend line'>Goal Title</h2>
                    <p>{this.props.goalTitle}</p>
                  <h3 className="legend"> Intention:</h3>
                    <p>{this.props.intention}</p>
                      <div className = 'row margin-left'>
                        <h3>Start Date</h3>
                        <p>{this.props.startDate}</p>
                      </div>
                      <div className='row margin-left'>
                        <h3>End Date</h3>
                        <p> {this.props.endDate} </p>
                      </div>
                      <div className='row'>
                        <h3 className="legend margin-left">Steps to completing your goal</h3>
                        { task }     
                      </div> <br/><br/>
                          <div className="col-lg-8 col-lg-offset-2">
                          <h3 className="legend line">Comments</h3>
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