function rTime(TotalSec) {
		var g1day = 60 * 60 * 24;
		var rTime = Math.floor(100000 * TotalSec / g1day) / 100;
		return rTime;
}


function showClock() {

		var gTime = new Date();
		var gTimePT = new Date(gTime.getTime() + 1000 * 60 * 60 * 1)

		var gHourUTC = gTime.getUTCHours();
		var gMinUTC = gTime.getUTCMinutes();
		var gSecUTC = gTime.getUTCSeconds();

		var gHourPT = gTimePT.getUTCHours();
		var gMinPT = gTimePT.getUTCMinutes();
		var gSecPT = gTimePT.getUTCSeconds();

		var gHourJST = gTime.getHours();
		var gMinJST = gTime.getMinutes();
		var gSecJST = gTime.getSeconds();

		var gTimeUTCDisp = gHourUTC + ':' + gMinUTC + ':' + gSecUTC;
		var gTimeJSTDisp = gHourJST + ':' + gMinJST + ':' + gSecJST;
		var gTimePTDisp = gHourPT + ':' + gMinPT + ':' + gSecPT;

		var gTotalSecUTC = gSecUTC + 60 * gMinUTC + 60 * 60 * gHourUTC;
		var gTotalSecPT = gSecPT + 60 * gMinPT + 60 * 60 * gHourPT;
		var gTotalSecJST = gSecJST + 60 * gMinJST + 60 * 60 * gHourJST;

		var rTimeUTCDisp = rTime(gTotalSecUTC);
		var rTimePTDisp = rTime(gTotalSecPT);
		var rTimeJSTDisp = rTime(gTotalSecJST);

		document.getElementById("gTimeUTC").innerHTML = gTimeUTCDisp;
		document.getElementById("rTimeUTC").innerHTML = rTimeUTCDisp;
		document.getElementById("gTimePT").innerHTML = gTimePTDisp;
		document.getElementById("rTimePT").innerHTML = rTimePTDisp;
		document.getElementById("gTimeJST").innerHTML = gTimeJSTDisp;
		document.getElementById("rTimeJST").innerHTML = rTimeJSTDisp;
}



setInterval('showClock()', 1000);
