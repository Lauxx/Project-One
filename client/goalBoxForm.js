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
var React = require('react');

var GoalBoxForm = React.createClass({
  getInitialState: function() {
    return {
     intention: '',
     startDate: '', 
     endDate: '', 
     taskList: [],
     task: ''
   };
  },

  handleIntentionChange: function(e) {
    this.setState({intention: e.target.value});
  },

  handleStartDateChange: function(e) {
    this.setState({startDate: e.target.value});
  },

  handleEndDateChange: function(e) {
    this.setState({endDate: e.target.value});
  },

  handleTaskChange: function(e) {
    this.setState({task: e.target.value});
  },

  myArr: [],

  handleTaskSubmit: function(e) {
    e.preventDefault();
    var task = this.state.task;

    this.myArr.push(task);
    console.log(this.myArr);
    this.setState({task: ""});
    this.setState({ taskList: this.myArr});

  },

  handleSubmit: function(e) {
    e.preventDefault();
    var intention = this.state.intention.trim();
    var startDate = this.state.startDate.trim();
    var endDate = this.state.endDate.trim();
    var taskList = this.state.taskList;
    
      console.log(intention, startDate, endDate, taskList, this.myArr);

    if(!intention && !startDate && !taskList) {
      return;
    }
    this.props.ableToSubmit({intention: intention, startDate: startDate, endDate: endDate, taskList: taskList});
    this.setState({intention: '', startDate: '', endDate: '', taskList: ''});
    this.myArr.length = 0;

  },


	render: function(){

    var tL = this.myArr.map(function(t){
      return(
        <div>
          <ul>
            <li>{t}</li>

          </ul>


        </div>


        )
    });





    
		return(
			<div>
				<div className='container'>
				  <div className='row col-xs-6'>
            <legend>Goal</legend>
				  		<form action="" method="POST" role="form" onSubmit={this.handleSubmit}>
				  			<div className="form-group">
				      			<label className="row" for="">Intention</label>
				      			<input type="text" className="form-control" id="" value={this.state.intention} 
                    onChange={this.handleIntentionChange} placeholder="Intention"/>
				    		</div>
				    		<div className="row">
				      			<p>Start Date</p>
				         		<input type="date" name="" id="input" className="form col-xs-3" value={this.state.startDate} 
                    onChange={this.handleStartDateChange} required="required" title=""/>
				         	</div>
				         	<div className='row'>
				         		<p>End Date</p>
				         		<input type="date" name="" id="input" className="form col-xs-3" value={this.state.endDate} 
                    onChange={this.handleEndDateChange} required="required" title=""/>
				         	</div>
				         	<br/>
                  <div>
                    {tL}
                  </div>
				         	<div className="row">
				         		<input value={this.state.task} onChange={this.handleTaskChange} placeholder="Enter your task here"></input>
				        		<button type="submit" onClick={this.handleTaskSubmit} className="btn btn-primary">Add Task</button><br/><br/>
				        		<button type="submit" className="btn btn-primary" >Submit</button>
				        	</div>
				  		</form>
				  	</div>
         </div>
			</div>
			)
	}
});

module.exports = GoalBoxForm;