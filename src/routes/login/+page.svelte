
<script>
	import { Container, Row, Col, Input, Button } from '@sveltestrap/sveltestrap';
	const md = { size: 4, offset: 4 };
	const sm = { size: 6, offset: 3 };
	let username = '';
	let password = '';
	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
		const result = await response.text();
		console.log(result);
		if (response.status === 200) {
			window.location = '/admin';
		} else {
            alert('Forkert brugernavn eller password');
}
	};
</script>
<h1>Login</h1>
<Input bind:value={username} type="text" placeholder="Indtast Email" />
<Input bind:value={password} type="password" placeholder="Indtast Password" />
<Button color="primary" on:click={login}>Login</Button>

