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


var React = require('react');
var ReactDOM = require('react-dom');

var UserBox = React.createClass ({
  getInitialState: function(){
    return {
      users: null,
      searchText: null,
      user: null,
    }
  },
  loadUsersFromServer: function(search) {
    if (search) {
      var url = '/api/allUsers/search/' + search;
    } else {
      var url = '/api/allUsers';    
    };  
    var self= this;
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data){
      self.setState({users: data})
    }) 
  },
  handleSearchChange: function(e){
    this.setState({searchText: e.target.value});
  },
  searchUsers: function(e){
    e.preventDefault();
    console.log(this.state.searchText, 'i am calling search users')
    this.loadUsersFromServer(this.state.searchText)
  },

  showUsers: function(){
    if(this.state.users && this.state.users.length > 0){
    return  this.state.users.map(function(user){
      return(
        <section id = {user._id} >
          <section className="col-lg-2 col-md-2 col-xs-12"> 
            <img src={user.local.profileImage} height="50px" width='50px'/>
           </section>
           <h3> <a href={ '/singleFriendPage?id=' + user._id }> {user.local.username}</a></h3>
           <p> {user.local.bio}</p>   
        </section>
        )
      })
    } else if(this.state.users){
      return(
        <section id = {this.state.users._id} >
          <section className="col-lg-2"> 
            <img src={this.state.users.local.profileImage} height="50px" width='50px'/>
           </section>
           <h3> <a href={ '/singleFriendPage?id=' + this.state.users._id }> {this.state.users.local.username}</a></h3>
           <p> {this.state.users.local.bio}</p>   
        </section>
        )
    } else {
      return null
    }
  },
  componentDidMount: function() {
    this.loadUsersFromServer();
  },
  render: function() {
    return(
      <div>
        <div className="container col-lg-6 col-lg-offset-3"> 
          <form onSubmit={this.searchUsers}>
            <h3 className="legend">Search for friends by username.</h3>
            <input type="text"  className="form-control" value={this.state.searchText} onChange={this.handleSearchChange}/><br/>
            <button type="submit" className="legend button-color">Search</button><br/><br/>
          </form>
        </div>
        <div className="container friends-border row col-lg-8 col-lg-offset-2 col-xs-10 col-xs-offset-1"> 
          { this.showUsers() }
        </div>
      </div>
      )
  }
});


ReactDOM.render(<UserBox />, document.getElementById('userbox'));






