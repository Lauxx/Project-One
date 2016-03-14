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

    add new text
    and then some more

 */}


var GoalsApp = React.createClass({

  // get initial state for active goal
  // define a load comments from server with specific goal id
  // only display active goal
  // pass down loadcomments from server to comment box
  // show current state and pass down information





  loadCommentsFromServer: function(){
    console.log("some commmentsssssssss");
    var self = this; 
    var id = this.state.goal._id;
    $.ajax({
      url: this.props.urlGoal + id +'/comment',
      method: 'GET',
    }).done(function(comment){
      console.log(comment)
      self.setState({ 
        comments: comment
      })
    })
  },

  handleLinkClick: function(id) {
    console.log(id);
  },
	
  render: function() {
    var self = this;
    var links = this.props.goals.map(function(l){
      return (
        <div>
          <a onClick={self.handleLinkClick.bind(this, l._id)}> {l.intention} </a>
        </div>
        )
    })
    window.thing = this.props.goals;
    var gb = this.props.goals.map(function(g){
      if(g.comments.length > 0){
        var comments = g.comments;
      } else {
        var comments = ['Be the first to comment!'];
      };
         return (
          <div>
          <GoalBoxDisplay intention={g.intention} taskList={g.taskList}
          startDate={g.startDate} endDate={g.endDate}/>
          <CommentBox ableToComment={ this.props.handleCommentSubmit} commentsArray={g.comments} />
          </div>
          )
    })

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
             <a className="navbar-brand" href="#">Title</a>
             <ul className="nav navbar-nav">
               <li className="active">
                 {links}
               </li>
        
             </ul>
           </div>
         </nav>
        {gb}

        <GoalBoxForm ableToSubmit={this.props.handleGoalSubmit} ableToDelete={this.props.handleGoalDelete} />
       </div>     
      )
  }


});



