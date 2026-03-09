const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();


const App = {
    setup() {

        const openDrawer = ref(false)
        function toggleDrawer() {
            if (openDrawer.value == false) {
                openDrawer.value = true
            } else {
                openDrawer.value = false
            }
        }

        const projects = [
          
            {
                title: "Stranger Things Card Collection",
                description: "A card gallery showcasing characters from the series Stranger Things. In this lab I explored how to write JavaScript variables, data types, and objects, and display the within a card using the Vuetify user interface library.",
                image: "images/project1.png", 
                url: "https://artssci.github.io/labs/completed/lab3/"
            },
            {
                title: "The Botanist Challenge Game",
                description: "In this game, the player consults a reference card to learn a plant's needs and then click the correct actions in the right order to help it grow. I learned about functions, conditional logic, and reactivity to handle changes in the user interface and validate user choices",
                image: "images/project2.png", 
                url: "https://artssci.github.io/labs/completed/lab5/"
            },
            {
                title: "Immigration Trends Canada 2025 - 2027",
                description: "This is a Data Dashboard visualizing the 2025-2027 Canada Immigration Trends. I practiced using Vuetify components like Sparkline, Stepper, and Data Table, to transform complex datasets into an interactive user experience.",
                image: "images/project3.png", 
                url: "https://artssci.github.io/labs/completed/lab6/"
            },

            {
                title: "Global Maratime Commerce and Whale Risks Collective App",
                description: "This is a collective app made by me and other students in ARTSSCI 3C03, with modules exploring the intersection of global maritime commerce and whale migration, challenging human-centric norms by prioritizing non-human life in the deep sea.",
                image: "images/project4.png", 
                url: ""
            }
        ]

        return {
            openDrawer,
            toggleDrawer,
            projects
        }
    }
}


createApp(App).use(vuetify).mount('#app');
