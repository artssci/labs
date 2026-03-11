const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();


const App = {
    setup() {
        // 1. make an object with more plants, randomize the order of the actionReferences - done
        // 2. display the collection in the reference card - done
        // 3. make a gameplay card for each subject in the object - done
        // 4. modify the recordUserAction function, possibly including the index or subject's name  - done

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

            // {
            //     title: "Global Maratime Commerce and Whale Risks Collective App",
            //     description: "This is a collective app made by me and other students in ARTSSCI 3C03, with modules exploring the intersection of global maritime commerce and whale migration, challenging human-centric norms by prioritizing non-human life in the deep sea.",
            //     image: "images/project4.png", 
            //     url: ""
            // }
        ]

        // this a comment!
        const openDrawer = ref(false)
        function toggleDrawer() {
            if (openDrawer.value == false) {
                openDrawer.value = true
            } else {
                openDrawer.value = false
            }
        }
        const showReferenceCard = ref(false)
        const showResultCard = ref(null)
        const userAction1 = ref(null)
        const userAction2 = ref(null)
        const userAction3 = ref(null)
        // const result = ref(null)
        const backgroundImage = "images/flower-shop.jpg"
        const finishedCount = ref(0)
        const showEndDialog = ref(false)
        const showInstructions = ref(true)
        const subjects = [
            {
                plantName: "Lily",
                actionReference1: "water",
                actionReference2: "prune",
                actionReference3: "fertilize",
                buttonX: "49.89%",
                buttonY: "18.34%",
                cardX: "49.77%",
                cardY: "24.35%",
                showGameplayCard: ref(false),
                result: ref(null)
            },
            {
                plantName: "Tulip",
                actionReference1: "fertilize",
                actionReference2: "water",
                actionReference3: "prune",
                buttonX: "70.35%",
                buttonY: "18%",
                cardX: "70.35%",
                cardY: "23.30%",
                showGameplayCard: ref(false),
                result: ref(null)
            },
            {
                plantName: "Marigold",
                actionReference1: "prune",
                actionReference2: "water",
                actionReference3: "fertilize",
                buttonX: "74.60%",
                buttonY: "50.85%",
                cardX: "74.23%",
                cardY: "56.78%",
                showGameplayCard: ref(false),
                result: ref(null)
            }

        ]

        function findCoordinates(event) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const xPercent = (event.clientX / windowWidth) * 100;
            const yPercent = (event.clientY / windowHeight) * 100;
            console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
        }

        function toggleOpenCloseInstructions() {
            if (showInstructions.value === false) {
                showInstructions.value = true
            } else { showInstructions.value = false }
        }

        function toggleOpenCloseReferenceCard() {
            if (showReferenceCard.value == false) {
                showReferenceCard.value = true
            }
            else { showReferenceCard.value = false }
        }

        function toggleOpenCloseGameplayCard(subject) {
            // If the card is currently hidden (false), show it
            if (subject.showGameplayCard.value == false) {
                subject.showGameplayCard.value = true;

                // Reset the game logic so the new card starts fresh
                showReferenceCard.value = false
                userAction1.value = null
                userAction2.value = null
                userAction3.value = null
                // subject.result.value = null
            }
            // Otherwise (if it's already true), hide it
            else {
                subject.showGameplayCard.value = false;
            }
        }


        function recordUserAction(action) {
            if (userAction1.value === null) {
                userAction1.value = action;
            } else if (userAction2.value === null) {
                userAction2.value = action;
            } else if (userAction3.value === null) {
                userAction3.value = action;
            }
        }


        // Update validateResult to handle game progress
        function validateResult(subject) {
            if (userAction1.value === subject.actionReference1 &&
                userAction2.value === subject.actionReference2 &&
                userAction3.value === subject.actionReference3) {

                subject.result.value = "Your plant is thriving!"
                finishedCount.value++;

                // If all plants are done
                if (finishedCount.value === subjects.length) {
                    showEndDialog.value = true;
                }
            } else {
                subject.result.value = "Your plant withered. Try again."
            }
        }


        return {
            openDrawer, 
            toggleDrawer,
            subjects,
            backgroundImage,
            showReferenceCard,
            // showGameplayCard,
            showInstructions,
            toggleOpenCloseInstructions,
            toggleOpenCloseReferenceCard,
            toggleOpenCloseGameplayCard,
            userAction1,
            userAction2,
            userAction3,
            recordUserAction,
            validateResult,
            // result,
            showResultCard,
            findCoordinates,
            finishedCount,
            showEndDialog
        }
    }
}

createApp(App).use(vuetify).mount('#app');
