
const { createApp, ref, computed } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
    setup() {

        // --- STATE ---
        const manualOpen = ref(false);
        const actionOpen = ref(false);
        const selectedPlant = ref(null);
        const userSequence = ref([]);

        const plants = ref([
            {
                name: 'Peace Lily',
                isAlive: false,
                sequence: ['Water', 'Sun', 'Fertilize'],
                deadImg: 'https://cdn.pixabay.com/photo/2014/04/03/10/26/flower-pot-310434_1280.png', // Grayish placeholder
                colorImg: 'https://cdn.pixabay.com/photo/2017/01/10/11/49/flower-1968897_1280.png'
            },
            {
                name: 'Cactus',
                isAlive: false,
                sequence: ['Sun', 'Fertilize', 'Water'],
                deadImg: 'https://cdn.pixabay.com/photo/2013/07/12/13/21/cactus-146869_1280.png',
                colorImg: 'https://cdn.pixabay.com/photo/2016/06/15/21/28/cactus-1459992_1280.png'
            }
        ]);

        // --- COMPUTED ---
        const revivedCount = computed(() => {
            const count = plants.value.filter(p => p.isAlive).length;
            // Map count to stepper steps: 0=1, 1=2, 2=3
            return count + 1;
        });

        // --- METHODS ---
        const openManual = () => {
            closeActionDialog(); // Close any plant work if manual opens
            manualOpen.value = true;
        };

        const selectPlant = (plant) => {
            if (plant.isAlive) return; // Already healthy
            manualOpen.value = false;
            selectedPlant.value = plant;
            userSequence.value = [];
            actionOpen.value = true;
        };

        const recordAction = (action) => {
            userSequence.value.push(action);
        };

        const closeActionDialog = () => {
            actionOpen.value = false;
            selectedPlant.value = null;
            userSequence.value = [];
        };

        const checkSequence = () => {
            const target = selectedPlant.value.sequence;
            const user = userSequence.value;

            // Check if lengths match and every item matches in order
            const isCorrect = user.length === target.length &&
                user.every((val, index) => val === target[index]);

            if (isCorrect) {
                selectedPlant.value.isAlive = true;
                alert("The plant is blooming!");
                closeActionDialog();
            } else {
                alert("That didn't seem to work. Try again!");
                userSequence.value = []; // Reset inside the dialog for convenience
            }
        };
    
    return {
        manualOpen, 
        actionOpen, 
        selectedPlant,     
        userSequence,
        plants,
        revivedCount, 
        openManual, 
        selectPlant, 
        recordAction, 
        checkSequence


    }
    
    }
}

createApp(App).use(vuetify).mount('#app');
