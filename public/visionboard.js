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


var VisionBoard = React.createClass ({
  getInitialState: function() {
    return {
      user: {}
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


  componentDidMount: function() {
    this.loadUserFromServer();
  },

  render: function() {
    return (
        <div>

          <UserBioApp user={this.state.user}/>
          <GoalsApp />


        </div>
      )
  }
});


React.render(<VisionBoard url='/api/user/' />, document.getElementById('visionboard'));