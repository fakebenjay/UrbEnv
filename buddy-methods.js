function cdRefine(cdNum) {
	borosDir = {
		"1": 'MANHATTAN',
		"2": 'BRONX',
		"3": 'BROOKLYN',
		"4": 'QUEENS',
		"5": 'STATEN-ISLAND'
	}

	return `${cdNum.substr(1, 2)}-${borosDir[cdNum[0]]}`
}

function populateComplaint(target) {
	if (target.id === 'category') {
		var selected = target.value
		var keys = Object.keys(masterData['0-Unspecified']['all_years'][selected]).filter(k => k !== "Total") //Specific year and CD are irrelevant here

		if (selected !== 'vehicles') {
			keys.unshift("Total")
		}

		var complaintDropdown = document.querySelector('#complaint')

		complaintDropdown.innerHTML = ""

		keys.forEach((k) => {
			complaintDropdown.innerHTML += `<option>${k}</option>`
		})
	}
}