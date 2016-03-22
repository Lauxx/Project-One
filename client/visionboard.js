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
var PictureBoardForm = require('./pictureBoardForm');
var React = require('react');
var ReactDOM = require('react-dom');

var VisionBoard = React.createClass ({
  getInitialState: function() {
    return {
      user: {},
      goals: [],
      imageUrls: [],
    }
  },

  loadUserFromServer: function() {
    
    var self = this; 
    $.ajax({
      url: this.props.url,
      method: 'GET',
    }).done(function(bio){
      window.blah = bio;
      self.setState({
        user: bio
      });
      self.loadGoalsFromServer();
      self.loadImageUrlFromServer();
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
    }).done(function(data){
      var imgs = data.imageUrl;
      self.setState({
        imageUrls: imgs
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

  },

  render: function() {
    return (
        <div>
          <PictureBoardDisplay loadUserFromServer={ this.loadUserFromServer } loadImageUrlFromServer={ this.loadImageUrlFromServer } imagesArr={ this.state.imageUrls }
            urlPicture={ this.props.urlPicture } userId={ this.state.user._id } />
          <PictureBoardForm />
          <UserBioApp user={this.state.user} handleBioSubmit={ this.handleUserBioFormSubmit }/>
          <GoalsApp goals={this.state.goals} handleGoalSubmit={ this.handleGoalFormSubmit } 
                    loadGoalsFromServer={ this.loadGoalsFromServer } />
          
 
        </div>
      )
  }
});


ReactDOM.render(<VisionBoard url='/api/user/' urlPicture='/api/pictureboard/' urlVision='/api/visionboard/goal/' urlGoal='/api/visionboard' />,
 document.getElementById('visionboard'));





