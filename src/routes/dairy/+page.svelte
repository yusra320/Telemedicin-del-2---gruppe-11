<h1>Skriv besked til lægen</h1>
<h2>Svartid</h2>
<h3>i en e-konsultation kan du stille simple spørgsmål til din læge. du vil få svar indenfor 5 dage.
    du bør kunne stille et kort spørgsmål til lægen</h3>
<script>
  let content = ""
  let title = ""
  const sendmessage= async ()=>{
        await fetch("/api/dairy",
       {method:"POST",
    body:JSON.stringify({content:content,title:title})
} ) 
  }


</script>
<input bind:value={title} type="text" placeholder="Indtast emne" />
<input bind:value={content} type="text" placeholder="Indtast besked" />
<button on:click ={sendmessage} id="sendButton">Send</button>