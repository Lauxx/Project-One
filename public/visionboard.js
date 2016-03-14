{/*
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

 */}

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
      console.log(bio)
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


  componentDidMount: function() {
    this.loadUserFromServer();
    this.loadGoalsFromServer();
  },

  render: function() {
    return (
        <div>

          <UserBioApp user={this.state.user}/>
          <GoalsApp goals={this.state.goals}/>

        </div>
      )
  }
});


React.render(<VisionBoard url='/api/user/' urlVision='/api/visionboard/goal/' />,
 document.getElementById('visionboard'));



