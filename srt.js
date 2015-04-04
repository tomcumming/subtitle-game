"use strict";

var srtRegex = /[\w\n\r]*(\d+)\w*\r?\n(\d\d):(\d{2}):(\d{2}),(\d{3}) ?--> ?(\d\d):(\d{2}):(\d{2}),(\d{3})\w*\r?\n(.*)\r?\n/gm;

function srtParse(sourceString)
{
	var lines = [];
	var matches = sourceString.replace(srtRegex, 
		function(complete, number, sh, sm, ss, sms, eh, em, es, ems, txt) {
			var line = {
				start: Number.parseInt(sh) * 60 * 60 + Number.parseInt(sm) * 60
					+ Number.parseInt(ss) + Number.parseInt(sms) / 1000,
				end: Number.parseInt(eh) * 60 * 60 + Number.parseInt(em) * 60
					+ Number.parseInt(es) + Number.parseInt(ems) / 1000,
				text: txt
			};
			lines.push(line);
		});
	return lines;
}
