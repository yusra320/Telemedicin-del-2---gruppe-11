

<style>
    .message-button {
        display: block;
        margin: 5px 0;
        padding: 10px;
        background-color: #f71b1b;
        border: 1px solid #f30b0b;
        width: 100%;
        text-align: left;
    }

    #messageDisplay {
        margin-top: 20px;
        border: 1px solid #f10606;
        padding: 10px;
        background-color: #ea0b0b;
    }
</style>

<script>
    import { onMount } from "svelte";

    let users =  []
    let messages =[]

const getusers=async()=>{
    users= await (await fetch("/api/user")).json()
}
const getmessages =async(id)=>{
    messages=await(await fetch("/api/messages?user=" + id)).json()

}
onMount(()=>{
    getusers()

})

</script>
{#each users as user}
<div> {user.name}</div> <button on:click={()=>getmessages(user.id)}>hent besked</button>
    
{/each}

{#each messages as message}
<div>{message.content} </div>
    
{/each}