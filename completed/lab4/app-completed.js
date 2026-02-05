const { createApp, ref, computed } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
    setup() {
        // UI State
        const manualOpen = ref(false);
        const actionOpen = ref(false);
        const activePlantIndex = ref(null);
        
        // Gameplay State
        const userSequence = ref([]);
        const plants = ref([
            { name: 'Lily', isAlive: false, careOrder: ["Water", "Sun", "Fertilize"] },
            { name: 'Cactus', isAlive: false, careOrder: ["Sun", "Fertilize", "Water"] }
        ]);

        // Configuration Data
        const careActions = [
            { name: 'Water', icon: 'mdi-water', color: 'blue' },
            { name: 'Sun', icon: 'mdi-sun-wireless', color: 'amber' },
            { name: 'Fertilize', icon: 'mdi-bottle-tonic-plus', color: 'green' }
        ];

        // Helper for Positioning Icons (Student Dev Tool)
        const getCoordinates = (event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            console.log(`Position -> top: ${y.toFixed(2)}%; left: ${x.toFixed(2)}%;`);
        };

        // Computed Progress
        const revivedCount = computed(() => plants.value.filter(p => p.isAlive).length);

        // Game Methods
        const openManual = () => {
            actionOpen.value = false; 
            manualOpen.value = true;
        };

        const selectPlant = (index) => {
            if (plants.value[index].isAlive) return;
            activePlantIndex.value = index;
            userSequence.value = []; // Reset sequence for the new plant
            manualOpen.value = false;
            actionOpen.value = true;
        };

        const addAction = (type) => {
            userSequence.value.push(type);
        };

        const closeActionDialog = () => {
            actionOpen.value = false;
            userSequence.value = [];
            activePlantIndex.value = null;
        };

        const validateSequence = () => {
            const plant = plants.value[activePlantIndex.value];
            // Compare arrays by converting to strings
            const isCorrect = JSON.stringify(userSequence.value) === JSON.stringify(plant.careOrder);

            if (isCorrect) {
                plant.isAlive = true;
                closeActionDialog();
            } else {
                alert("The plant didn't like that! Check the book and try again.");
                userSequence.value = [];
            }
        };

        return {
            getCoordinates, plants, careActions, manualOpen, actionOpen, activePlantIndex,
            userSequence, revivedCount, 
            openManual, selectPlant, addAction, closeActionDialog, validateSequence
        };
    }
}

createApp(App).use(vuetify).mount('#app');