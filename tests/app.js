const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

createApp({
    setup() {
        // 1. Control for the Vuetify Dialog
        const dialog = ref(false);

        // 2. The active story/data being displayed
        const activeStory = ref({});

        // 3. The points on the map (The "Data Layer")
        // Students can add more points here by finding the x/y % coordinates
        const points = ref([
            {
                title: "St. Lawrence Estuary",
                description: "A large cargo ship is entering the whale feeding grounds. What is your strategy?",
                x: 75.5, // % from the left
                y: 42.1, // % from the top
                choices: [
                    { text: "Enforce Speed Limit", nextTitle: "Success!", nextDesc: "The whales were safe, but shipping was delayed by 12 hours." },
                    { text: "Reroute Ship", nextTitle: "Efficiency Loss", nextDesc: "The ship took a longer route, increasing fuel costs and emissions." }
                ]
            },
            {
                title: "Historical Indigenous Territory",
                description: "This region has used cultural burning for millennia to prevent massive fires. Investigate further?",
                x: 35.2,
                y: 58.8,
                choices: [
                    { text: "Read Treaty History", nextTitle: "Historical Context", nextDesc: "You discover how colonial laws banned traditional fire management." },
                    { text: "Compare Fire Maps", nextTitle: "Data Comparison", nextDesc: "The maps show fewer catastrophic fires in areas managed traditionally." }
                ]
            }
        ]);

        // Add this inside setup() for the lab
        const getCoordinates = (event) => {
            const rect = event.target.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            console.log(`x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`);
        };
        // Then add @click="getCoordinates" to the v-img in the HTML

        // 4. Function called when a dot is clicked
        const selectPoint = (point) => {
            activeStory.value = point;
            dialog.value = true;
        };

        // 5. Function for the "Branching" logic
        // This updates the dialog content based on the student's choice
        const makeChoice = (choice) => {
            activeStory.value = {
                title: choice.nextTitle,
                description: choice.nextDesc,
                choices: [] // Ends the branch for this example
            };
            // Note: In a real game, they could click a button to close the dialog
            // or move to yet another set of choices.
        };

        return {
            points,
            dialog,
            activeStory,
            selectPoint,
            makeChoice, 
            getCoordinates
        };
    }
}).use(vuetify).mount('#app');