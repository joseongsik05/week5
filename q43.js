function returnDay() {
    day = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      7: "Sunday",
    };

 
    if (day >= 0 || day >= 8) {
      return null;
    } else {
      return day;
    }
  }
  returnDay();


  /// 전 제가 옳다고 생각해요... 
  //지금 자바스크립트가 거짓말 하고 있는 거에요....

