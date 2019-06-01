function monthNumToName(i)
{
  if(i == 1) return "January";
  if(i == 2) return "February";
  if(i == 3) return "March";
  if(i == 4) return "April";
  if(i == 5) return "May";
  if(i == 6) return "June";
  if(i == 7) return "July";
  if(i == 8) return "August";
  if(i == 9) return "September";
  if(i == 10) return "October";
  if(i == 11) return "November";
  if(i == 12) return "December";
}

function monthNameToNum(month)
{
  if(month == "January") return 1;
  if(month == "February") return 2;
  if(month == "March") return 3;
  if(month == "April") return 4;
  if(month == "May") return 5;
  if(month == "June") return 6;
  if(month == "July") return 7;
  if(month == "August") return 8;
  if(month == "September") return 9;
  if(month == "October") return 10;
  if(month == "November") return 11;
  if(month == "December") return 12;
}

function getCurMonth()
{
  var d = new Date();
  return d.getMonth()+1;
}

function getCurYear()
{
  var d = new Date();
  return d.getFullYear();
}

function getPrevMonth(m)
{
  var c = false;
  if(isNaN(m)) 
  {
    c = true;
    m = monthNameToNum(m);
  }
  if(m == 1)
  {
      m = 12;
  }
  else
  {
      m = m - 1;
  }
  
  if(c)
    m = monthNumToName(m);
  
  return m;
}

function getNextMonth(m)
{
  var c = false;
  if(isNaN(m)) 
  {
    c = true;
    m = monthNameToNum(m);
  }
  if(m == 12)
  {
      m = 1;
  }
  else
  {
      m = m + 1;
  }
  
  if(c)
    m = monthNumToName(m);
  
  return m;
}

function getPrevMonthYear(m, y)
{
  if(isNaN(m)) 
    m = monthNameToNum(m);

  if(m < getPrevMonth(m))
  {
    y = parseInt(y) - 1;    
  }
  return y;
}

function getNextMonthYear(m, y)
{
  if(isNaN(m)) 
    m = monthNameToNum(m);
  if(m > getNextMonth(m))
  {
    y = parseInt(y) + 1;    
  }
  return y;
}

export {monthNumToName, monthNameToNum, getCurMonth, getCurYear, getNextMonth, getNextMonthYear, getPrevMonth, getPrevMonthYear};