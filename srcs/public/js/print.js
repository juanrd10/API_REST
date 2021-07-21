const print_users = async(data)=>{
	let ret_info = document.querySelector('#return_info');
	const {id, email, login, correction_point} = await data;
		let html = `
		<h1>User login: ${login}</h1>
		<h2>User email: ${email}</h2>
		<h2>User id: ${id}</h2>
		<h2>Correction points: ${correction_point}</h2>
		`
		ret_info.innerHTML = html;
}

const print_campus = async(data)=>{
	let ret_info = document.querySelector('#return_info');
	const {address, country, city, website} = await data;
		let html = `
		<h2>Country: ${country}</h2>
		<h2>City: ${city}</h2>
		<h2>Address: ${address}</h2>
		<h2>Website: ${website}</h2>
		`
		ret_info.innerHTML = html;
}

const print_ev_asist = async(data)=>{
	let ret_info = document.querySelector('#return_info');
	let dat = await data;
	let numb = 0;
	let html = "";
	while (dat[numb])
	{
		let log = dat[numb].login;
		html = `${html}
		<h3>${numb}: ${log}</h3>
		`
		ret_info.innerHTML = html;
		numb++;
	}
}

const print_search_ev = async(data)=>{
	let ret_info = document.querySelector('#return_info');
	let dat = await data;
	let numb = 0;
	let html = "";
	html = "<h2>Last 30 events created:</h2>"
	while (dat[numb])
	{
		let des = dat[numb].name;
		let id = dat[numb].id;
		html = `${html}
		<h3>id ->${id} ${des}</h3>
		`
		ret_info.innerHTML = html;
		numb++;
	}
}
