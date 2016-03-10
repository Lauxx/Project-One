{/*
- VisionBoard
  - PictureBoard

  - GoalsApp
    - GoalBoxDisplay
      - DatesDisplay
      - IntentionDisplay
      - TaskListDisplay
        - ProgressBar

    - GoalBoxForm
      - DatesForm
      - IntentionForm
      - TaskListForm

    - CommentBox
      - CommentList
        - Comment
      - CommentForm

  - UserBio
    - UserBioDisplay
    - UserBioForm

 */}



var VisionBoard = React.createClass ({

/*

  getInitialState: function() {
    return {
      images: [],
      userBio: [],
      goals: [],
      comments: []
    }
  },

loadImagesFromServer: function() {

  },

  loadUserBioFromServer: function() {

  },


  loadGoalsFromServer: function() {
    var self = this;
    $.ajax({
      url: this.props.url,
      method: 'GET',
    }).done(function(goal){
      console.log(goal)
      self.setState({
        goals: goal
      })
    })
  },

  loadCommentsFromServer: function() {
    var self = this;
    $.ajax({
      url: this.props.url2,
      method: 'GET',
    }).done(function(comment){
      console.log(comment)
      self.setState({
        comments: goal
      })
    })
  },

  componentDidMount: function() {
 {/*  this.loadImagesFromServer();
    this.loadUserBioFromServer();
  }
    this.loadGoalsFromServer();

  },
*/
  render: function() {
    return (
        <div>

          <GoalsApp />

        </div>
      )
  }
});


React.render(<VisionBoard />, document.getElementById('visionboard'));