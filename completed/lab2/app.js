const { createApp } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
 setup() {

  const name = "Robin Buckley";
  const birthday = "March 10, 1968";
  const birthplace = "Hawkins, Indiana";
  const bio = "Robin Buckley is a fan-favorite character from Stranger Things, first introduced in Season 3. She is a brilliant, multilingual, and sarcastic employee at the Scoops Ahoy ice cream parlor in the Starcourt Mall. Beyond her witty personality, she is a key member of the Hawkins Crew, famously using her code-breaking skills to translate secret Russian transmissions and help save the town.";
  const image = "robin-buckley.jpg";

 return {
   name,
   birthday,
   birthplace,
   bio,
   image
  }
 }
}

createApp(App).use(vuetify).mount('#app');