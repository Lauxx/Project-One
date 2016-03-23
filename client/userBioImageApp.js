var UserBioApp = require('./userBioApp');
 var React = require('react');
 

var UserBioImageApp = React.createClass({

  render: function(){

    if(this.props.user.local){
      var u = this.props.user.local
    } else {
      var u = {};
      u.bio = "none";
      u.profileImage = "none";
    }
    return(
      <div>
        <UserBioApp bio={u.bio} profileImage={u.profileImage} handleBioSubmit={ this.props.handleBioSubmit }  />
    
      </div>
      )
  }
});

module.exports = UserBioImageApp;

