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

            // {
            //     title: "Global Maratime Commerce and Whale Risks Collective App",
            //     description: "This is a collective app made by me and other students in ARTSSCI 3C03, with modules exploring the intersection of global maritime commerce and whale migration, challenging human-centric norms by prioritizing non-human life in the deep sea.",
            //     image: "images/project4.png", 
            //     url: ""
            // }
        ]

    // A single array containing multiple objects
    const collection = ref([
      {
        name: "Robin Buckley",
        birthday: "1968",
        birthplace: "Hawkins, Indiana",
        bio: "In the summer of 1985, Robin began working at the newly-built Starcourt Mall's ice cream parlor, Scoops Ahoy, with her former classmate, Steve Harrington. Robin often poked fun at Steve's fleeting popularity and failure to woo over female customers. ",
        image: "images/robin-buckley.jpg"
      },
      {
        name: "Steve Harrington",
        birthday: "1966",
        birthplace: "Hawkins, Indiana",

        bio: "A student at Hawkins High School, he was best friends with Tommy H and Carol Perkins and the boyfriend of Nancy Wheeler. When Nancy's best friend, Barbara Holland, disappeared in 1983, she became distant and Steve thought she was cheating.",
        image: "images/steve-harrington.jpg"
      },
      {
        name: "Dustin Henderson",
        birthday: "1971",
        birthplace: "Hawkins, Indiana",
        bio: "Dustin was somewhat of a typical nerd, and had a rare genetic disorder that prevented his teeth from developing properly, making him a prime target for bullies. He arrived in Hawkins in fourth grade, growing a strong bond with Mike.",
        image: "images/dustin-henderson.jpg"
      },

      {
        name: "Jane Hopper ",
        birthday: "1987",
        birthplace: "Hawkins, Indiana",
        bio: "Jane was born with special psychokinetic abilities; Jane's mother, Terry, was experimented upon in the controversial government program known as MKUltra, which, by accident or by Dr. Martin Brenner's design, affected Jane in the womb.",
        image: "images/eleven.jpg"
      }
    ]);

    // 1. Function with a return statement
    function random() {
      return Math.random() - 0.5;
    }

    function shuffleCards() {
      // 2. Pass the NAME (reference), not the execution ()
      collection.value.sort(random);
    }


    return {
      collection,
      shuffleCards, 
      openDrawer,
      toggleDrawer, 
      projects
    }
  }
}

createApp(App).use(vuetify).mount('#app');