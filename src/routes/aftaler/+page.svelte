<h1>Book en aftale</h1>
<script>
    let name = '';
    let date = '';
    let time = '';
    
    function bookAppointment() {
        console.log(`Aftale booket for ${name} den ${date} kl. ${time}`);
        // Tilføj logik til at sende data til serveren her
    }
</script>

<form on:submit|preventDefault={bookAppointment}>
    <label for="name">Navn:</label>
    <input type="text" id="name" bind:value={name} required>

    <label for="date">Dato:</label>
    <input type="date" id="date" bind:value={date} required>

    <label for="time">Tidspunkt:</label>
    <input type="time" id="time" bind:value={time} required>

    <button type="submit">Book Aftale</button>
</form>