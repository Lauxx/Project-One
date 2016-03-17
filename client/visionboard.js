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
var UserBioApp = require('./userBioApp');
var GoalsApp = require('./goalsApp');
var PictureBoardDisplay = require('./pictureBoardDisplay');
var React = require('react');
var ReactDOM = require('react-dom');

var VisionBoard = React.createClass ({
  getInitialState: function() {
    return {
      user: {},
      goals: [],
      imageUrl: [],
    }
  },

  loadUserFromServer: function() {
    
    var self = this; 
    $.ajax({
      url: this.props.url,
      method: 'GET',
    }).done(function(bio){
      self.setState({
        user: bio
      })
    })
  },

  loadGoalsFromServer: function(){
    
    var self = this;
    var id = this.state.user._id;
    $.ajax({
      url: this.props.urlVision + id,
      method: 'GET',
    }).done(function(goal){
   
      self.setState({
        goals: goal
      })
    })
  },

  loadImageUrlFromServer: function(){
    var self = this;
    var id = this.state.user._id;
    $.ajax({
      url: this.props.urlPicture + id,
      method: 'GET',
    }).done(function(image){
      console.log(image);
      self.setState({
        imageUrl: image 
      })
    })
  },

  handleGoalFormSubmit: function(goal) {
    var self = this;
   
    $.ajax({
      url: this.props.urlGoal,
      dataType: 'json',
      type: 'POST',
      data: goal,
      success: function(data) {
        this.loadGoalsFromServer();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.urlGoal, status, err.toString());
      }.bind(this)
    });
  },

  /*handleGoalDelete: function(id) {
    var self = this;
    var id = id;
    $.ajax({
      url: '/api/visionboard/' + id
      method: 'DELETE'
    }).done(function() {
      self.loadGoalsFromServer();
          console.log('deleted goal from server')
    })
  },*/

  handleUserBioFormSubmit: function(userBio) {
    
    var self = this;
    var id = this.state.user._id;
    
    $.ajax({
      url: this.props.url + id,
      dataType: 'json',
      type: 'PUT',
      data: userBio,
      success: function(data){
        this.loadUserFromServer();
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },


  componentDidMount: function() {
    this.loadUserFromServer();
    this.loadGoalsFromServer();
    this.loadImageUrlFromServer();
  },

  render: function() {
    
    return (
        <div>
          <PictureBoardDisplay loadImageUrlFromServer = { this.loadImageUrlFromServer } imagesArr={ this.state.imageUrl }/>
          <UserBioApp user={this.state.user} handleBioSubmit={ this.handleUserBioFormSubmit }/>
          <GoalsApp goals={this.state.goals} handleGoalSubmit={ this.handleGoalFormSubmit } 
                    loadGoalsFromServer={ this.loadGoalsFromServer } />
          
 
        </div>
      )
  }
});


ReactDOM.render(<VisionBoard url='/api/user/' urlPicture='/api/pictureboard/' urlVision='/api/visionboard/goal/' urlGoal='/api/visionboard' />,
 document.getElementById('visionboard'));





