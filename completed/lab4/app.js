const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();


const App = {
    setup() {

        // step 1: Information Card
        const plantName = "Lily"
        const actionReference1 = "water"
        const actionReference2 = "prune"
        const actionReference3 = "fertilize"
        // const careInstructions = ["water", "prune", "fertilize"]
        const showReferenceCard = ref(false)
        const userAction1 = ref(null)
        const userAction2 = ref(null)
        const userAction3 = ref(null)
        const result = ref("")
        const image = "images/flower-shop.jpg"


        function toggleOpenCloseReferenceCard() {
            if (showReferenceCard.value == false) { showReferenceCard.value = true }
            else { showReferenceCard.value = false }
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


        const showActionCard = ref(false)

        function toggleOpenCloseActionCard() {
            if (showActionCard.value == false) {
                // actionList.value = []
                showActionCard.value = true
            } else {
                showActionCard.value = false
                // actionList.value = []
            }
        }




        // 2.3 validate and show result
        const showResultCard = ref(false)

        function validateResult() {
            if (userAction1.value === actionReference1 &&
                userAction2.value === actionReference2 &&
                userAction3.value === actionReference3) {
                result.value = "Your plant is thriving!"
                showResultCard.value = true
            } else {
                result.value = "Your plant withered."
                showResultCard.value = true
            }
        }

    
        function findCoordinates(event) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const xPercent = (event.clientX / windowWidth) * 100;
            const yPercent = (event.clientY / windowHeight) * 100;
            console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
        }

        return {

            plantName,
            // careInstructions,
            actionReference1,
            actionReference2,
            actionReference3,
            showReferenceCard,
            toggleOpenCloseReferenceCard,
            toggleOpenCloseActionCard,
            showActionCard,
            userAction1,
            userAction2,
            userAction3,
            recordUserAction,
            validateResult,
            result,
            showResultCard,
            image,
            findCoordinates

        }
    }
}

createApp(App).use(vuetify).mount('#app');
