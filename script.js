var currentTime = $('#currentTime')
var projName = $('#projName')
var projType = $('#projType')
var dueDate = $('#dueDate')
var hourly = $('#hourly')
var formSubmit = $('#formSubmit')
var tableBody = $('#tableBody')

function time() {
    var ticker = moment().format('MM DD, YYYY [at] hh:mm:ss a')
    currentTime.text(ticker)
}

function submission(){
    var tableName = projName.val().trim()
    var tableType = projType.val().trim()
    var tableDate = dueDate.val().trim()
    var tableRate = hourly.val().trim()

    var tabelRow = $('<tr>').addClass('row')
    var tableDName = $('<td>')
    var tableDType = $('<td>')
    var tableDDate = $('<td>')
    var tableDRate = $('<td>')

    tableDName.text(tableName)
    tableDType.text(tableType)
    tableDDate.text(tableDate)
    tableDRate.text(tableRate)
    tabelRow.append(tableDName, tableDType, tableDDate, tableDRate)
    tableBody.append(tabelRow)

}
$(function () {
    $('#dueDate').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });

formSubmit.click(submission)
setInterval(time, 1000)