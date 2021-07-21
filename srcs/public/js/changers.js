const change_login = async()=>{
	var nw_login = document.getElementById("nw_login").value
	localStorage.setItem('login', nw_login)
}

const change_campus = async()=>{
	var nw_campus = document.getElementById("nw_campus").value
	localStorage.setItem('campus', nw_campus)
}

const change_test = async()=>{
	var nw_campus = document.getElementById("nw_test").value
	localStorage.setItem('test', nw_campus)
}

const change_event = async()=>{
	var nw_event = document.getElementById("nw_event").value
	localStorage.setItem('event_asist', nw_event)
}

const change_cursus = async()=>{
	var nw_cursus = document.getElementById("nw_cursus").value
	localStorage.setItem('cursus', nw_cursus)
}
