var merge = require("merge");
var axios = require("axios");
var EventEmitter = require("events").EventEmitter;
var browserHistory = require("react-router").browserHistory;
var MainDispatcher = require("../dispatchers/mainDispatcher");
var MainConstant = require("../constants/mainConstant");

//variables to store
var _user = JSON.parse(localStorage.getItem("user"));
var _error = {};
var _timesheet;

var TimesheetStore = merge(EventEmitter.prototype, {
  getError: function(){
    return _error;
  },
  getTimesheet: function(){
    return _timesheet;
  }
});

module.exports = TimesheetStore;

MainDispatcher.register(handleAction);

function handleAction(payload){
  if (payload.action === MainConstant.TIMESHEET.UPDATE){
    // console.log("asjdhkjdfakjsdfsdkafdksfgdsakhl");
    updateTimesheet(payload.timeSheet);
  }else if(payload.action === MainConstant.TIMESHEET.CREATE){
    createTimesheet(_user._id, payload.timesheet);
  }
}

function createTimesheet(id, timeSheet){
  var token = localStorage.getItem("token") || "";
  var url = "/api/timesheet";
  console.log(url, id, timeSheet);
  axios.request({
    method: "PUT",
    url: url,
    data: {
      user_id: id,
      newTimesheet: timeSheet 
    },
    headers: {'token': token}
  }).then(function(res){
    console.log(res);
    browserHistory.push("/")
  }).catch(function(err){
    console.log(err);
    browserHistory.push("/");
  });
}

function getTimesheet(id){
  var token = localStorage.getItem("token") || "";
  var url = "/api/timesheet/" + id;
  console.log(url);
  axios.request({
    method: "GET",
    url: url,
    headers: {'token' : token}
  }).then(function(res){
    _timesheet = res.data;
    TimesheetStore.emit(MainConstant.TIMESHEET.GET);
    console.log(res);
  }).catch(function(err){
    console.log(err);
    //browserHistory.push("/login");
  });
}

function updateTimesheet(timesheet) {
  axios.post("/api/timesheet/:id/edit", {
    email: user.email,
    password: user.password
  }).then(function(res){
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    _timesheet = res.data.timesheet;
    browserHistory.push("/");
  }).catch(function(err){
    console.log(err);
    TimesheetStore.emit(MainConstant.TIMESHEET.ERROR.UPDATE)
  })
}

// function register(user) {
//   axios.post("/api/register", user).then(function(res){
//     browserHistory.push("/");
//   }).catch(function(err){
//     console.log(err);
//     UserStore.emit(MainConstant.USER.ERROR.REGISTER)
//   })
// }
