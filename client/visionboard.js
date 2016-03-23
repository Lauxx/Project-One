/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
      - CommentForm
    - GoalBoxForm
   
  UserBioImageApp
    - UserBioApp
   
 */

var UserBioImageApp = require('./userBioImageApp');
var GoalsApp = require('./goalsApp');
var PictureBoardDisplay = require('./pictureBoardDisplay');
var PictureBoardForm = require('./pictureBoardForm');
var React = require('react');
var ReactDOM = require('react-dom');

var VisionBoard = React.createClass ({
  getInitialState: function() {
    return {
      user: null,
      goals: [],
      imageUrls: [],
      friendId: null,
      guest: null,
    }
  },

  getUrl: function() {
    if(window.location.href.split('/').pop() !== 'visionboard'){
      var friendId = window.location.href.split('=').pop();
      this.setState({friendId: friendId});
      this.setState({guest: true});
    } else {
      console.log('DAVEs NOT HERE, MAN!!');
    }
  },

  /* showBio: function() {
      if (this.state.guest) {
        return <UserBioApp user={this.state.guest} handleBioSubmit={ this.handleUserBioFormSubmit }/>
      } else if (this.state.user) {
        return <UserBioApp user={this.state.user} handleBioSubmit={ this.handleUserBioFormSubmit }/>
      } else {
        return null;
      }

  }, */

  loadUserFromServer: function() {
    var self = this; 
    if(this.state.friendId) {
      var url = '/api/user' + '/' + this.state.friendId;
    } else {
      var url = this.props.url;
    }
   $.ajax({
     url: url,
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
      if (this.state.friendId) {
        var id = this.state.friendId;
      } else {
        var id = this.state.user._id;
      };
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
    if (this.state.friendId) {
        var id = this.state.friendId;
      } else {
        var id = this.state.user._id;
      };
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
        window.location='visionboard'
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadUserFromServer();

  },
  
  componentWillMount: function() {
    this.getUrl();
  },

  
  
    

  render: function() {

    if(this.state.user) {
    return (
        <div>
          <PictureBoardDisplay loadUserFromServer={ this.loadUserFromServer } loadImageUrlFromServer={ this.loadImageUrlFromServer } 
            imagesArr={ this.state.imageUrls }
            urlPicture={ this.props.urlPicture } userId={ this.state.user._id } guest={ this.state.guest } />


          <UserBioImageApp user={this.state.user} handleBioSubmit={ this.handleUserBioFormSubmit } />

          <GoalsApp goals={this.state.goals} handleGoalSubmit={ this.handleGoalFormSubmit } 
                    loadGoalsFromServer={ this.loadGoalsFromServer } guest={ this.state.guest } />
          
 
        </div>
      )
    } else {
      return null;
    }
  }
});


ReactDOM.render(<VisionBoard url='/api/user/' urlPicture='/api/pictureboard/' urlVision='/api/visionboard/goal/' urlGoal='/api/visionboard' />,
 document.getElementById('visionboard'));





