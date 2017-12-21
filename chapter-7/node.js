name = "Yusuf Badmus";
lastname = "";
lastnamereversed = "";
	for (var j = (name.length - 1); j > 0; j--) {
		lastnamereversed += name[j]
        if (name[j] === " ") break;
	};
    for (var k = (lastnamereversed.length - 1); k >= 0; k--) {
        lastname += lastnamereversed[k];
    };
    console.log(lastname.trim());
