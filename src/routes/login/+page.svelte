
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
			window.location = '/menu';
		} else {
            alert('Forkert brugernavn eller password');
}
	};
</script>

<style>
    :global(body) {
        background: linear-gradient(to right, #56CCF2, #2F80ED); /* Adjust the colors to match the image's background */
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Arial', sans-serif; 
    }

    .login-container {
        text-align: center;
        width: 100%;
        max-width: 400px;
    }

    h1 {
        font-size: 3rem; 
        color: rgb(8, 6, 6); 
        margin-bottom: 2rem; 
    }

    .input-group {
        margin-bottom: 1rem; 
    }

    input {
        border-radius: 20px; 
        border: 1px solid #ccc; 
        padding: 1rem; 
        width: 90%; 
        margin: auto; 
        display: block; 
    }

    button {
        width: 90%; 
        margin: 1rem auto; 
        padding: 1rem; 
        border-radius: 20px; 
        border: none; 
        background-color: #2F80ED; 
        color: white; 
        font-size: 1.25rem; 
        cursor: pointer; 
        display: block; 
    }

    .text-links {
        color: rgb(4, 3, 3); 
        text-decoration: none; 
        width: 100%;
        max-width: 500px;
    }

    .welcome-message {
        margin-top: 3rem;
        font-size: 2rem; 
        color: rgb(5, 4, 4); 
        text-align: center; 
    }

</style>
<div class="login-container">
	<h1>Login</h1>
	<h2>Telemedicinsk<br>
		Apopleksi system</h2> 
    <div class="input-group">
        <Input bind:value={username} type="text" placeholder="Indtast Email" />
    </div>
    <div class="input-group">
        <Input bind:value={password} type="password" placeholder="Indtast Password" />
    </div>
    <Button color="primary" on:click={login}>Login</Button>
    <a color="black" class="text-links" href="/admin">Sign up</a>

</div>