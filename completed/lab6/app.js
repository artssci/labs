const { createApp, ref, computed, onMounted } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
  setup() {

    // immigration targets
    const targets = [
      { title: 'Temporary Resident Targets', subtitle: 'From 673,650 to 543,600', trend: [673650, 516600, 543600] },
      { title: 'Permanent Resident Targets', subtitle: 'From 385,000 to 365,000', trend: [395000, 380000, 365000] }
    ];

    // stepper descriptions
    const policies = [
      {
        title: 'Economy and Labour Market Needs',
        description: 'In recent years, Canada welcomed newcomers to support our economy and address labour market needs. As we move away from post-pandemic measures, there is a need to better align temporary and permanent resident immigration levels with community capacity. The 2025-27 Levels Plan adopts a whole-of-society approach to be responsive to needs of newcomers and Canadians, including through consultations with federal departments and agencies, provinces and territories, municipalities, Indigenous Peoples, stakeholders, communities and Canadians.',
      },
      {
        title: 'Temporary Residents',
        description: 'To ensure a well-managed migration system the Government is reducing the share of temporary residents to 5% of the total population by the end of 2026. A series of measures have been announced over the course of the past year to achieve this goal, including an intake cap on most study permit applications and an amended cost of living requirement for students, eligibility changes to Post-Graduation Work Permits and to work permits issued to the spouses of international students and foreign workers under both the International Mobility Program (IMP) and Temporary Foreign Worker (TFW) Program. Additional measures applied to the low-wage stream of the TFW Program were also recently introduced to better align the program with current labour market conditions.',
      },
      {
        title: 'International Students',
        description: 'In keeping with these reductions, targets for new temporary resident arrivals are set at 673,650 in 2025, 516,600 in 2026, and 543,600 in 2027. These figures represent work and study permits issued to new arrivals to Canada. The target in 2025 for international students reflects the previously announced study permit cap (new arrivals only), and represents 45% of overall new temporary resident arrivals. In 2026 and 2027, international students make up the majority of temporary resident arrivals at 59% and 56% respectively, while the remainder of the arrivals will be allocated to temporary workers under both the IMP and TFW Program. These targets support the needs of our labour market and Canadian employers, especially in sectors that rely on temporary workers.',
      },
      {
        title: 'Permanent Residents',
        description: 'The 2025-27 Levels Plan projects a decrease in overall permanent resident admissions to 395,000 in 2025, 380,000 in 2026 and 365,000 in 2027. Supporting the Canadian economy continues to be a key priority of this Levels Plan as the economic category represents the largest proportion of admissions each year, reaching nearly 62% by 2027. A greater share of economic admissions are allocated under “Federal Economic Priorities” to skilled workers with a focus on critical sectors, such as health care and skilled trades, in recognition of the importance of supporting these sectors.',
      }
    ];

    // immigration per province

    const immigrationCountries = [
      {
        country: 'India',
        Number: '147,190'
      },
      {
        country: 'Philippines',
        Number: '188,805'
      },
      {
        country: 'China',
        Number: '129,020'
      },
      {
        country: 'Syria',
        Number: '29,945'
      },
      {
        country: 'Nigeria',
        Number: '17,285'
      },
      {
        country: 'United States of America	',
        Number: '33,060'
      }
    ]

    return {
      targets,
      policies,
      immigrationCountries
    };
  }
};

createApp(App).use(vuetify).mount('#app');