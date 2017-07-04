/**
 * Created by Lee on 2017/5/10.
 */
var TimeStampPage = function () {
    this.getNowDate = function () {
      var date=new Date();
      var nowMonth = date.getMonth() + 1;
      if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
      }
      var strDate = date.getDate();
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var nowDate = date.getFullYear()+nowMonth+strDate;
      return nowDate;
    };
    this.getNowTime = function () {
      var date=new Date();
      var nowHour = date.getHours();
      if(nowHour >=0 && nowHour<=9){
        nowHour = "0"+nowHour;
      }
      var nowMin = date.getMinutes();
      if(nowMin >=0 && nowMin<=9){
        nowMin = "0"+nowMin;
      }
      var nowSec = date.getSeconds();
      if(nowSec >=0 && nowSec<=9){
        nowSec = "0"+nowSec;
      }
      var nowTime = ""+nowHour+nowMin+nowSec;
      return nowTime;
    };
};
module.exports = TimeStampPage;
