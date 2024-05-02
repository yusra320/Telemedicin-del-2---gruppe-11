 <style>
        :root {
            --primary-color: #3300FF;
        }
        body {
            background: linear-gradient(to right, #56CCF2, #2F80ED);
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Arial', sans-serif;
        }
        #main-menu button {
            background-color: var(--primary-color);
            color: white;
            padding: 10px;
            margin: 5px;
            border: none;
            border-radius: 5px;
           cursor: pointer;
        }

 </style>

<body>
    <div id="main-menu">
        <h1>Telemedicinsk Apopleksi System</h1>
        <button onclick="goToTraining()">Genoptræningsprogram</button>
        <button onclick="goToAftaler()">Aftaler</button>
        <button onclick="goToDairy()">Kommunikation</button>
        <button class="alert" onclick="goToEmergency()">Nødkald</button> 
    </div>
    <script>
        function goToTraining() {
            window.location.href = '/training';
        }
        function goToAftaler() {
            window.location.href = '/aftaler';
        }
        function goToDairy() {
            window.location.href = '/dairy';
        }
        function goToEmergency() {
            window.location.href = '/Nødkald';
        }
    </script>
</body>