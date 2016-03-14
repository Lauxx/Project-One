/*
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

 */

console.log('do anything please');
var VisionBoard = React.createClass ({
  getInitialState: function() {
    return {
      user: {},
      goals: [],

    }
  },

  loadUserFromServer: function() {
    console.log('going somewhere?')
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
    console.log("Doing some goals!")
    var self = this;
    var id = this.state.user._id;
    $.ajax({
      url: this.props.urlVision + id,
      method: 'GET',
    }).done(function(goal){
      console.log(goal)
      self.setState({
        goals: goal
      })
    })
  },

  handleGoalFormSubmit: function(goal) {
    var self = this;
    console.log(goal);
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
    console.log("I am being called!!", userBio);
    var self = this;
    var id = this.state.user._id;
    console.log(id);
    $.ajax({
      url: this.props.url + id,
      dataType: 'json',
      type: 'PUT',
      data: userBio,
      success: function(data){
        console.log(data, "SOME DATA!!");
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
  },

  render: function() {
    console.log(this.state.goals);
    return (
        <div>

          <UserBioApp user={this.state.user} handleBioSubmit={ this.handleUserBioFormSubmit }/>
          <GoalsApp goals={this.state.goals} handleGoalSubmit={ this.handleGoalFormSubmit } />

        </div>
      )
  }
});


React.render(<VisionBoard url='/api/user/' urlVision='/api/visionboard/goal/' urlGoal='/api/visionboard/' />,
 document.getElementById('visionboard'));



