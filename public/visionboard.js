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


var VisionBoard = React.createClass ({
  getInitialState: function() {
    return {
      user: {},
      goals: [],


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

  handleCommentFormSubmit: function(comment){
    console.log("I AM BEING CALLED", comment);
    var self = this;
    var id = this.state.goals._id;
    console.log(id);
    $.ajax({
      url: this.props.urlGoal + id +'/comment',
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data){
        console.log(data, 'this is comment data');
        this.loadCommentsFromServer();
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },


  componentDidMount: function() {
    this.loadUserFromServer();
    this.loadGoalsFromServer();
  },

  render: function() {
    
    return (
        <div>

          <UserBioApp user={this.state.user} handleBioSubmit={ this.handleUserBioFormSubmit }/>
          <GoalsApp goals={this.state.goals} handleGoalSubmit={ this.handleGoalFormSubmit } />

        </div>
      )
  }
});


React.render(<VisionBoard url='/api/user/' urlVision='/api/visionboard/goal/' urlGoal='/api/visionboard' />,
 document.getElementById('visionboard'));



