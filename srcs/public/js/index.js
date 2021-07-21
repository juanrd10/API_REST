const IP = "localhost"

let parse_req = async(data, use)=>{
	if (use == "users")
		print_users(data);
	if (use == "event_asist")
		print_ev_asist(data);
	if (use == "campus")
		print_campus(data);
	if (use == "events")
		print_search_ev(data);
}

let get_req = async(lnk)=>{
	const response = await fetch("http://" + IP + ":3000/app/call?" + lnk);
	let data = await response.json();
	console.log(data.data)
	return (data.data);
}

const get_petition = async(use)=>{
	var campus = localStorage.getItem('campus')
	var login = localStorage.getItem('login')
	var event = localStorage.getItem('event_asist')
	var test = localStorage.getItem('test')
	var cursus = localStorage.getItem('cursus')
	let info;
	if (use == "static_login")
	window.location.replace("http://localhost:3000/static/personal/" + login)
	if (use == "static_expert")
	window.location.replace("http://localhost:3000/static/expertises/" + login)
	if (use == "me")
		info = get_req("/v2/me")
	if (use == "campus")
	info = get_req("/v2/campus/" + campus)
	if (use == "events")
	info = get_req("/v2/campus/" + campus + "/events")
	if (use == "users")
	info = get_req("/v2/users/" + login)
	if (use == "me")
		info = get_req("/v2/me")
	if (use == "event_asist")
		info = get_req("/v2/events/"+ event + "/users")
	if (use == "test")
		info = get_req(test)
	parse_req(info, use)
}
